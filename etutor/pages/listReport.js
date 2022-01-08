import Navbar from "../components/navbar";
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ThCenter = (props) => <th {...props} class="text-center bg-light" />
const TdCenter = (props) => <td {...props} class="text-center" />

const ListReport = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const fields = [
    'Tên gia sư',
    'Tên học viên',
    'Thời gian gửi report',
    'Lý do',
  ];

  const reports = [
    {
      teacherName: 'thinh',
      studentName: 'thinh',
      reportedAt: '30/06/2021',
      reason: 'thich',
    },
    {
      teacherName: 'thinh',
      studentName: 'thinh',
      reportedAt: '30/06/2021',
      reason: 'thich',
    },
    {
      teacherName: 'thinh',
      studentName: 'thinh',
      reportedAt: '30/06/2021',
      reason: 'thich',
    },
    {
      teacherName: 'thinh',
      studentName: 'thinh',
      reportedAt: '30/06/2021',
      reason: 'thich',
    },
    {
      teacherName: 'thinh',
      studentName: 'thinh',
      reportedAt: '30/06/2021',
      reason: 'thich',
    },
  ]

  return (
    <>
      <Navbar />
      <div class="d-flex flex-column align-items-center pt-4">
        <h4 class="text-center">Bảng danh sách các report gia sư từ học viên</h4>
        <div style={styles.separated} class="mx-auto bg-dark mt-4"/>
        <div class="d-flex justify-content-between w-50 mt-4">
          <div class="d-flex align-items-center me-2" style={styles.text1line}>
            <div class="me-2">Từ ngày :</div>
            <DatePicker
              selected={startDate}
              onChange={setStartDate}
            />
          </div>
          <div class="d-flex align-items-center" style={styles.text1line}>
            <div class="me-2">Đến ngày :</div>
            <DatePicker
              selected={endDate}
              onChange={setEndDate}
            />
          </div>
        </div>
        <div style={styles.wrapTable}>
          <table class="table table-bordered">
            <thead>
              <tr>
                {fields.map((field, i) => (
                  <ThCenter key={`field_${i}`} scope="col">{field}</ThCenter>
                ))}
              </tr>
            </thead>
            <tbody>
              {reports.map((report, i) => (
                <tr key={`row_${i}`}>
                  <TdCenter>{report.teacherName}</TdCenter>
                  <TdCenter>{report.studentName}</TdCenter>
                  <TdCenter>{report.reportedAt}</TdCenter>
                  <TdCenter>{report.reason}</TdCenter>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav class="d-flex justify-content-center">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default ListReport; 

const styles = {
  wrapTable: {
    'width': '90%',
    'margin-top': '30px',
    'margin-bottom': '30px',
  },
  separated: {
    'width': '50%',
    'height': '1px',
  },
  text1line: {
    'white-space': 'nowrap',
  }
}