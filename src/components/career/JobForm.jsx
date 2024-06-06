import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import InnerBanner from '../common/InnerBanner';
import axios from 'axios';
import HubspotForm from 'react-hubspot-form'

const JobForm = () => {



    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     phone: '',
    //     email: '',
    //     address: '',
    //     currentCTC: '',
    //     expectedCTC: '',
    //     currentLocation: '',
    //     joiningTime: '',
    //     resume: ''
    // });

    // const handleChange = (e) => {
    //     const { name, value, files } = e.target;
    //     if (name === 'attachment') {
    //         setFormData({ ...formData, [name]: files[0] });
    //     } else {
    //         setFormData({ ...formData, [name]: value });
    //     }
    // };


    // const handleSubmit = async (e) => {

    //     e.preventDefault();

    //     if (!formData.firstName || !formData.email || !formData.address || !formData.attachment) {
    //         toast.error('Please fill out all required fields.');
    //         return;
    //     }

    //     const formDataToSend = new FormData();
    //     formDataToSend.append('firstName', formData.firstName);
    //     formDataToSend.append('lastName', formData.lastName);
    //     formDataToSend.append('phone', formData.phone);
    //     formDataToSend.append('email', formData.email);
    //     formDataToSend.append('address', formData.address);
    //     formDataToSend.append('currentCTC', formData.currentCTC);
    //     formDataToSend.append('expectedCTC', formData.expectedCTC);
    //     formDataToSend.append('currentLocation', formData.currentLocation);
    //     formDataToSend.append('joiningTime', formData.joiningTime);
    //     formDataToSend.append('attachment', formData.attachment);

    //     try {
    //         await axios.post('http://localhost:8000/api/jobApplicants', formDataToSend);
    //         alert('User submitted successfully');
    //         setFormData({
    //             firstName: '',
    //             lastName: '',
    //             phone: '',
    //             email: '',
    //             address: '',
    //             currentCTC: '',
    //             expectedCTC: '',
    //             currentLocation: '',
    //             joiningTime: '',
    //             attachment: null
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         alert('Failed to submit user');
    //     }


    //     // try {
    //     //     const attachmentData = formData.attachment ? await readFileAsBase64(formData.attachment) : null;
    //     //     const emailData = {
    //     //         ...formData,
    //     //         attachment: attachmentData
    //     //     };
    //     //     await emailjs.send('service_8b1fceq', 'template_bu71jcz', emailData, 'jNSdbbDQqsd5AEn6x');
    //     //     toast.success('Email sent successfully!');
    //     //     setFormData({
    //     //         name: '',
    //     //         email: '',
    //     //         phone: '',
    //     //         message: '',
    //     //         attachment: null
    //     //     });
    //     // } catch (error) {
    //     //     toast.error('Error sending email:', error);
    //     // }
    // };

    // const readFileAsBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onload = () => resolve(reader.result.split(',')[1]);
    //         reader.onerror = (error) => reject(error);
    //     });
    // };


    return (
        <>
            <InnerBanner
                title={'Apply For Job'}
                info={'Please submit the form below and we will get back to you as soon as possible.'}
            />
            <section className="sectionPadding locationPage">
                <div className="container">
                    <div className={`row align-items-center`}>
                        <div className="col-md-7">
                            <HubspotForm
                                portalId='46372694'
                                formId='2a5c528c-ff45-414e-9fc3-fe7af792503f'
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Loading...</div>}
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* //         <section className='sectionPadding'>
    //             <div className="container ">
    //                 <form action='http://localhost:8000/upload' method='POST' enctype="multipart/form-data" className="customForm col-lg-8 bg-gray py-5 px-5 mx-auto" onSubmit={handleSubmit}>
    //                     <h2 className='title-lg text-center mb-3'>Fill the details below</h2>
    //                     <div className="row">
    //                         <div className='inputWrap col-lg-6'>
    //                             <input className='form_input' type="text" placeholder="First Name*" name="firstName" value={formData.firstName} onChange={handleChange} required />
    //                         </div>
    //                         <div className='inputWrap col-lg-6'>
    //                             <input className='form_input' type="text" placeholder="Last Name*" name="lastName" value={formData.lastName} onChange={handleChange} required />
    //                         </div>
    //                         <div className='inputWrap col-lg-6'>
    //                             <input className='form_input' type="text" placeholder="Phone*" name="phone" value={formData.phone} onChange={handleChange} required />
    //                         </div>
    //                         <div className='inputWrap col-lg-6'>
    //                             <input className='form_input' type="email" placeholder="Email*" name="email" value={formData.email} onChange={handleChange} required />
    //                         </div>
    //                         <div className='inputWrap col-lg-12'>
    //                             <textarea className='form_input textarea' placeholder="Address*" name="address" value={formData.address} onChange={handleChange} required></textarea>
    //                         </div>
    //                         <div className='inputWrap col-lg-6'>
    //                             <input className='form_input' type="text" placeholder="Current CTC*" name="currentCTC" value={formData.currentCTC} onChange={handleChange} />
    //                         </div>
    //                         <div className='inputWrap col-lg-6'>
    //                             <input className='form_input' type="text" placeholder="Expected CTC*" name="expectedCTC" value={formData.expectedCTC} onChange={handleChange} required />
    //                         </div>
    //                         <div className='inputWrap col-lg-6'>
    //                             <input className='form_input' type="text" placeholder="Current Location*" name="currentLocation" value={formData.currentLocation} onChange={handleChange} />
    //                         </div>
    //                         <div className='inputWrap col-lg-6'>
    //                             <input className='form_input' type="text" placeholder="Joining Time (in days)" name="joiningTime" value={formData.joiningTime} onChange={handleChange} required />
    //                         </div>
    //                         <div className='inputWrap col-lg-12'>
    //                             <label>Attach your CV *</label>
    //                             <input className='form_input' type="file" name="attachment" onChange={handleChange} />
    //                             <p className='text-12 mb-0 mt-1'><strong>Note : </strong>File type should be .doc, .docx or .pdf only. </p>
    //                             <p className='text-12'><strong className='opacity-0'>Note : </strong>Maximum file size should be 3MB.</p>
    //                         </div>
    //                         <div className='inputWrap mb-0 col-lg-12'>
    //                             <button className="dBtn btnSecondary rounded-0 hasShadow w-100 py-2" type="submit">Submit</button>
    //                         </div>

    //                     </div>
    //                 </form>

    //             </div>
    //         </section> */}

        </>
    );
};


export default JobForm;