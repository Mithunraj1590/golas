import React from "react";
import Style from "./HomeRatingsAndAwards.module.scss";
import parse from "html-react-parser";
import Image from "next/image";

const HomeRatingsAndAwards = ({ data }) => {
  return (
    <section className={Style.homeabout}>
      <div className="container">
        <div className={Style.wraper}>
          <div className="text_underline">
            <h3 className={`h3 ${Style.subtitle}`}>{data?.subtitle}</h3>
          </div>
          <h2 className={`h2 ${Style.title}`}>{parse(data?.title)}</h2>
          <div className={Style.awards_list}>
            {data?.awards?.map((item, i) => {
              return (
                <div className={Style.award_card} key={i}>
                  <figure className={`${Style.award_image} ratio`}>
                    <Image src={item?.image?.url} fill alt={item?.image?.alt} />
                  </figure>
                  <div className={Style.award_content}>
                    <div className={Style.award_platform}>{item?.platform}</div>
                    <div className={Style.award_title}>{item?.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRatingsAndAwards;
