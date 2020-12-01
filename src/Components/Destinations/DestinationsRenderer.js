import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaClock,
  FaCoins,
  FaDungeon,
  FaBook,
  FaStar,
  FaSuitcase,
  FaBan,
} from "react-icons/fa";

export default function DestinationsRendere({
  destinations,
  destinationNameFilter,
  destinationStoryFilter,
  destinationMaxPrice,
}) {
  console.log(destinationMaxPrice);
  const conditionalRendering = (destinations) => {
    //The given argument is dynamic due to many rendering conditions
    if (destinations.length === 0) {
      return (
        <h1 className="home-page-header">
          Nothing was found. Please check your filters
        </h1>
      );
    }
    return destinations.map((destination) => (
      <div key={destination.id} className="destination">
        <div className="detinations__img__wrapper">
          <img
            className="destination__img"
            src={destination.images[1]}
            alt={destination.destination}
          />
          <p className="destination__text__rating">
            <FaStar className="destination__icon" />
            Rating: {destination.rating}/5.0
          </p>
          <Link to={`/destinations/${destination.id}`} key={destination.id}>
            {destination.available ? (
              <button className="destination__button">
                <FaSuitcase className="destination__icon" />
                Book Now &rarr;
              </button>
            ) : (
              <button
                className="destination__button__disabled"
                disabled={destination.available}
              >
                <FaBan className="destination__icon" />
                N/A <span>due to pandemic</span>
              </button>
            )}
          </Link>
        </div>
        <div className="destination__text">
          <h1 className="destination__text__header">
            {destination.destination}
          </h1>
          <h5 className="destination__text__arrival">
            <FaDungeon className="destination__icon" />
            Arrival: {destination.howToArrive}
          </h5>
          <p className="destination__text__duration">
            <FaClock className="destination__icon" />
            Duration: {destination.howLong}days
          </p>
          <p className="destination__text__price">
            <FaCoins className="destination__icon" />
            From: ${destination.price}
          </p>
          <p className="destination__text__known">
            <FaBook className="destination__icon" />
            Knowm from: "{destination.knownFrom}"
          </p>
        </div>
      </div>
    ));
  };
  return (
    <div className="destinations__wrapper">
      {destinationNameFilter.length === 0 &&
      destinationStoryFilter.length === 0 &&
      destinationMaxPrice === undefined //Regular usecase. no filters
        ? conditionalRendering(destinations)
        : destinationNameFilter.length > 0 &&
          destinationStoryFilter.length <= 0 &&
          destinationMaxPrice === undefined //There is a name filter and not a story filter
        ? conditionalRendering(
            destinations.filter((destination) =>
              destination.destination
                .toLowerCase()
                .includes(destinationNameFilter.toLowerCase())
            )
          )
        : destinationStoryFilter.length > 0 &&
          destinationNameFilter.length <= 0 &&
          destinationMaxPrice === undefined
        ? conditionalRendering(
            destinations.filter((destination) =>
              destination.knownFrom
                .toLowerCase()
                .includes(destinationStoryFilter.toLowerCase())
            )
          )
        : destinationStoryFilter.length > 0 &&
          destinationNameFilter.length > 0 &&
          destinationMaxPrice === undefined
        ? conditionalRendering(
            destinations.filter(
              (destination) =>
                destination.knownFrom
                  .toLowerCase()
                  .includes(destinationStoryFilter.toLowerCase()) &&
                destination.destination
                  .toLowerCase()
                  .includes(destinationNameFilter.toLowerCase())
            )
          )
        : destinationMaxPrice !== undefined &&
          destinationStoryFilter.length <= 0 &&
          destinationNameFilter.length <= 0
        ? conditionalRendering(
            destinations.filter(
              (destination) =>
                destination.price / destination.howLong > destinationMaxPrice
            )
          )
        : destinationMaxPrice !== undefined &&
          destinationStoryFilter.length > 0 &&
          destinationNameFilter.length <= 0
        ? conditionalRendering(
            destinations.filter(
              (destination) =>
                destination.knownFrom
                  .toLowerCase()
                  .includes(destinationStoryFilter.toLowerCase()) &&
                destination.price / destination.howLong >= destinationMaxPrice
            )
          )
        : destinationMaxPrice !== undefined &&
          destinationStoryFilter.length <= 0 &&
          destinationNameFilter.length > 0
        ? conditionalRendering(
            destinations.filter(
              (destination) =>
                destination.destination
                  .toLowerCase()
                  .includes(destinationNameFilter.toLowerCase()) &&
                destination.price / destination.howLong >= destinationMaxPrice
            )
          )
        : destinationMaxPrice !== undefined &&
          destinationStoryFilter.length > 0 &&
          destinationNameFilter.length > 0
        ? conditionalRendering(
            destinations.filter(
              (destination) =>
                destination.knownFrom
                  .toLowerCase()
                  .includes(destinationStoryFilter.toLowerCase()) &&
                destination.price / destination.howLong >=
                  destinationMaxPrice &&
                destination.destination
                  .toLowerCase()
                  .includes(destinationNameFilter.toLowerCase())
            )
          )
        : ""}
    </div>
  );
}
