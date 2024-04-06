import React from 'react'
import ContactUsButton from './ContactUsButton'


function FullWidthCTASection(props) {
  return (
    <section className='sectionPadding fullWidthCTA'>
      <div className="container text-center position-relative text-white">
        <div className="col-lg-8 mx-auto">
          <h2 className='title-xl fw-bold mb-3'>{props.title}</h2>
          <ContactUsButton/>
        </div>
      </div>
    </section>
  )
}
export default FullWidthCTASection
