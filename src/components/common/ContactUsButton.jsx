import React from 'react'
import { Link } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";



function ContactUsButton() {
  return (
    <Link to={'/contact'} className='dBtn btnSecondary hasShadow'><FiPhoneCall/>Contact Us Now</Link>
  )
}
export default ContactUsButton
