import React, { Fragment } from 'react'
import {Container,Row,Col} from 'reactstrap'
const Footer = () => (
    <Fragment>
        <footer className="gym footer2">
            <Container>
                <Row>
                    <Col lg="3" md="3" sm="12"  className="set-first">
                        <div className="logo-sec">
                            <div className="footer-title mobile-title">
                                <h3 className="text-white">About Us</h3>
                            </div>
                            <div className="footer-contant">
                                <img alt="" className="img-fluid footer-logo" src="/assets/images/logo/ff-logo.png" />
                                <div className="footer-para">
                                    <h6 className="text-white para-address">Farray Fitness</h6>
                                    <h6 className="text-white para-address">350 Northern Blvd STE 324-1226 </h6>
                                    <h6 className="text-white para-address">Albany, NY 12204</h6>
                                    <h6><a href="tel:+19176181629" className="hover:underline">
              +1(917) 618-1629
            </a></h6>
                                </div>
                                <ul className="d-flex footer-social social">
                                    <li className="footer-social-list">
                                        <a href="https://www.facebook.com/people/Daniel-Farray/100075061168002/">
                                            <i aria-hidden="true" className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="https://www.instagram.com/flash_fitness1433/">
                                            <i aria-hidden="true" className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="https://www.youtube.com/@flashfitness14/">
                                            <i aria-hidden="true" className="fa fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    {/* 
                    <Col lg="2" md="3" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">services</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">services</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="#">Portfolio Website</a>
                                    </li>
                                    <li>
                                        <a href="#">Set up an account</a>
                                    </li>
                                    <li>
                                        <a href="#">Invoice Creation</a>
                                    </li>
                                    <li>
                                        <a href="#">Get Our Specials</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="2" md="3" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">brand</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">brand</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="#">Chat24</a>
                                    </li>
                                    <li>
                                        <a href="#">Zoom</a>
                                    </li>
                                    <li>
                                        <a href="#">Alpha Payment</a>
                                    </li>
                                    <li>
                                        <a href="#">Upwork</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="2" md="3" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Support</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">Support</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="#">For Freelancers</a>
                                    </li>
                                    <li>
                                        <a href="#">For Companies</a>
                                    </li>
                                    <li>
                                        <a href="#">For Business</a>
                                    </li>
                                    <li>
                                        <a href="#">General Help</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3" md="12" sm="12" className="set-last">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Post Tags</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">Post Tags</h5>
                            <div className="link-btns">
                                <ul>
                                    <li className="buttons">
                                        <a href="#">app</a>
                                    </li>
                                    <li className="buttons">
                                        <a href="#">business</a>
                                    </li>
                                    <li className="buttons">
                                        <a href="#">corporation</a>
                                    </li>
                                    <li className="buttons">
                                        <a href="#">creative</a>
                                    </li>
                                    <li className="buttons">
                                        <a href="#">design</a>
                                    </li>
                                    <li className="buttons">
                                        <a href="#">fashion</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    */}
                </Row>
            </Container>
        </footer>
        <div className="gym copyright">
            <Container>
                <Row>
                    <Col sm="6">
                        <div className="link-horizontal">
                            <ul>
                                <li>
                                    <a className="copyright-text op-text" href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a className="copyright-text op-text" href="#">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="6">
                        <div>
                            <h6 className="copyright-text text-white text-end op-text">Copyright © 2025 Farray Fitness By <i
                                    aria-hidden="true" className="fa fa-heart"></i> NugoTech</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Fragment>
)


export default Footer;