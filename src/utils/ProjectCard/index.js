import React from 'react'
import { useGSAP } from '@gsap/react';
import Style from "./ProjectCard.module.scss"
import gsap from 'gsap';
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ data, ParallaxContainer }) => {
    const cardRef = useRef(null);


    useGSAP((context) => {
        let resize;
        window.addEventListener('resize', function () {
            resize = window.innerWidth;
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ParallaxContainer.current,
                start: resize > 992 ? "top 80%" : "top 90%",
                end: "bottom 50%",
                scrub: 1,
                // markers: true,
            },
        })
        let img = context.selector(`img`)
        console.log(img);

        tl.fromTo(img, {
            yPercent: "-15",
            duration: 1,
            autoAlpha: 0
        }, {
            yPercent: "10",
            autoAlpha: 1

        })
    }, { scope: cardRef });


    return (
        <a href="" className={Style.project_card} ref={cardRef}>

            <div className={`${Style.image_wrap}`}>
                <h3 className={Style.title}>{data?.title}</h3>
                <figure className='figure'>
                    <img src={data?.img} alt="work" />
                </figure>
            </div>
            <div className={Style.card_footer}>
                <p>{data?.detail}</p>
            </div>
        </a>
    )
}

export default ProjectCard;