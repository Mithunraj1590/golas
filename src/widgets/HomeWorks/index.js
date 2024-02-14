"use client"
import React from 'react'
import Style from "./HomeWork.module.scss"

import gsap from 'gsap';
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from '@/src/utils/ProjectCard';
gsap.registerPlugin(ScrollTrigger);

const HomeWorks = ({ data }) => {
    const cardWrp = useRef(null);
    useEffect(() => {

        const ctx = gsap.context((self) => {
            const el = cardWrp.current;
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 50%",
                    end:"bottom 20%",
                    ease: 'linear',
                    smooth: true,
                    normalizeScroll: true

                },
            })

           
            tl.to(`.${Style.cards}`, {   yPercent: -30, duration: 10,ease:"none" });
          

        },cardWrp)
        return () => ctx.revert();
    }, []);
      
     
    return (
        <section className={Style.home_works} ref={cardWrp}>
            
            <div className="container">
                <div className={Style.project_wrap}>
                    {data?.card?.map((data, i) => {
                        return (
                            <div className={Style.cards} key={i}>
                                <ProjectCard data={data} ></ProjectCard>
                            </div>
                        )
                    })}

                </div>
                <div className={Style.btn_wrap}>
                    <a href="" className="btn outline_btn">View all projects</a>
                </div>
            </div>
        </section>
    )
}

export default HomeWorks