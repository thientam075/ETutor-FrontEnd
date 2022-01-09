import Navbar from "../components/navbar";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import { API } from '../configs';
import qs from 'qs';
import { useRouter } from 'next/router';
import Loader from "react-loader-spinner";
import Pagination from "../components/pagination";
import { Button, Modal } from 'react-bootstrap';
 
const ThCenter = (props) => <th {...props} className="text-center bg-light" />
const TdCenter = (props) => <td {...props} className="text-center" />

const ListAccount = () => {
  const router = useRouter();

  const [accounts, setAccounts] = useState([]);
  const [page, setPage] = useState(router.query.page || 1);
  const [pageCount, setPageCount] = useState(0);
  const [textSearch, setTextSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [stateModal, setStateModal] = useState({
    visible: false,
    title: '',
    message: '',
    account: null,
  });

  const getListAccount = async (page, textSearch = '') => {
    setIsLoading(true);
    try {
      const query = qs.stringify({
        sort: ['id:desc'],
        filters: {
          Fullname: {
            $containsi: textSearch,
          }
        },  
        pagination: {
          page,
          pageSize: 5,
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
    } catch (e) {}
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

  const onBanOrUnban = () => {
    setStateModal(async (state) => {
      const { account } = state;
      if (!account) {
        setIsLoading(false);
        return state;
      }

      setIsLoading(true);
      try {
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
      } catch (e) {}
      setIsLoading(false);
      return {
        ...state,
        visible: false,
      }
    })
  }

  const onChangeText = (e) => {
    setTextSearch(e.target.value);
  }

  const onSearch = () => {
    getListAccount(1, textSearch);
  }

  const onShowModal = (account) => () => {
    if (account.attributes.IsBan) {
      setStateModal((state) => ({
        ...state,
        visible: true,
        title: 'Mở khóa tài khoản',
        message: 'Bạn có chắc chắn muốn mở khóa tài khoản ' + account.attributes.Fullname,
        account: account,
      }))
    } else {
      setStateModal((state) => ({
        ...state,
        visible: true,
        title: 'Khóa tài khoản',
        message: 'Bạn có chắc chắn muốn khóa tài khoản ' + account.attributes.Fullname,
        account: account,
      }))
    }
  }

  const onHideModal = () => {
    setStateModal((state) => ({
      ...state,
      visible: false,
    }));
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
        <div className="d-flex mt-4">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Tìm kiếm..."
            aria-label="Search"
            value={textSearch}
            onChange={onChangeText}
          />
          <button onClick={onSearch} className="btn btn-primary">
            <BsSearch/>
          </button>
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
                {accounts.map((account, i) => (
                  <tr key={`row_${i}`}>
                    <TdCenter>{account.id}</TdCenter>
                    <TdCenter>{account.attributes.Fullname}</TdCenter>
                    <TdCenter>{account.attributes.Email}</TdCenter>
                    <TdCenter>{account.phone}</TdCenter>
                    <TdCenter>
                      {account.attributes.IsBan ? (
                        <button onClick={onShowModal(account)} type="button" className="btn btn-success w-75">Mở khóa</button>
                      ) : (
                        <button onClick={onShowModal(account)} type="button" className="btn btn-danger w-75">Khóa</button>
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
        <Modal show={stateModal.visible} onHide={onHideModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{stateModal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {stateModal.message}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHideModal}>
              Đóng
            </Button>
            <Button variant="primary" onClick={onBanOrUnban}>
              Thực hiện
            </Button>
          </Modal.Footer>
        </Modal>
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