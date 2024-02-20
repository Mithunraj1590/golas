"use client";
import React from "react";
import Style from "./HomeService.module.scss";
import parse from "html-react-parser";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const HomeService = ({ data }) => {
  const serviceWrp = useRef();
  // const page = gsap.utils.toArray("." + Style.service_wrap);

  // useEffect(() => {

  //     const ctx = gsap.context((self) => {
  //         const el = self.selector(`.wrap`);
  //         const tl = gsap.timeline({
  //             scrollTrigger: {
  //                 trigger: serviceWrp.current,

  //                 pin: true,
  //                 start: "top top",
  //                 end: "bottom -100%",
  //                 scrub: true,
  //                 ease: "none",
  //                 stagger: 1,

  //             },
  // })

  // function setCard() {

  //     el.forEach((elm, index) => {
  //         if (index > 0) {
  //             gsap.set(elm, {
  //                 opacity: 1 - (index * 0.1),
  //                 yPercent: index * 110,
  //                 willChange: 'transform, opacity',
  //                 scale: .8,
  //                 duration: 10,

  //             })

  //         }
  //         console.log(index);
  //     });
  // }
  // setCard()

  // el.forEach((elm, index) => {

  //     gsap.set(elm, { zIndex: index })
  //     if (index > 0) {
  //         tl.to(elm, {
  //             opacity: 1,
  //             force3D: true,
  //             yPercent: index * 0,
  //             // zIndex:index+1,
  //             willChange: 'transform, opacity',
  //             duration: 10,
  //             scale: 1
  //         })
  //         tl.to(el[index - 1], {
  //             opacity: 0,

  //             willChange: 'opacity',
  //             duration: 20,
  //         }, "<")
  //     }
  // });

  //     }, serviceWrp)
  //     return () => ctx.revert();
  // }, []);

  return (
    <section className={Style.homeservice} ref={serviceWrp}>
      {data?.services?.map((data, i) => {
        return (
          <div className={`${Style.service_wrap} wrap`} key={i}>
            <div className={Style.img_vdo_wrap}>
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={data?.video?.poster}
                src={data?.video?.url}
              />
            </div>
            <div className={Style.service_content}>
              <Container>
                <h2 className={`h2 ${Style.title}`}>{data?.title}</h2>
                <ul className={Style.service_list}>
                  {data?.service_list?.map((item, itemIndex) => {
                    return (
                      <li
                        className={`${Style.service} position-relative`}
                        key={itemIndex}
                      >
                        {item?.url?.length > 0 ? (
                          <Link
                            href={item?.url}
                            className={Style.service_item_url}
                          />
                        ) : null}
                        {item?.name}
                        {item?.url?.length > 0 ? (
                          <span className={`${Style.link_icon} ms-1`}>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.15472 2.81673L13.8293 2.82734L13.8399 8.5019L12.758 8.5019L12.8004 4.66229L3.10242 14.3603L2.29631 13.5542L11.9943 3.85618L8.15472 3.89861L8.15472 2.81673Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </Container>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HomeService;
