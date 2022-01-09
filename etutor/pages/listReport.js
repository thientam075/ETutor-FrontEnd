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
import withAdminAuth from '../hoc/withAdminAuth';

const ThCenter = (props) => <th {...props} className="text-center bg-light" />
const TdCenter = (props) => <td {...props} className="text-center" />

const ListReport = () => {
  const router = useRouter();

  const [reports, setReports] = useState([]);
  const [page, setPage] = useState(router.query.page || 1);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [startDate, setStartDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date;
  });
  const [endDate, setEndDate] = useState(new Date());

  const getListReport = async (page, startDate, endDate) => {
    setIsLoading(true);
    try {
      const query = qs.stringify({
        sort: ['id:desc'],
        filters: {
          $and: [
            {
              createdAt: {
                $gte: moment(startDate).format('YYYY-MM-DD'),
              },
            },
            {
              createdAt: {
                $lte: moment(endDate).add(1, 'days').format('YYYY-MM-DD'),
              }
            }
          ]
        },
        pagination: {
          page,
          pageSize: 5,
        },
        populate: '*',
      }, {
        encodeValuesOnly: true,
      })
      const response = await fetch(API.REPORT.LIST + query);
      if (response.status === 200) {
        const result = await response.json();
        setPageCount(result.meta.pagination.pageCount);
        setReports(result.data);
      }
    } catch (e) {}
    setIsLoading(false);
  }

  useEffect(() => {
    getListReport(page, startDate, endDate);
  }, [page, startDate, endDate]);

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
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="d-flex align-items-center" style={styles.text1line}>
            <div className="me-2">Đến ngày :</div>
            <DatePicker
              selected={endDate}
              onChange={setEndDate}
              dateFormat="dd/MM/yyyy"
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

export default withAdminAuth(ListReport); 

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