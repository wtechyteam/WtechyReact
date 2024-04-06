import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import serviceIcon1 from './../../../../assets/Images/services/SEO.webp'
import { FaCircleCheck } from "react-icons/fa6";

const BuyCard = () => {
    return (
        <div className='sectionPadding'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="card horizontal_card mb-3">
                            <div className="row g-0">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <div className='card_img_box d-flex justify-content-center align-items-center'>
                                        <div className='package_types'>Starter</div>
                                        <img src={serviceIcon1} className="img-fluid card_icon rounded-start" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title">Social Account Set up Any One
                                            <br />4 Business Posts
                                            <br />10 Generic Posts</h5>
                                        <p className="card-text">Rating = Entry Level. Targeting 1 Social Media Profile. Social media plan to keep your social profile updated.</p>
                                        <p className="card-text"><small className="text-muted d-flex flex-wrap justify-content-start">
                                            <p className='me-3'>Content Creation</p>
                                            <p className='me-3'>Appealing Graphics</p>
                                            <p className='me-3'>Cancel Anytime</p>
                                            <p className='me-3'>Weekly Reports</p>
                                            <p className='me-3'>Monthly Reports</p>
                                            <p className='me-3'>Call Support</p>
                                        </small></p>
                                        <button className='horizontal_card_btn'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                    <Col lg={3}>
                        <div className="card package_card mb-3">
                            <div className="row g-0">
                               
                                <div className="col-md-12">
                                    <div className="card-body">
                                        {/* <div className='package_card_img_position d-flex align-items-center justify-content-center'>
                                        <img className='package_card_img' src={serviceIcon1} alt='icon'/>
                                        </div> */}
                                        <div className='package_type_name'>Standard Plan</div>
                                        <h5 className="card-title">Social Account Set up Any One
                                            <br />4 Business Posts
                                            <br />10 Generic Posts</h5>
                                        <p className="card-text">Rating = Entry Level. Targeting 1 Social Media Profile. Social media plan to keep your social profile updated.</p>
                                        <p className="card-text"><small className="text-muted check_points">
                                            <p className='me-3'><FaCircleCheck className='check_icon' />Content Creation</p>
                                            <p className='me-3'> <FaCircleCheck className='check_icon' />Appealing Graphics</p>
                                            <p className='me-3'><FaCircleCheck className='check_icon' />Cancel Anytime</p>
                                            <p className='me-3'><FaCircleCheck className='check_icon' />Weekly Reports</p>
                                            <p className='me-3'><FaCircleCheck className='check_icon' />Monthly Reports</p>
                                            <p><FaCircleCheck className='check_icon' />Call Support</p>
                                        </small></p>
                                        <button className='buy_now_btn'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="card package_card mb-3">
                            <div className="row g-0">
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <div className='package_type_name'>Premium Plan</div>
                                        <h5 className="card-title">Social Account Set up Any One
                                            <br />4 Business Posts
                                            <br />10 Generic Posts</h5>
                                        <p className="card-text">Rating = Entry Level. Targeting 1 Social Media Profile. Social media plan to keep your social profile updated.</p>
                                        <p className="card-text"><small className="text-muted check_points">
                                            <p><FaCircleCheck className='check_icon' />Content Creation</p>
                                            <p> <FaCircleCheck className='check_icon' />Appealing Graphics</p>
                                            <p><FaCircleCheck className='check_icon' />Cancel Anytime</p>
                                            <p><FaCircleCheck className='check_icon' />Weekly Reports</p>
                                            <p><FaCircleCheck className='check_icon' />Monthly Reports</p>
                                            <p><FaCircleCheck className='check_icon' />Call Support</p>
                                        </small></p>
                                        <button className='buy_now_btn'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BuyCard