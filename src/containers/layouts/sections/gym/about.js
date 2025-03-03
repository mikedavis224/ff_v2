import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const About = () => (
    <section className="gym format" id="about">
        <Container>
            <Row>
                <Col md="6">
                    <div className="text-center center-content">
                        <div className="about-img">
                            <div className="borders-around">
                                <div>
                                    <div className="bg-black"></div>
                                </div>
                                <img alt="" className="img-fluid format-img" src="/assets/images/gym/l5.png" />
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
                                <h3 className="about-font-header gradient-text">who we are </h3>
                            </div>
                            <div className="format-sub-text">
                                <p className="p-light about-para">
                                Farray Fitness is more than just a gym—we’re your partners in health, fitness, and personal growth. Based in Queens, NY, we specialize in creating tailored training experiences that empower clients to look and feel their best.
                                </p>
                                {/*}
                                <<p className="p-light about-para">
                                    When an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. Lorem
                                    Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry.
                                </p> 
                                */}
                            </div>
                            <a className="btn btn-default primary-btn" href="#">read more</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default About;