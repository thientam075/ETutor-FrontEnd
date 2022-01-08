import { useState } from 'react';

import {Button, Modal, Form} from 'react-bootstrap';

export default function RateTutorDialog({show, handleClose }) {

  const [star, setStar] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Đánh giá gia sư</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label htmlFor="star">Chọn số sao bạn muốn đánh giá: </Form.Label>
        <Form.Select id="star" type="text" placeholder="Số sao" as="select" value={comment} onChange={ (event) => {
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
        <Button variant="primary" onClick={handleClose}>
          Thực hiện
        </Button>
      </Modal.Footer>
    </Modal>
  )
}