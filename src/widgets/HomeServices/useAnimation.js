import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);


const useAnimation = () => {
    const Animcontainer = useRef()

    useGSAP((context) => {

        const el = context.selector(`.wrap`);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: Animcontainer.current,
                pin: true,
                start: "top top",
                end: "bottom -500px",
                scrub: 3,
                stagger: 1,
                markers: true,
            },
        })

        function setCard() {

            el.forEach((elm, index) => {
                if (index > 0) {
                    gsap.set(elm, {
                        opacity: 1 - (index * 0.1),
                        yPercent: index * 110,
                        clipPath: "inset(20% 20% 0 20%)"
                        // scale: .8,
                        // duration:5,
                    })

                }
                console.log(index);
            });
        }
        setCard()



        el.forEach((elm, index) => {

            gsap.set(elm, { zIndex: index })
            if (index > 0) {
                tl.to(elm, {
                    opacity: 1,
                    force3D: true,
                    yPercent: index * 0,
                    // zIndex:index+1,
                    willChange: 'transform, opacity',
                    duration: 10,
                    clipPath: "inset(0%)"

                })
                tl.to(el[index - 1], {
                    opacity: 0,
                    willChange: 'opacity',
                    duration: 20,
                }, "<")
            }
        });


    }, { scope: Animcontainer });

    return { Animcontainer }
}

export default useAnimation;
