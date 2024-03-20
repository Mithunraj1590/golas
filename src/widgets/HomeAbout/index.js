import React from 'react'
import Style from "./HomeAbout.module.scss"
import parse from "html-react-parser";

const HomeAbout = ({ data }) => {
  // const { parse } = require("html-react-parser");

  return (
    <section className={Style.homeabout}>
      <div className="container">
        <div className={Style.wraper}>
          <div className="text_underline">
            <h3 className={`h3 ${Style.subtitle}`}>{data?.subtitle}</h3>
          </div>
          <h2 className={`h2 ${Style.title}`}>{data?.title}</h2>
          <div className={Style.paragraph}>
            <div className={Style.subtitle}>{parse(`${data?.description}`)}</div>
            {data?.link ? (
              <div className={`${Style.btn_wrap}`}>
                <a href={data?.link?.url} className="btn outline_btn">
                  <div className="font">{data?.link?.text}</div>
                </a>
              </div>
            ) : (
              <></>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout