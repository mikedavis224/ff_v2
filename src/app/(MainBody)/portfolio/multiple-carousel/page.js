"use client";
import { Fragment, useEffect } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import Header from "../../../../containers/common/header";
import { CenteredSlideData } from "../../../../database/portfolio/database";
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
  ],
};

const MultipleCarousel = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000");
    document.body.style.setProperty("--secondary", "#000");
    document.body.style.setProperty("--light", "#252525");
    document.body.style.setProperty("--dark", "#000");
  });
  return (
    <Fragment>
      <Header className="dark bg-white ecommerce" />
      <section className="portfolio multiple-carousel pb-0">
        <Container fluid={true} className="p-0">
          <Row>
            <Col xs="12">
              <Slider className="owl-carousel owl-theme gallery-slider" id="gallery-slider" {...settings}>
                {CenteredSlideData.map((data, i) => {
                  return (
                    <div className="item" key={i}>
                      <div className={`imgs-carousel ${data.img}`}></div>
                      <div className="abs-center w-100 text-container">
                        <h5 className="text-white overlay-text text-center">
                          {data.title}
                          <span className="m-l-5">{data.date}</span>
                        </h5>
                        <p className="right-side text-center">{data.desc} </p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default MultipleCarousel;
