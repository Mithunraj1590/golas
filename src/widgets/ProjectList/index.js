import React from 'react'
import Style from "./ProjectList.module.scss"
import ProjectCard from '@/src/utils/ProjectCard'

const ProjectList = ({ data }) => {
  return (
    <section className={Style.project_list}>
      <div className="container">
        <div className={Style.section_title}>
          <h2 className={Style.title}>{data?.title}</h2>
          <p>{data?.description}</p>
        </div>
        <div className={Style.section_content}>
          <div className={Style.filter}>

          </div>
          <div className={Style.project_wrap}>
            {data?.card?.map((data, i) => {
              return (
                <div className={Style.cards} key={i}>
                  <ProjectCard data={data} ></ProjectCard>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectList