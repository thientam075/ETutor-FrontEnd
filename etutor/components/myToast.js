import { ToastContainer, Toast } from "react-bootstrap"

export default function MyToast({content, show, handleClose}) {
  return(
    <ToastContainer position="top-end" style={{zIndex:10}}>
      <Toast onClose={handleClose} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">Etutor</strong>
        </Toast.Header>
        <Toast.Body>{content}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}