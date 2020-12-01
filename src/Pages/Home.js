import React, {useEffect} from 'react'
import Header from '../Components/Home/Header';
import Discover from '../Components/Home/Discover';
import Explore from '../Components/Home/Explore';
import BlogPreview from '../Components/Home/BlogPreview';
import ContactUs from '../Components/Home/ContactUs';
import {useScroll} from '../useScroll';
import {expandOnScroll} from '../Animation.js'
import {motion} from 'framer-motion';

export default function Home({attractions, destinations, posts}) {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Header />
      <motion.div className="line" variants={expandOnScroll} initial="hidden" ref={element1} animate={controls1} ></motion.div>
      <Discover />
      <motion.div className="line" variants={expandOnScroll} initial="hidden" ref={element2} animate={controls2} ></motion.div>
      <Explore attraction={attractions[2]} destination={destinations[6]} />
      <motion.div className="line" variants={expandOnScroll} initial="hidden" ref={element3} animate={controls3} ></motion.div>
      <BlogPreview posts={posts} />
      <motion.div className="line" variants={expandOnScroll} initial="hidden" ref={element4} animate={controls4} ></motion.div>
      <ContactUs />
    </div>
  )
}
