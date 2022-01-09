import Navbar from "../components/navbar";
import React, { useEffect, useState } from 'react';
import { API } from '../configs';
import qs from 'qs';
import withAdminAuth from "../hoc/withAdminAuth";
import Loader from "react-loader-spinner";
import { Button, Modal } from 'react-bootstrap';
import { ToastHelper } from '../utils/Toast';
import { useAppSelector } from '../context';
 
const ThCenter = (props) => <th {...props} className="text-center bg-light" />
const TdCenter = (props) => <td {...props} className="text-center" />

const ListAccount = () => {
  const { jwt, user } = useAppSelector((state) => state.auth);

  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [stateModal, setStateModal] = useState({
    visible: false,
    title: '',
    message: '',
    account: null,
  });

  const getListAccount = async () => {
    if (!jwt) {
      return;
    }
    setIsLoading(true);
    try {
      const query = qs.stringify({
        sort: ['id:desc'],
      }, {
        encodeValuesOnly: true,
      })
      const response = await fetch(API.USER.LIST + query, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        }
      });
      const result = await response.json();
      if (response.status === 200) {
        setAccounts(result.filter((a) => a.id !== user.id));
      } else {
        ToastHelper.error(result.error.message);
      }
    } catch (e) {}
    setIsLoading(false);
  };

  useEffect(() => {
    getListAccount();
  }, [jwt])

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
          headers: { 
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            IsBan: !account.IsBan,
          })
        });
        const result = await response.json();
        if (response.status === 200) {
          setAccounts((accounts) => {
            const index = accounts.findIndex((a) => a.id === result.id);
            if (index === -1) {
              return accounts;
            }
            return [
              ...accounts.slice(0, index),
              result,
              ...accounts.slice(index + 1,)
            ];
          })
        } else {
          ToastHelper.error(result.error.message);
        }
      } catch (e) {}
      setIsLoading(false);
      return {
        ...state,
        visible: false,
      }
    })
  }

  const onShowModal = (account) => () => {
    if (account.IsBan) {
      setStateModal((state) => ({
        ...state,
        visible: true,
        title: 'Mở khóa tài khoản',
        message: 'Bạn có chắc chắn muốn mở khóa tài khoản ' + account.Fullname,
        account: account,
      }))
    } else {
      setStateModal((state) => ({
        ...state,
        visible: true,
        title: 'Khóa tài khoản',
        message: 'Bạn có chắc chắn muốn khóa tài khoản ' + account.Fullname,
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
    '',
  ];

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column align-items-center pt-4">
        <h4 className="text-center">Bảng danh sách các tài khoản người dùng</h4>
        <div style={styles.separated} className="mx-auto bg-dark mt-4"/>
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
                    <TdCenter>{account.Fullname}</TdCenter>
                    <TdCenter>{account.email}</TdCenter>
                    <TdCenter>
                      {account.IsBan ? (
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

export default  withAdminAuth(ListAccount); 

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