import React, { useEffect, useState } from 'react';
import { destinationsData, attractionsData } from '../../data';
import { Link } from 'react-router-dom';
import CustomCarousel from '../../Components/CustomCarousel';
import {
  FaClock,
  FaCoins,
  FaReceipt,
  FaBook,
  FaStar,
  FaSuitcaseRolling,
  FaBan,
} from 'react-icons/fa';

export default function SingleAttraction({ match }) {
  const [imageValue, setImageValue] = useState(0);

  let currentDestination = destinationsData[match.params.id];
  let currentAttraction = attractionsData[match.params.id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageSwipe = (value) => setImageValue(value);

  return (
    <>
      <div className='singledestination__wrapper'>
        <CustomCarousel imagesToRender={currentAttraction} />
        <div className='singledestination__wrapper__text'>
          <h1 className='singledestination__wrapper__text__header'>
            {currentAttraction.attraction}
          </h1>
          <div className='singledestination__info__wrapper'>
            <div className='singledestination__info__wrapper-1'>
              <h5 className='singledestination__wrapper__text__duration'>
                <FaClock className='single__icon' />
                Duration: {currentAttraction.howLong}minutes
              </h5>
              <p className='singledestination__wrapper__text__price'>
                <FaCoins className='single__icon' />
                From: ${currentAttraction.price}
              </p>
              <p className='singledestination__wrapper__text__story'>
                <FaBook className='single__icon' />
                Known From: "{currentAttraction.knownFrom}"
              </p>
            </div>

            <div className='singledestination__info__wrapper-2'>
              <p className='singledestination__wrapper__text__rating'>
                <FaStar className='single__icon' />
                Rating: {currentAttraction.rating}/5.0
              </p>
              <p className='singledestination__wrapper__text__available'>
                <FaReceipt className='single__icon' /> Availability:{' '}
                {currentAttraction.available ? 'Available!' : 'N/A'}
              </p>
              {currentAttraction.available ? (
                <button className='singledestination__wrapper__text__button'>
                  <FaSuitcaseRolling className='single__icon' />
                  Book &rarr;
                </button>
              ) : (
                <button
                  className='singledestination__wrapper__text__button__disabled'
                  disabled={currentAttraction.available}
                >
                  <FaBan className='single__icon' />
                  N/A <span>due to pandemic</span>
                </button>
              )}
            </div>
          </div>
          <div className='line'></div>
          <h3 className='related__attraction__title'>Related Destination:</h3>
        </div>
      </div>
      <Link to={`/destinations/${currentDestination.id}`}>
        <div className='related__attraction'>
          <img
            src={currentDestination.images[0]}
            className='related__attraction__img'
            alt={currentDestination.destination}
          />

          <div className='related__attraction__info'>
            <p className='related__attraction__header'>
              {currentDestination.destination}
            </p>
            <div className='related__attraction__info-wrapper'>
              <div className='related__attraction__info-1'>
                <p className='related__attraction__duration'>
                  <FaClock className='related__attraction__icon' /> Duration:{' '}
                  {currentDestination.howLong}minutes
                </p>
                <p className='related__attraction__price'>
                  <FaCoins className='related__attraction__icon' /> From: $
                  {currentDestination.price}
                </p>
              </div>
              <div className='related__attraction__info-2'>
                <p className='related__attraction__rating'>
                  <FaStar className='related__attraction__icon' /> Rating:{' '}
                  {currentDestination.rating}/5.0
                </p>
                {currentDestination.available ? (
                  <button className='related__attraction__button'>
                    <FaSuitcaseRolling className='related__attraction__icon' />
                    Book &rarr;
                  </button>
                ) : (
                  <button
                    className='related__attraction__button__disabled'
                    disabled={currentDestination.available}
                  >
                    <FaBan className='related__attraction__icon' />
                    N/A <span>due to pandemic</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
