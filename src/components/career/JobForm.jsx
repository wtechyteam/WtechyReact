import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import InnerBanner from '../common/InnerBanner';

const JobForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        attachment: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'attachment') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if required fields are filled
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill out all required fields.');
            return;
        }
        try {
            const attachmentData = formData.attachment ? await readFileAsBase64(formData.attachment) : null;
            const emailData = {
                ...formData,
                attachment: attachmentData
            };
            await emailjs.send('service_8b1fceq', 'template_bu71jcz', emailData, 'jNSdbbDQqsd5AEn6x');
            toast.success('Email sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                attachment: null
            });
        } catch (error) {
            toast.error('Error sending email:', error);
        }
    };

    const readFileAsBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = (error) => reject(error);
        });
    };


    return (
        <>
            <InnerBanner
                title={'Apply For Job'}
                info={'Please submit the form below and we will get back to you as soon as possible.'}
            />
            <section className='sectionPadding'>
                <div className="container ">
                    <form className="customForm col-lg-8 bg-gray py-5 px-5 mx-auto" onSubmit={handleSubmit}>
                        <div className="row mx-0">
                            <div className='inputWrap col-lg-6'>
                                <input className='form_input' type="text" placeholder="First Name*" name="name" value={formData.firstName} onChange={handleChange} required />
                            </div>
                            <div className='inputWrap col-lg-6'>
                                <input className='form_input' type="text" placeholder="Last Name*" name="name" value={formData.lastName} onChange={handleChange} required />
                            </div>
                            <div className='inputWrap col-lg-6'>
                                <input className='form_input' type="text" placeholder="Phone*" name="phone" value={formData.phone} onChange={handleChange} />
                            </div>
                            <div className='inputWrap col-lg-6'>
                                <input className='form_input' type="email" placeholder="Email*" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className='inputWrap col-lg-12'>
                                <textarea className='form_input textarea' placeholder="Address*" name="message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>

                            <div className='inputWrap col-lg-6'>
                                <label>Attachment: </label>
                                <input className='form_input' type="file" name="attachment" onChange={handleChange} />
                            </div>

                            <div className='inputWrap mb-0 col-lg-12'>
                                <button className="dBtn btnSecondary rounded-0 hasShadow w-100 py-2" type="submit">Submit</button>
                            </div>

                        </div>
                    </form>

                </div>
            </section>

        </>
    );
};


export default JobForm;