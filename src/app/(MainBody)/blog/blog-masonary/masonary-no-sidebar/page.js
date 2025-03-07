"use client";
import React from "react";
import Masonry from "react-masonry-css";
import { Col, Container, Row } from "reactstrap";
import CardWrapper from "../../../../../containers/blog/card/grid-wrapper";
import CommonLayout from "../../../../../containers/common/common-layout";
import { MesonryData } from "../../../../../database/blog/database";

const MasonaryNoSidebar = () => {
  const breakpointColumnsObj = {
    default: 2,
    767: 1,
  };
  return (
    <CommonLayout pathList={["blog", "blog Masonry", "no sidebar"]} pathTitle="BLOG WITH no-sidebar">
      <section className="agency blog blog-sec blog-sidebar blog-no-sidebar">
        <Container>
          <Row>
            <Col lg="12">
              <div>
                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid masonry-with-dec row" columnClassName="col-md-6 col-12">
                  {MesonryData.length > 0 ? MesonryData.map((item, index) => <CardWrapper key={`grid-no-sidebar-${index}`} className="" image={item.image} blogDate={item.createdAt} place={item.place} title={item.title} description={item.description} readUrl={item.readUrl} />) : "!! No Blogs Found"}
                </Masonry>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default MasonaryNoSidebar;
