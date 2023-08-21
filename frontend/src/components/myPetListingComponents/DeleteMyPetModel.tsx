import { Modal, Button } from 'react-bootstrap';
import { DeleteModelProp } from '../commonComponents/helpers/DeleteModelProp';

const DeleteMyPetModel = (props: DeleteModelProp) => {

    return (
        <Modal show={props.show} onHide={props.onClose} aria-labelledby="contained-modal-title-vcenter" centered>
            
            <Modal.Header closeButton>
                <Modal.Title>Delete My Pet Listing</Modal.Title>
            </Modal.Header>

            <Modal.Body>Are you sure you want to delete this Pet Listing?</Modal.Body>

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

export default DeleteMyPetModel