import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  const container = {
    hidden: { x: 100 },
    show: { x: 0 },
  };
  return (
    <motion.div className='home__header'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className='home__header-text'
      >
        <motion.h1
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: 'easeIn' }}
          className='home-page-header'
        >
          Fantasy Booking
        </motion.h1>
        <motion.h3
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.3, ease: 'easeIn' }}
          className='home-page-header__sub'
        >
          Your <span>only</span> way into dream-like destinations
        </motion.h3>
        <Link to='/destinations'>
          <motion.button
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.6, ease: 'easeIn' }}
            className='home-page-header__button'
          >
            Starts Here
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 1.3 }}
        transition={{ duration: 2 }}
        className='heading-svg'
      >
        {/* <img className="desktop-svg" src={SVG} alt="SVG"/> */}
      </motion.div>
    </motion.div>
  );
}
