import {useRouter} from "next/router";
import { useEffect, useState } from 'react';
import { API } from "../../configs";
import InfoTutor from '../../components/infoTutor';
import Navbar from "../../components/navbar";

import RateTutorDialog from "../../components/rateTutorDialog";
import ReportTutorDialog from "../../components/reportTutorDialog";

export const getStaticPaths = async () => {
  const pages = await (await fetch(API.TinQuangBa.LIST)).json();

  const paths = await pages.rows.map(tutor => {
    return {
      params: {id: tutor.id.toString()}
    }
  });
  console.log(paths);
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(API.TinQuangBa.FULLINFO(id));
  const data = await res.json();

  return {
    props: {tutor: data.rows}
  };
}

export default function InfoDetailTutor({tutor}) {
  // const router = useRouter();
  // const {tutorID} = router.query;
  // const [tutor, setTutor] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const [showReportDialog, setShowReportDialog] = useState(false);
  const [showRateDialog, setShowRateDialog] = useState(false);

  // const fetchTutor = async (tutorID) => {
  //   await fetch(API.TinQuangBa.FULLINFO(tutorID), {
  //     headers: {'Content-Type':'application/json'},
  //     })
  //     .then(res => {
  //       if (!res.ok) {
  //         setError(true);
  //       } else {
  //         res.json().then((result) => {
  //           if (result.rowCount !== 0) {
  //             setTutor(result.rows);
  //             setLoading(true);
  //           }
  //         });
  //       }
  //     }) 
  // };
  // useEffect(() => {
  //   console.log('router: ' + router);
  //   fetchTutor(tutorID);
  // }, [loading]);

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
        handleShowReportDialog={handleShowReportDialog}
        handleShowRateDialog={handleShowRateDialog}
      />
      <ReportTutorDialog show={showReportDialog} handleClose={handleCloseReportDialog}></ReportTutorDialog>
      <RateTutorDialog show={showRateDialog} handleClose={handleCloseRateDialog}></RateTutorDialog>
       </>: <h5 className="text-center mt-3"> Gia sư hiện tại không tồn tại</h5>}
    </>
  );
}

