import React from 'react'
import { Link } from 'react-router-dom';




function ContactUsButton() {
  return (
    <Link to={'/contact'} className='dBtn btnSecondary hasShadow'>Contact Us Now</Link>
  )
}
export default ContactUsButton
