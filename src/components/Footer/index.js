import React from 'react'
import Style from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className="container">
        <div className={Style.footer_top}>

        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className={Style.address}>
              <address>
                asdasdfdfdfsad
              </address>
              <a href="">mmm@gmail.com</a>
              <a href="">1111111</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={Style.footer_menu}>
              <ul>
                <li>About</li>
                <li>projects</li>
                <li>Article</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={Style.about}>
              Our Story
            </div>
          </div>
        </div>
      </div>
      <div className={Style.bottom_footer}>
         <video src="" poster=''></video>
         <div className={Style.video_overlay}>

         </div>
      </div>
    </footer>
  )
}

export default Footer