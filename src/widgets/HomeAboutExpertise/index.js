import React from "react";
import Style from "./HomeAboutExpertise.module.scss";
import parse from "html-react-parser";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

const HomeAboutExpertise = ({ data }) => {
  return (
    <section className={Style.homeabout}>
      <div className="container">
        <div className={Style.wraper}>
          <div className="text_underline">
            <h3 className={`h3 ${Style.subtitle}`}>{data?.subtitle}</h3>
          </div>
          <h2 className={`h2 ${Style.title}`}>{parse(data?.title)}</h2>
          <Row>
            <Col lg={5}>
              <figure className={`${Style.about_image} ratio`}>
                <Image
                  src={data?.image?.url}
                  fill
                  sizes="(min-width: 992px) 30vw, 100vw"
                  quality={90}
                  alt={data?.image?.alt}
                />
              </figure>
              <div className={Style.info}>{data?.caption}</div>
            </Col>
            <Col lg={7}>
              <div className={Style.paragraph}>
                <div className={Style.subtitle}>
                  {parse(`${data?.description}`)}
                </div>
                <div className={Style.info}>{parse(`${data?.info}`)}</div>
                {data?.link ? (
                  <a href={data?.link?.url} className="btn outline_btn">
                    <div className="font">{data?.link?.text}</div>
                  </a>
                ) : null}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutExpertise;
