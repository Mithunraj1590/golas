"use client";
import React from "react";
import Style from "./HomeService.module.scss";
import { Container } from "react-bootstrap";
import Link from "next/link";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const HomeService = ({ data }) => {
  const Animcontainer = useRef();

  useGSAP((context) => {

    const el = context.selector(`.wrap`);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: Animcontainer.current,
        pin: true,
        start: "top top",
        end: "bottom -2000px",
        scrub: 3,
        stagger: 1,
        // markers: true,
      },
    })

    function setCard() {

      el.forEach((elm, index) => {
        if (index > 0) {
          gsap.set(elm, {
            opacity: 1 - (index * 0.1),
            yPercent: index * 110,
            clipPath: "inset(20% 20% 0 20%)"
            // scale: .8,
            // duration:5,
          })

        }
        // console.log(index);
      });
    }
    setCard()



    el.forEach((elm, index) => {

      gsap.set(elm, { zIndex: index })
      if (index > 0) {
        tl.to(elm, {
          opacity: 1,
          force3D: true,
          yPercent: index * 0,
          // zIndex:index+1,
          willChange: 'transform, opacity',
          duration: 10,
          clipPath: "inset(0%)"

        })
        tl.to(el[index - 1], {
          opacity: 0,
          willChange: 'opacity',
          duration: 20,
        }, "<")
      }
    });


  }, { scope: Animcontainer });


  return (
    <section className={Style.homeservice} ref={Animcontainer}>
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
