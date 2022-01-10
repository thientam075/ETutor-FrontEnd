import { useState } from 'react';
import { API } from "../../configs";
import InfoTutor from '../../components/infoTutor';
import Navbar from "../../components/navbar";


import { useAppSelector } from "../../context";
import RateTutorDialog from "../../components/rateTutorDialog";
import ReportTutorDialog from "../../components/reportTutorDialog";
import withAuth from "../../hoc/withAuth";

export const getStaticPaths = async () => {
  const pages = await (await fetch(API.TinQuangBa.LIST)).json();

  const paths = await pages.rows.map(tutor => {
    return {
      params: {id: tutor.id.toString()}
    }
  });
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await (await fetch(API.TinQuangBa.FULLINFO(id))).json();
  console.log('res' + res);
  const data = await res.rows[0];

  return {
    props: {tutor: data}
  };
}

function InfoDetailTutor({tutor}) {
  const { jwt, user } = useAppSelector((state) => state.auth);
  const [showReportDialog, setShowReportDialog] = useState(false);
  const [showRateDialog, setShowRateDialog] = useState(false);

  const handleShowReportDialog = () => {
    setShowReportDialog(true);
  }

  const handleCloseReportDialog = () => {
    setShowReportDialog(false);
  }

  const handleShowRateDialog = () => {
    setShowRateDialog(true);
  }

  const handleCloseRateDialog = () => {
    setShowRateDialog(false);
  }
  
  return (
    <>
       <Navbar />
       {tutor ?
       <> 
      <InfoTutor
        name={tutor.fullname}
        star={tutor.star}
        total_rating={tutor.total_rating}
        subjects = {tutor.subjects}
        profile = {tutor.profile}
        email = {tutor.email}
        Times = {tutor.time}
        cost = {tutor.cost}
        handleShowReportDialog={handleShowReportDialog}
        handleShowRateDialog={handleShowRateDialog}
      />
      <ReportTutorDialog show={showReportDialog} handleClose={handleCloseReportDialog}></ReportTutorDialog>
      <RateTutorDialog show={showRateDialog} handleClose={handleCloseRateDialog}></RateTutorDialog>
       </>: <h5 className="text-center mt-3"> Gia sư hiện tại hoặc bị ban không tồn tại</h5>}
    </>
  );
}

export default withAuth(InfoDetailTutor);