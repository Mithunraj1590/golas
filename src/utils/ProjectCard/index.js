"use client"
import React from 'react'
import Style from "./ProjectCard.module.scss"
import gsap from 'gsap';
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ data}) => {
    const cardRef = useRef(null);
    useEffect(() => {

        const ctx = gsap.context((self) => {
            const el = cardRef.current;
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end:"bottom top",
                    scrub: 1,
                   

                },
            })

           
         
          

        },cardRef)
        return () => ctx.revert();
    }, []);

    return (
        <a href="" className={Style.project_card} ref={cardRef}>

            <div className={`${Style.image_wrap}`}>
                <h3 className={Style.title}>{data?.title}</h3>
                <figure className='figure'>
                    <Image fill src={data?.img} alt="work" />
                </figure>
            </div>
            <div className={Style.card_footer}>
                <p>{data?.detail}</p>
            </div>
        </a>
    )
}

export default ProjectCard;