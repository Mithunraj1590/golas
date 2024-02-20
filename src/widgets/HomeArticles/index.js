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
            <Col>{data?.title}</Col>
          </Row>
        </div>
        {data?.articles?.map((item, i) => {
          return (
            <div className={Style.article_card} key={i}>
              <Row>
                <Col>
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
                <Col>
                  <h3 className={Style.article_title}>{item?.title}</h3>
                </Col>
              </Row>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default HomeArticles;
