import React from 'react'
import Style from "./HomeArticle.module.scss"

const index = () => {
  return (
    <section>
        <div className="container">
            <div className={Style.article_box}>
               <div className={Style.title}>

               </div>
               <div className={Style.description}>
               </div>
            </div>
        </div>
    </section>
  )
}

export default index