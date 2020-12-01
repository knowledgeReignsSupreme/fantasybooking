import React, {useEffect, useState} from 'react'
import {destinationsData} from '../data'
import DestinationsRenderer from '../Components/Destinations/DestinationsRenderer';
import Filter from '../Components/Destinations/Filter';
import { FaSearchPlus  } from 'react-icons/fa';

export default function Destinations() {
  const [destinationFilterOn, setDestinationFilterOn] = useState(false);
  const [destinationNameFilter, setDestinationNameFilter] = useState('');
  const [destinationStoryFilter, setDestinationStoryFilter] = useState('');
  const [destinationMaxPrice, setDestinationMaxPrice] = useState(undefined);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div className="destinations__header__wrapper">
      <h1 className="destinations__header__wrapper__header">Our Destinations</h1>
      <h3 className="destinations__header__wrapper__header-sub">Here you'll find our <span>unique</span> and fantastic destinations</h3>
    </div>
    <button className="attractions__filter__button" onClick={() => setDestinationFilterOn(!destinationFilterOn)}><FaSearchPlus className="filter__icon"/>Filters</button>
    {destinationFilterOn ? 
    <Filter destinationNameFilter={destinationNameFilter} destinationStoryFilter={destinationStoryFilter} destinationMaxPrice={destinationMaxPrice} setDestinationMaxPrice={setDestinationMaxPrice} destinationNameFilter={destinationNameFilter} setDestinationNameFilter={setDestinationNameFilter} setDestinationStoryFilter={setDestinationStoryFilter}/>
    : '' }
    <DestinationsRenderer destinations={destinationsData} destinationMaxPrice={destinationMaxPrice} destinationNameFilter={destinationNameFilter} destinationStoryFilter={destinationStoryFilter}/>
  </>
      )  
    }
      
