"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BlogsList } from "../../../../../database/blog/database";
// import Custom Components
import CardWrapper from "../../../../../containers/blog/card/list-wrapper";
import CommonLayout from "../../../../../containers/common/common-layout";

const ListNoSidebar = ({}) => (
  <>
    <CommonLayout pathList={["blog", "blog list view", "no sidebar"]} pathTitle="BLOG WITH NO-SIDEBAR">
      <section className="agency blog blog-sec blog-list blog-no-sidebar">
        <Container>
          <Row>
            <Col xs="12">
              <div>{BlogsList.length > 0 ? BlogsList.map((item, index) => <CardWrapper key={`grid-no-sidebar-${index}`} className="col-12 blog-sec blog-list" image={item.image} blogDate={item.createdAt} place={item.place} title={item.title} description={item.description} readUrl={item.readUrl} />) : "!! No Blogs Found"}</div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  </>
);

export default ListNoSidebar;
