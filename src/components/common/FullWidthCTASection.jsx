import React from 'react'
import ContactUsButton from './ContactUsButton'


function FullWidthCTASection(props) {
  return (
    <section className='sectionPadding fullWidthCTA'>
      <div className="container text-center position-relative text-white">
          <h2 className='title-xl fw-bold mb-4'>{props.title}</h2>
          <ContactUsButton/>
      </div>
    </section>
  )
}
export default FullWidthCTASection
