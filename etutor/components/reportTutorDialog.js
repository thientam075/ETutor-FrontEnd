import { useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

import MyToast from './myToast';

import { BaoCaoService } from '../serviceAPI/BaoCaoService';

export default function ReportTutorDialog({show, handleClose, idStudent, idTeacher, jwt }) {

  const [reason, setReason] = useState("");
  const [error, setError] = useState(false);
  const [contentToast, setContentToast] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = (content) => {
    setContentToast(content);
    setShowToast(true);
  }

  const handleCloseToast = () => {
    setShowToast(false);
  }

  const handleBeforeClose = () => {
    setReason("");
    setError(false);
  }

  return (
    <>
    <MyToast content={contentToast} show={showToast} handleClose={handleCloseToast}></MyToast>
    <Modal show={show} onHide={() => {
      handleBeforeClose();
      handleClose();
      }
    } centered>
      <Modal.Header closeButton>
        <Modal.Title>Báo cáo gia sư</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error ? <p style={{color: "red"}}>Vui lòng điền lý do báo cáo.</p> : <></>}
        <Form.Control type="text" placeholder="Lý do báo cáo" as="textarea" value={reason} onChange={ (event) => {
          setReason(event.target.value);
        }}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {
          handleBeforeClose();
          handleClose();
          }
        }>
          Đóng
        </Button>
        <Button variant="primary" onClick={async() => {
           if(reason === ""){
            setError(true);
          }
          else{
            const res = await BaoCaoService.reportTeacher(idStudent, idTeacher, reason, jwt);
              
            if(res && res.ok){
              handleBeforeClose();
              handleClose();
              handleShowToast("Báo cáo thành công");
            }
            else {
              handleBeforeClose();
              handleClose();
              handleShowToast("Đã xảy ra lỗi");
            }
          }
        }}>
          Thực hiện
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}