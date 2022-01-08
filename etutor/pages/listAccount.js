import Navbar from "../components/navbar";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import { API } from '../configs';
import qs from 'qs';
import { useRouter } from 'next/router';
import Loader from "react-loader-spinner";
import Pagination from "../components/pagination";
 
const ThCenter = (props) => <th {...props} className="text-center bg-light" />
const TdCenter = (props) => <td {...props} className="text-center" />

const ListAccount = () => {
  const router = useRouter();

  const [accounts, setAccounts] = useState([]);
  const [page, setPage] = useState(router.query.page || 1);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getListAccount = async (page) => {
    setIsLoading(true);
    const query = qs.stringify({
      pagination: {
        page,
        pageSize: 1,
      },
    }, {
      encodeValuesOnly: true,
    })
    const response = await fetch(API.USER.LIST + query);
    if (response.status === 200) {
      const result = await response.json();
      setPageCount(result.meta.pagination.pageCount);
      setAccounts(result.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getListAccount(page);
  }, [page])

  useEffect(() => {
    if (router.query.page) {
      setPage(parseInt(router.query.page));
    }
  }, [router.query.page]);

  const onChangePage = (page) => {
    setPage(page);
    router.push(`/listAccount?page=${page}`, undefined, { shallow: true });
  }

  const onBanOrUnban = (account) => async () => {
    setIsLoading(true);
    const response = await fetch(API.USER.MANAGE_ACCESS(account.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          IsBan: !account.attributes.IsBan,
        }
      })
    });
    if (response.status === 200) {
      const json = await response.json();
      const updatedAccount = json.data;
      setAccounts((accounts) => {
        const index = accounts.findIndex((a) => a.id === updatedAccount.id);
        if (index === -1) {
          return accounts;
        }
        return [
          ...accounts.slice(0, index),
          updatedAccount,
          ...accounts.slice(index + 1,)
        ];
      })
    }
    setIsLoading(false);
  }

  const fields = [
    'UserId',
    'Tên gia sư',
    'Email',
    'Số điện thoại',
    '',
  ];

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column align-items-center pt-4">
        <h4 className="text-center">Bảng danh sách các tài khoản người dùng</h4>
        <div style={styles.separated} className="mx-auto bg-dark mt-4"/>
        <form className="d-flex mt-4" action="#" method="post">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Tìm kiếm..."
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            <BsSearch/>
          </button>
        </form>
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
                {accounts.map((account, i) => (
                  <tr key={`row_${i}`}>
                    <TdCenter>{account.id}</TdCenter>
                    <TdCenter>{account.attributes.Fullname}</TdCenter>
                    <TdCenter>{account.attributes.Email}</TdCenter>
                    <TdCenter>{account.phone}</TdCenter>
                    <TdCenter>
                      {account.attributes.IsBan ? (
                        <button onClick={onBanOrUnban(account)} type="button" className="btn btn-success w-75">Mở khóa</button>
                      ) : (
                        <button onClick={onBanOrUnban(account)} type="button" className="btn btn-danger w-75">Khóa</button>
                      )}
                    </TdCenter>
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

export default ListAccount; 

const styles = {
  wrapTable: {
    width: '90%',
    marginTop: '30px',
    marginBottom: '30px',
  },
  separated: {
    width: '50%',
    height: '1px',
  }
}