"use client"
import React from 'react'
import Style from "./HomeService.module.scss"
import parse from "html-react-parser";
import gsap from 'gsap';
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
                    <div className={`${Style.service_wrap} wrap`} key={i} >
                        <div className={Style.outer_wrap}>


                            <div className={Style.img_vdo_wrap}>
                                <figure>
                                    <img src={data?.image} alt="service" />
                                </figure>
                            </div>
                            <div className={Style.service_content}>
                                <div className="container">
                                    <h2 className={`h2 ${Style.title}`}>{data?.title}</h2>
                                    <div className={Style.service}>
                                        {parse(data?.service)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </section>
    )
}

export default HomeService