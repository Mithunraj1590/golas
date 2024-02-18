"use client"
import React, { useRef } from 'react'
import Style from "./HomeWork.module.scss"
import ProjectCard from '@/src/utils/ProjectCard';


const HomeWorks = ({ data }) => {
    const ParallaxContainer = useRef()

    return (
        <section className={`${Style.home_works} ${data?.page && Style.innerpage}`} ref={ParallaxContainer}>

            <div className="container">
                <div className={Style.project_wrap}>
                    {data?.card?.map((data, i) => {
                        return (
                            <div className={Style.cards} key={i}>
                                <ProjectCard ParallaxContainer={ParallaxContainer} data={data} ></ProjectCard>
                            </div>
                        )
                    })}

                </div>
                <div className={`${Style.btn_wrap} ${data?.page && "d-none"}`}>
                    <a href="" className="btn outline_btn">View all projects</a>
                </div>
            </div>
        </section>
    )
}

export default HomeWorks