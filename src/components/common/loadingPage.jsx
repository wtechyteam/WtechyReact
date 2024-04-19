import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadingPage = () => {
    return (
        <>
            <div className='loading_page '> </div>
            <div class="loading_text d-flex align-items-center justify-content-center">
            <Spinner animation="grow" />
                <p>Loading...</p>
            </div>
        </>
    )
}

export default LoadingPage