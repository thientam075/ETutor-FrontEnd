import { useState } from "react";

import InfoTutor from "../components/infoTutor";
import Navbar from "../components/navbar";
import RateTutorDialog from "../components/rateTutorDialog";
import ReportTutorDialog from "../components/reportTutorDialog";

const infoTutor1 = {
  name: "Ryan Bùi",
  star: 4,
  total_rating: 80,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  subjects: [
    "Toán", "Văn", "Sinh học"
  ],
  email: "ryanBui072@gmail.com",
  Times: [
    {value: "Thứ 2 - 8h", price: "100.000 VND", subject: "Sinh Học"},
    {value: "Thứ 3 - 9h", price: "120.000 VND", subject: "Toán"},
    {value: "Thứ 4 - 22h", price: "150.000 VND", subject: "Văn"}
  ],
};
export default function InfoDetailTutor() {
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
      <InfoTutor
        name={infoTutor1.name}
        star={infoTutor1.star}
        total_rating={infoTutor1.total_rating}
        subjects = {infoTutor1.subjects}
        description = {infoTutor1.description}
        email = {infoTutor1.email}
        Times = {infoTutor1.Times}
        handleShowReportDialog={handleShowReportDialog}
        handleShowRateDialog={handleShowRateDialog}
      />
      
      <ReportTutorDialog show={showReportDialog} handleClose={handleCloseReportDialog}></ReportTutorDialog>
      <RateTutorDialog show={showRateDialog} handleClose={handleCloseRateDialog}></RateTutorDialog>

    </>
  );
}
