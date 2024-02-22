import React from "react";
import Style from "./HomeArticles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const HomeArticles = ({ data }) => {
  return (
    <section className={Style.homearticles}>
      <Container>
        <div className={Style.article_head}>
          <Row>
            <Col></Col>
            <Col lg="6">
              <p>{data?.title}</p></Col>
          </Row>
        </div>
        {data?.articles?.map((item, i) => {
          return (
            <div className={Style.article_card} key={i}>
              <Row>
                <Col lg="6">
                  <div className="position-relative">
                    <div className={Style.technology}>{item?.technology}</div>
                    <div className={Style.year}>{item?.year}</div>
                    <figure className={`${Style.article_image} ratio`}>
                      <Image
                        src={item?.image?.url}
                        fill
                        alt={item?.image?.alt}
                      />
                    </figure>
                  </div>
                </Col>
                <Col lg="6">
                  <h3 className={Style.article_title}>{item?.title}</h3>
                </Col>
              </Row>
            </div>
          );
        })}
           <div className={`${Style.btn_wrap}`}>
                    <a href="" className="btn outline_btn">View all projects</a>
                </div>
      </Container>
    </section>
  );
};

export default HomeArticles;
