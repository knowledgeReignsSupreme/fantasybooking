import React, {useEffect, useState} from 'react'
import {attractionsData} from '../data'
import AttractionsRenderer from '../Components/Attractions/AttractionsRenderer';
import Filter from '../Components/Attractions/Filter';
import { FaSearchPlus  } from 'react-icons/fa';

export default function Destinations() {
  const [attractionFilterOn, setAttractionFilterOn] = useState(false);
  const [attractionNameFilter, setAttractionNameFilter] = useState('');
  const [attractionStoryFilter, setAttractionStoryFilter] = useState('');
  const [attractionMaxPrice, setAttractionMaxPrice] = useState(9);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <div className="attractions__header__wrapper">
      <h1 className="attractions__header__wrapper__header">Our Attractions</h1>
      <h3 className="attractions__header__wrapper__header-sub">Here you'll find our <span>unique</span> and fantastic attractions</h3>
    </div>
    <button className="attractions__filter__button" onClick={() => setAttractionFilterOn(!attractionFilterOn)}><FaSearchPlus className="filter__icon"/>Filters</button>
    {attractionFilterOn ? 
    <Filter attractionFilterOn={attractionFilterOn} setAttractionMaxPrice={setAttractionMaxPrice} setAttractionNameFilter={setAttractionNameFilter} setAttractionStoryFilter={setAttractionStoryFilter} attractionStoryFilter={attractionStoryFilter} attractionNameFilter={attractionNameFilter}/>
    : '' }
    <AttractionsRenderer  attractions={attractionsData} attractionNameFilter={attractionNameFilter}  attractionStoryFilter={attractionStoryFilter} attractionMaxPrice={attractionMaxPrice}/>
  </>
      )  
    }
      
