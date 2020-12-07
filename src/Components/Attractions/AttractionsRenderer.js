import React from 'react'
import { Link } from 'react-router-dom'
import {FaDungeon, FaClock, FaCoins, FaBook, FaStar, FaSuitcase, FaBan  } from 'react-icons/fa';

export default function DestinationsRendere({attractions, destinations, attractionNameFilter, attractionStoryFilter, attractionMaxPrice}) {
 console.log(attractionNameFilter)
  const attractionConditionalRendering = (attractions) => {
    if (attractions.length === 0 ){
      return <h1 className="wrong__filter">Nothing was found. Please check your filters</h1>
    }
    return (
      attractions.map(attraction => (
        <div key={attraction.id} className="attraction">
        <div className="attractions__img__wrapper">
        <img className="attraction__img" src={attraction.images[1]} alt={attraction.attraction.toString()}/>
        <p className="attraction__text__rating"><FaStar className="attraction__icon"/>Rating: {attraction.rating}/5.0</p>
        <Link to={`/attractions/${attraction.id}`.toString()}>
        {attraction.available ? 
        <button className="attraction__button"><FaSuitcase className="attraction__icon"/>Book Now &rarr;</button>
        : <button className="attraction__button__disabled" disabled={attraction.available}><FaBan className="attraction__icon"/>N/A <span>due to pandemic</span></button> }
        </Link>
        </div>
        <div className="attraction__text">
        <h1 className="attraction__text__header">{attraction.attraction}</h1>
        <p className="attraction__text__duration"><FaDungeon className="attraction__icon"/>Location: {attraction.location}</p>
        <p className="attraction__text__duration"><FaClock className="attraction__icon"/>Duration: {attraction.howLong}minutes</p>
        <p className="attraction__text__price"><FaCoins className="attraction__icon"/>From: ${attraction.price}</p>
        <p className="attraction__text__known"><FaBook className="attraction__icon"/>Knowm from: "{attraction.knownFrom}"</p>
        </div>
        </div>
      ))
    )
  }
  return (
     <div className="attractions__wrapper">
        {
          attractionNameFilter.length === 0 && attractionStoryFilter.length === 0 ? 
          attractionConditionalRendering(attractions)
          :
          attractionNameFilter.length > 0 && attractionStoryFilter.length === 0 ?
          attractionConditionalRendering(attractions.filter(attraction => attraction.attraction.toLowerCase().includes(attractionNameFilter.toLowerCase())))
          :
          attractionNameFilter.length <= 0 && attractionStoryFilter.length > 0 ?
          attractionConditionalRendering(attractions.filter(attraction => attraction.knownFrom.toLowerCase().includes(attractionStoryFilter.toLowerCase())))
          :
          attractionNameFilter.length > 0 && attractionStoryFilter.length > 0 ?
          attractionConditionalRendering(attractions.filter(attraction => attraction.knownFrom.toLowerCase().includes(attractionStoryFilter.toLowerCase()) && 
          attraction.attraction.toLowerCase().includes(attractionNameFilter.toLowerCase())
          ))
          :
          <h1 className="home-page-header"></h1>
        }
    </div>
  )
}
