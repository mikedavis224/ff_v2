import React from 'react'
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Banner = () => (
    <section className="gym header" id="home">
        <div className="header5-content">
            <Slider className="default-dots gym-slider" id="gym-slider" {...settings}>
                <div className="item">
                    <div className="gym-header bg">
                        <Container>
                            <Row>
                                <Col md="10"  className="offset-md-1">
                                    <div className="center-text">
                                        <div className="text-center">
                                            <div className="header-text">
                                                <h1><span className="bold-text">transform</span> your fitness journey</h1>
                                            </div>
                                            <div className="header-sub-text">
                                                <p className="text-white p-light">
                                                Welcome to Farray Fitness, Queens’ premier destination for personal fitness training. Whether you're looking to shed pounds, build muscle, or simply live a healthier life, we’re here to help you every step of the way. Our expert trainers, tailored programs, and supportive environment ensure you achieve your goals and stay motivated.
                                                </p>
                                            </div>
                                            <div className="link-horizontal">
                                                <ul className="justify-content-center">
                                                    {/* 
                                                    <li>
                                                        <a className=" btn btn-default"><span>Free Consultation</span></a>
                                                    </li>
                                                    */}
                                                    <li>
                                                        <a className=" btn btn-default" href="https://client.everfit.io/signup/i/CHK9743IZH" target="_blank">start now</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="item">
                    <div className="gym-header bg">
                        <Container>
                            <Row>
                                <Col md="10"  className="offset-md-1">
                                    <div className="center-text">
                                        <div className="text-center">
                                            <div className="header-text">
                                                <h1><span className="bold-text">your best self</span> starts here</h1>
                                            </div>
                                            <div className="header-sub-text">
                                                <p className="text-white p-light">
                                                Ready to take the first step? Book your free consultation and discover how Farray Fitness can transform your health and fitness journey.
                                                </p>
                                            </div>
                                            <div className="link-horizontal">
                                                <ul className="justify-content-center">
                                                    {/* 
                                                    <li>
                                                        
                                                        <a className=" btn btn-default"><span>register 20%<sup>off</sup></span></a>
                                                    </li>
                                                    */}
                                                    <li>
                                                        <a className=" btn btn-default">book now</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Slider>
        </div>
    </section>
)


export default Banner;