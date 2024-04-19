import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadingSection = () => {
  return (
    <>
            <div class="loading_section_text d-flex align-items-center justify-content-center">
            <Spinner animation="grow" variant="primary" />
                <p>Loading...</p>
            </div>
        </>
  )
}

export default LoadingSection