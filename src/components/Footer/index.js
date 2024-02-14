import React from 'react'
import Style from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className="container">
        <div className={Style.footer_top}>

        </div>
        <div className={Style.footer_bottom}>
          <div className={Style.footer_wrap}>
            <div className={Style.address}>
               <address>
               Unit 212, Second Floor, Nile Business Centre, 56-60 Nelson St, London E1 2DE
               </address>
               <a href="">9999999999</a>
               <a href="">9999999999</a>
            </div>
            <div className={Style.address}>
                <ul>
                  <li>Service</li>
                  <li>Projects</li>
                  <li>Contact</li>
                </ul>
            </div>
            <div className={Style.address}>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer