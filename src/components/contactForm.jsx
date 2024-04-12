import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PopupModal from './common/modal';

const MyForm = () => {
    const [show, setShow] = useState(false);

    const handleCloseModal = () => {
        window.location.reload();
        setShow(false);
    }

    const handleShowModal = () => setShow(true);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_8tiqz08', 'template_ojpyfvk', form.current, {
                publicKey: 'R3qMEbTFpNoo0gXc8',
            })
            .then(
                () => {
                    setShow(true)
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <form className="customForm bg-gray px-4 py-5 rounded-2" ref={form} onSubmit={sendEmail}>
                <div className="row mx-0">
                    <h3 className='title-lg fw-bold'>How Can We Help?</h3>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <div className='inputWrap col-lg-6'>
                        <input placeholder='Name*' className='form_input' type="text" name="from_name" required />
                    </div>
                    <div className='inputWrap col-lg-6'>
                        <input className='form_input' placeholder='Email*' type="email" name="from_email" required />
                    </div>
                    <div className='inputWrap col-lg-6'>
                        <input placeholder='Number*' className='form_input' type="text" name="phone" required />
                    </div>
                    <div className='inputWrap col-lg-6'>
                        <input className='form_input' type="text" name="subject" placeholder="How can we help you?*" required />
                    </div>
                   
                    <div className='inputWrap col-lg-12'>
                        <textarea className='form_input' placeholder='Message...' name="message" />
                    </div>
                    <div className="col-12">
                        <button className='dBtn btnSecondary rounded-0 hasShadow w-100 py-2' type="submit" >Contact Us</button>
                    </div>
                </div>
            </form>
            <PopupModal handleCloseModal={handleCloseModal} handleShowModal={handleShowModal} show={show} />
            {/* <div>
                <form
                    action="https://formspree.io/f/mdoqplvo"
                    method="POST"
                    enctype="multipart/form-data"
                    >
                    <label>
                        Your email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Your file:
                        <input type="file" name="upload" />
                    </label>
                    <button type="submit">Send</button>
                    </form>
            </div> */}
        </>

    )
}
export default MyForm;