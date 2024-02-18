import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);


const useAnimation = () => {
    const Animcontainer = useRef()
    // useGSAP((context) => {

    //     // const el = self.selector(`.wrap`);
    //     // const tl = gsap.timeline({
    //     //     scrollTrigger: {
    //     //         trigger: serviceWrp.current,

    //     //         pin: true,
    //     //         start: "top top",
    //     //         end: "bottom -100%",
    //     //         scrub: true,
    //     //         ease: "none",
    //     //         stagger: 1,


    //     //     },
    //     // })

    //     // function setCard() {


    //     //     el.forEach((elm, index) => {
    //     //         if (index > 0) {
    //     //             gsap.set(elm, {
    //     //                 opacity: 1 - (index * 0.1),
    //     //                 yPercent: index * 110,
    //     //                 willChange: 'transform, opacity',
    //     //                 scale: .8,
    //     //                 duration: 10,

    //     //             })

    //     //         }
    //     //         console.log(index);
    //     //     });
    //     // }
    //     // setCard()



    //     // el.forEach((elm, index) => {

    //     //     gsap.set(elm, { zIndex: index })
    //     //     if (index > 0) {
    //     //         tl.to(elm, {
    //     //             opacity: 1,
    //     //             force3D: true,
    //     //             yPercent: index * 0,
    //     //             // zIndex:index+1,
    //     //             willChange: 'transform, opacity',
    //     //             duration: 10,
    //     //             scale: 1
    //     //         })
    //     //         tl.to(el[index - 1], {
    //     //             opacity: 0,

    //     //             willChange: 'opacity',
    //     //             duration: 20,
    //     //         }, "<")
    //     //     }
    //     // });


    // }, []);

    return { Animcontainer }
}

export default useAnimation;
