import React from 'react'
import { Link } from "react-router-dom";
import { FaClock, FaCoins } from 'react-icons/fa';
import {useScroll} from '../../useScroll';
import {scrollReveal} from '../../Animation.js'
import {motion} from 'framer-motion';


export default function Explore({attraction, destination}) {
  const [element, controls] = useScroll();

  return (
      <motion.div className="explore" variants={scrollReveal} animate={controls} ref={element} initial="hidden">
        <div className="explore__text">
        <h3 className="explore__text__header">Explore <span>Popular</span> Destinations and Attractions</h3>
        </div>
        <div className="explore__cards">
          <div className="explore__card explore__card-1">
            <img className="explore__card__img" src={destination.images[0]} alt="wonderland"/>
            <div className="explore__card__info-wrapper">

            <h5 className="explore__cards__header">Trip to {destination.destination}</h5>
            <p className="explore__card__info"><FaClock className="explore__card__icon"/> Duration: <span>{destination.howLong}days</span></p>
            <p className="explore__card__info"><FaCoins className="explore__card__icon"/> From:<span>${destination.price} </span></p>
            </div>
            <Link to={`/destinations/${destination.id}`}>
          <button className="explore__card__button">Book Now  <span>&rarr;</span></button>
          </Link>
          </div>
          <div className="explore__card explore__card-2">
          <img className="explore__card__img" src={attraction.images[0]} alt="humpty"/>
          <div className="explore__card__info-wrapper">

          <h5 className="explore__cards__header">{attraction.attraction}</h5>
         <p className="explore__card__info"><FaClock className="explore__card__icon"/> Duration: <span>{attraction.howLong}minutes</span></p>
          <p className="explore__card__info"><FaCoins className="explore__card__icon"/> From <span>${attraction.price}</span></p>
         
         </div>
         <Link to={`/attractions/${attraction.id}`}>
        <button className="explore__card__button">Book Now <span>&rarr;</span> </button>
    </Link>
          </div>
        </div>
      </motion.div>
  )
}
