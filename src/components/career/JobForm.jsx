import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

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
        <section className='sectionPadding'>
            <div className="container ">
                <form className="customForm col-lg-8 bg-gray py-5 px-5 mx-auto" onSubmit={handleSubmit}>
                    <div className="row mx-0">
                        <div className='inputWrap col-lg-6'>
                            <label>Name: </label>
                            <input className='form_input' type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className='inputWrap col-lg-6'>
                            <label>Email: </label>
                            <input className='form_input' type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className='inputWrap col-lg-6'>
                            <label>Phone: </label>
                            <input className='form_input' type="text" name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className='inputWrap col-lg-6'>
                            <label>Attachment: </label>
                            <input className='form_input' type="file" name="attachment" onChange={handleChange} />
                        </div>
                        <div className='inputWrap col-lg-12'>
                            <label>Message: </label>
                            <textarea className='form_input textarea' name="message" value={formData.message} onChange={handleChange} required></textarea>
                        </div>

                        <div className='inputWrap mb-0 col-lg-12'>
                            <button className="dBtn btnSecondary rounded-0 hasShadow w-100 py-2" type="submit">Submit</button>
                        </div>

                    </div>
                </form>

            </div>
        </section>
    );
};


export default JobForm;