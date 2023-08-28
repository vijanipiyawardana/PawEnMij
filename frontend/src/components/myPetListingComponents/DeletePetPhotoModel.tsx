import { Modal, Button } from 'react-bootstrap';
import { DeleteModelProp } from '../commonComponents/helpers/DeleteModelProp';

const  DeletePetPhotoModel = (props: DeleteModelProp) => {
  return (
    <Modal show={props.show} onHide={props.onClose} aria-labelledby="contained-modal-title-vcenter" centered>
            
            <Modal.Header closeButton>
                <Modal.Title>Delete Pet Photo</Modal.Title>
            </Modal.Header>

            <Modal.Body>Are you sure you want to delete this photo?</Modal.Body>

            <Modal.Footer>
                <Button variant="info" onClick={props.onClose}>
                    Cancel
                </Button>
                <Button className='btn-danger' variant="danger" onClick={props.onDelete}>
                    Delete
                </Button>
            </Modal.Footer>

        </Modal>
  )
}

export default DeletePetPhotoModel