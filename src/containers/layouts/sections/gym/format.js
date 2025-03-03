import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Format = () => (
    <section className="gym format">
        <Container>
            <Row>
                <Col md="6">
                    <div className="text-center center-content">
                        <div className="about-img">
                            <div className="borders-around">
                                <div>
                                    <div className="bg-black"></div>
                                </div>
                                <img alt="" className="img-fluid format-img" src="/assets/images/gym/about.png" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="6">
                    <div className="center-text">
                        <div>
                            <div className="format-small-text">
                                <h6 className="font-primary borders-before"><span>about us</span></h6>
                            </div>
                            <div className="format-head-text">
                                <h3 className="about-font-header gradient-text">Online Coaching</h3>
                            </div>
                            <div className="format-sub-text">
                                <div className="sub-heading">
                                    <h4>Customized Fitness Plans</h4>
                                </div>
                                <p className="p-light about-para">
                                Get a fully personalized program you can follow from anywhere, complete with videos and step-by-step instructions.
                                </p>
                                <div className="sub-heading">
                                    <h4>Virtual Check-Ins</h4>
                                </div>
                                <p className="p-light about-para">
                                Stay connected with your trainer through regular video calls and progress updates.
                                </p>
                            </div>
                                <div className="sub-heading">
                                    <h4>Meal Plan</h4>
                                </div>
                                <p className="p-light about-para">
                                Combine your workouts with a nutrition plan designed to complement your goals and lifestyle.
                                </p>
                     
                            <a className="btn btn-default primary-btn" href="https://client.everfit.io/signup/i/CHK9743IZH" target="_blank">BOOK WORKOUT</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Format;