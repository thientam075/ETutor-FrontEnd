import Navbar from "../components/navbar";
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { API } from '../configs';
import qs from 'qs';
import { useRouter } from 'next/router';
import Loader from "react-loader-spinner";
import Pagination from "../components/pagination";
import moment from 'moment';

const ThCenter = (props) => <th {...props} className="text-center bg-light" />
const TdCenter = (props) => <td {...props} className="text-center" />

const ListReport = () => {
  const router = useRouter();

  const [reports, setReports] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [page, setPage] = useState(router.query.page || 1);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getListReport = async (page) => {
    setIsLoading(true);
    const query = qs.stringify({
      pagination: {
        page,
        pageSize: 1,
      },
      populate: '*',
    }, {
      encodeValuesOnly: true,
    })
    const response = await fetch(API.REPORT.LIST + query);
    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
      setPageCount(result.meta.pagination.pageCount);
      setReports(result.data);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getListReport(page);
  }, [page]);

  useEffect(() => {
    if (router.query.page) {
      setPage(router.query.page);
    }
  }, [router.query.page]);

  const onChangePage = (page) => {
    setPage(page);
    router.push(`/listReport?page=${page}`, undefined, { shallow: true });
  }

  const fields = [
    'Tên gia sư',
    'Tên học viên',
    'Thời gian gửi report',
    'Lý do',
  ];

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column align-items-center pt-4">
        <h4 className="text-center">Bảng danh sách các report gia sư từ học viên</h4>
        <div style={styles.separated} className="mx-auto bg-dark mt-4"/>
        <div className="d-flex justify-content-between w-50 mt-4">
          <div className="d-flex align-items-center me-2" style={styles.text1line}>
            <div className="me-2">Từ ngày :</div>
            <DatePicker
              selected={startDate}
              onChange={setStartDate}
            />
          </div>
          <div className="d-flex align-items-center" style={styles.text1line}>
            <div className="me-2">Đến ngày :</div>
            <DatePicker
              selected={endDate}
              onChange={setEndDate}
            />
          </div>
        </div>
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={75}
            width={75}
            timeout={0}
          />
        )}
        {!isLoading && (
          <div style={styles.wrapTable}>
            <table className="table table-bordered">
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
                    <TdCenter>{report.attributes.IDTeacher.data.attributes.Fullname}</TdCenter>
                    <TdCenter>{report.attributes.IDStudent.data.attributes.Fullname}</TdCenter>
                    <TdCenter>{moment(report.attributes.createdAt).format('DD/MM/YYYY')}</TdCenter>
                    <TdCenter>{report.attributes.Reason}</TdCenter>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <Pagination
          page={page}
          pageCount={pageCount}
          onChangePage={onChangePage}
        />
      </div>
    </>
  )
}

export default ListReport; 

const styles = {
  wrapTable: {
    width: '90%',
    marginTop: '30px',
    marginBottom: '30px',
  },
  separated: {
    width: '50%',
    height: '1px',
  },
  text1line: {
    whiteSpace: 'nowrap',
  }
}