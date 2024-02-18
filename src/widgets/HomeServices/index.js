"use client"
import React from 'react'
import Style from "./HomeService.module.scss"
import parse from "html-react-parser";
import useAnimation from './useAnimation';

const HomeService = ({ data }) => {
    const { Animcontainer } = useAnimation()
    return (
        <section className={Style.homeservice} ref={Animcontainer}>
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