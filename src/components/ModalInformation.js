import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const ModalInformation = (props) => {
  return (
    <div className="static-modal">
      <Modal show={props.showModalAsignatura} onHide={props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.close}>Close</Button>
            <Button onClick={props.close} bsStyle="primary">Seguir</Button>

          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ModalInformation ;
