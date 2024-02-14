import { ReactLenis } from '@studio-freight/react-lenis'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'



const SmoothScroller = ({children}) => {
  const lenisRef = useRef()
  
  useEffect(() => {
    console.log('lenisRef.current:', lenisRef.current);
  
    function update(time) {
      console.log('Updating with time:', time);
      lenisRef.current?.lenis.raf(time * 300);
    }
  
    gsap.ticker.add(update);
  
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);
   


  const options = { 
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  }
     
    
  return (
    <ReactLenis root ref={lenisRef}  autoRaf={false} option={options}>
     {children}
    </ReactLenis>
  )
}

export default SmoothScroller