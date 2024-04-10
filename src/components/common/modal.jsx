import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PopupModal({ show, handleCloseModal }) {
   

    return (
        <>
            <Modal size='md' centered show={show} onHide={handleCloseModal}>
                <Modal.Body className='success_modal'>
                    <h3>Thanks for getting in touch!</h3>
                    <p>We have received the details about the your concern.<br/> Our Team will contact you shortly.</p>
                    <Button className='modal_btn' variant="secondary" onClick={handleCloseModal}>
                        Done
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default PopupModal;