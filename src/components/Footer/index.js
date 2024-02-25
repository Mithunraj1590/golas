import React from 'react'
import Style from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className="container">
        
        <div className="row">
          <div className="col-lg-6">
            <div className={Style.address}>
              <address>
              3rd floor hilite business park, Calicut, Kerala 
              </address>
              <a href="mailto:wearegoalcreative@gmail.com">wearegoalcreative@gmail.com</a>
              <a href="tel:+91 99956 40861">+91 99956 40861</a>
            </div>
          </div>
          <div className="col-lg-6 relative">
            <div className={Style.footer_menu}>
              <ul>
                <li>About</li>
                <li>projects</li>
                <li>Article</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={Style.about}>
              Our Story
            </div>
          </div>
         
        </div>
        <div className={Style.bottom_line}>
           <div className={Style.icons}>
                  sss
           </div>
           <div className={Style.copy_right}>
              <p>copyright</p>
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