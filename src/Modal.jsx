// LOS MODALS SON LAS VENTANAS EMERGENTES PARA LA EDICIÓN
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';  //Instalamos Bootstrap con 
//"npm install react-bootstrap" xq sino no funca

export default function ModalReact({task, setTask}) {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

