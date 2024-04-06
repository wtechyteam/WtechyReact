import React from 'react'
import { Link } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";



function ContactUsButton() {
  return (
    <Link to={'/contact'} className='mt-2 dBtn btnSecondary hasShadow'><FiPhoneCall/><span className='ms-2'>Contact Us Now</span></Link>
  )
}
export default ContactUsButton
