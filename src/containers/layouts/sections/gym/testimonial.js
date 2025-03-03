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

const Testimonial = () => (
    <section className="gym testimonial">
        <Container>
            <Row>
                <Col xs="12">
                    <div className="title">
                        <div className="text-center">
                            <div>
                                <h6 className=" borders-before text-white"><span>OUR PROGRESS</span></h6>
                            </div>
                            <div className="main-title">
                                <h2 className="text-white">what people say</h2>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg="8" className="offset-lg-2">
                    <Slider className="owl-carousel owl-theme testimonial-slider" id="testimonial-slider" {...settings}>
                        <div className="item">
                            <div>
                                <img alt="" className="img-fluid m-auto" src="/assets/images/gym/testimonial/quote.png" />
                                <div className="text-center testimonial-info">
                                    <p className="p-light testimonial-para">
                                    I’ve tried every workout plan under the sun, but nothing has ever worked as well as training with Farray Fitness. The one-on-one coaching has helped me build strength, stay motivated, and actually enjoy working out for the first time in my life. I feel stronger, healthier, and more confident than ever!"
                                    
                                    </p>
                                    <div className="testimonial-name">
                                        <h5 className="text-white name">— Jessica M.</h5>
                                    </div>
                                    <div className="testimonial-post">
                                        <h6 className="text-white post"> Queens, NY</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                                <img alt="" className="img-fluid m-auto" src="/assets/images/gym/testimonial/quote.png" />
                                <div className="text-center testimonial-info">
                                    <p className="p-light testimonial-para">
                                    I started with online coaching because of my busy schedule, and I was blown away by the level of support I received. My workouts were easy to follow, my trainer was always available for check-ins, and I started seeing results within weeks. Whether in-person or online, Farray Fitness is the real deal!"
                                    </p>
                                    <div className="testimonial-name">
                                        <h5 className="text-white name">David R</h5>
                                    </div>
                                    <div className="testimonial-post">
                                        <h6 className="text-white post">CBrooklyn, NY</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Testimonial;