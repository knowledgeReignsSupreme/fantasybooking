import React from 'react'
import img1 from '../../design/land2.jpg';
import img2 from '../../design/land3.jpg';
import img3 from '../../design/unicorn.jpg';
import img4 from '../../design/fairy.jpg';
import {useScroll} from '../../useScroll';
import {scrollReveal} from '../../Animation.js'
import {motion} from 'framer-motion';

export default function Discover() {
  const [element, controls] = useScroll();
  return (
      <motion.div variants={scrollReveal} animate={controls} initial="hidden" ref={element} className="discover">
        <div className="discover__text">
          <h3 className="discover__text__header">Discover <span>New</span> Worlds</h3>
          <h5 className="discover__text__header__sub">We are the only company in the world that can get you there</h5>
        </div>
        <div className="discover__grid">
        <img className="disocver__grid__img disocver__grid__img1" src={img1} alt="destination1"/>
        <img className="disocver__grid__img disocver__grid__img2" src={img2} alt="destination2"/>
        <img className="disocver__grid__img disocver__grid__img4" src={img4} alt="unicorn"/>
        <img className="disocver__grid__img disocver__grid__img3" src={img3} alt=""/>
        </div>
      </motion.div>
  )
}
