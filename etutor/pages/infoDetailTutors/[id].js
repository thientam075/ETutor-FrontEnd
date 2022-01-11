import { useState } from "react";
import InfoTutor from "../../components/infoTutor";
import Navbar from "../../components/navbar";
import { TinQuangBaService } from "../../serviceAPI/TinQuangBaService";
import RateTutorDialog from "../../components/rateTutorDialog";
import ReportTutorDialog from "../../components/reportTutorDialog";
import withAuth from "../../hoc/withAuth";
import { useAppSelector } from '../../context';


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
  const data = await result.rows[0];

  return {
    props: { tutor: data },
  };
};

function InfoDetailTutor({ tutor }) {
  const { jwt, user } = useAppSelector((state) => state.auth);
  const [showReportDialog, setShowReportDialog] = useState(false);
  const [showRateDialog, setShowRateDialog] = useState(false);

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
    alert("Reload lại trang nếu bạn muốn xem bình luận mới nhất");
  };

  return (
    <>
      <Navbar />
      {tutor ? (
        <>
          <InfoTutor
            id={tutor.id}
            name={tutor.fullname}
            star={tutor.star}
            total_rating={tutor.total_rating}
            subjects={tutor.subjects}
            profile={tutor.profile}
            email={tutor.email}
            Times={tutor.time}
            cost={tutor.cost}
            avatar={tutor.avatar}
            handleShowReportDialog={handleShowReportDialog}
            handleShowRateDialog={handleShowRateDialog}
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
