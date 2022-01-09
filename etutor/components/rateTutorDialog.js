import { useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

import { DanhGiaService } from '../serviceAPI/DanhGiaService';
import MyToast from './myToast';

export default function RateTutorDialog({show, handleClose }) {

  const [star, setStar] = useState(1);
  const [comment, setComment] = useState("");
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

  return (
    <>
    <MyToast content={contentToast} show={showToast} handleClose={handleCloseToast}></MyToast>
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Đánh giá gia sư</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error ? <p style={{color: "red"}}>Vui lòng nhập số sao và bình luận.</p> : <></>}
        <Form.Label htmlFor="star">Chọn số sao bạn muốn đánh giá: </Form.Label>
        <Form.Select id="star" type="text" placeholder="Số sao" as="select" value={star} onChange={ (event) => {
            setStar(event.target.value);
        }}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Select>

        <br></br>

        <Form.Control type="text" placeholder="Bình luận" as="textarea" value={comment} onChange={ (event) => {
          setComment(event.target.value);
        }}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
        <Button variant="primary" onClick={async () => {
          if(comment === ""){
            setError(true);
          }
          else{
            const res = await DanhGiaService.rateTeacher(1, 1, parseInt(star), comment);
            
            if(res && res.ok){
              handleClose();
              setStar(1);
              setComment("");
              handleShowToast("Đánh giá thành công");
            }
            else {
              handleClose();
              setStar(1);
              setComment("");
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