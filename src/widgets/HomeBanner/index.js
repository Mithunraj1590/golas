import React from 'react'
import Style from "./Homebanner.module.scss"

const HomeBanner = () => {
  return (
    <div className={Style.homebanner}>
        <div className={Style.video_banner}>

        </div>
        <div className={Style.banner_content}>
           <div className="container">
            <div className={Style.banner_text}>
                <h1 className={`${Style.title} h1`}>
                  Building
                  Digital
                  Experience
                </h1>
            </div>
           </div>
        </div>
    </div>
  )
}

export default HomeBanner