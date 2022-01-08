import { useState } from 'react';

import {Button, Modal, Form} from 'react-bootstrap';

export default function ReportTutorDialog({show, handleClose }) {

  const [reason, setReason] = useState("");

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Báo cáo gia sư</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control type="text" placeholder="Lý do báo cáo" as="textarea" value={reason} onChange={ (event) => {
          setReason(event.target.value);
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