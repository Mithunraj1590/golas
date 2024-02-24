"use client"
import React, { useState } from 'react'
import Style from "./InnerBanner.module.scss"
import Image from 'next/image'
import parse from "html-react-parser";

const productbanner = "/images/productbanner.png"

const InnerBanner = ({data}) => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollLimit = 100; // Set your desired scroll limit in pixels

  const handleScroll = () => {
    const currentPosition = window.scrollY;

    if (currentPosition <= scrollLimit) {
      setScrollPosition(currentPosition);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={Style.innerBanner}>


      <div className={Style.bg_image} style={{ '--image-path': `url('${data?.bg_image}')` , transform: `translate3d(0, ${scrollPosition / 15}vh, 0)`}}>
      </div>

        <div className="container">

            <div className={Style.text_wrap}>
                <h1 className={Style.title}>

                  {parse(data?.title)}
                  
                </h1>
            </div>

        </div>
    </section>
  )
}

export default InnerBanner