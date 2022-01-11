import { useState } from "react";
import InfoTutor from "../../components/infoTutor";
import Navbar from "../../components/navbar";
import RateTutorDialog from "../../components/rateTutorDialog";
import ReportTutorDialog from "../../components/reportTutorDialog";
import { useAppSelector } from '../../context';
import withAuth from "../../hoc/withAuth";
import { TinQuangBaService } from "../../serviceAPI/TinQuangBaService";


export const getStaticPaths = async () => {
  const res = await TinQuangBaService.AllTutor();
  const pages = await res.json();

  const paths = await pages.rows.map((tutor) => {
    return {
      params: { id: tutor.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await TinQuangBaService.fullInfo(id);
  const result = await res.json();
  const data = await result;

  return {
    props: { tutor: data },
  };
};

function InfoDetailTutor({ tutor }) {
  const { jwt, user } = useAppSelector((state) => state.auth);
  const [showReportDialog, setShowReportDialog] = useState(false);
  const [showRateDialog, setShowRateDialog] = useState(false);
  const [star, setStar] = useState(parseFloat(tutor.star));
  const [totalRating, setTotalRating] = useState(parseInt(tutor.total_rating));
  const [loaded, setLoaded] = useState(false);
  const handleShowReportDialog = () => {
    setShowReportDialog(true);
  };

  const handleCloseReportDialog = () => {
    setShowReportDialog(false);
  };

  const handleShowRateDialog = () => {
    setShowRateDialog(true);
  };

  const handleCloseRateDialog = () => {
    setShowRateDialog(false);
    setLoaded(!loaded);
  };

  const handleRate = (newstar) => {
    setStar(((star * totalRating) + newstar)/(totalRating + 1));
    setTotalRating(totalRating + 1);
  }

  return (
    <>
      <Navbar />
      {tutor ? (
        <>
          <InfoTutor
            id={tutor.id}
            name={tutor.fullname}
            star={star}
            total_rating={totalRating}
            subjects={tutor.subjects}
            profile={tutor.profile}
            email={tutor.email}
            Times={tutor.time}
            cost={tutor.cost}
            avatar={tutor.avatar}
            handleShowReportDialog={handleShowReportDialog}
            handleShowRateDialog={handleShowRateDialog}
            loaded = {loaded}
          />
          <ReportTutorDialog
            show={showReportDialog}
            handleClose={handleCloseReportDialog}
            idStudent={user.id}
            idTeacher={tutor.id}
            jwt={jwt}
          ></ReportTutorDialog>
          <RateTutorDialog
            show={showRateDialog}
            handleClose={handleCloseRateDialog}
            idStudent={user.id}
            idTeacher={tutor.id}
            jwt={jwt}
            handleRate={handleRate}
          ></RateTutorDialog>
        </>
      ) : (
        <h5 className="text-center mt-3">
          {" "}
          Gia sư hiện tại hoặc bị ban không tồn tại
        </h5>
      )}
    </>
  );
}

export default withAuth(InfoDetailTutor);
