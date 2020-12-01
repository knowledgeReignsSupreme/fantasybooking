import React from "react";

export default function Filter({
  setDestinationNameFilter,
  setDestinationStoryFilter,
  setDestinationMaxPrice,
  destinationNameFilter,
  destinationStoryFilter,
  destinationMaxPrice
}) {
  return (
    <div className="attractions__filter__wrapper">
      <div className="attractions__filter__wrapper__input">
        <label htmlFor="nameFilter">Filter Name:</label>
        <input
          onChange={(e) => setDestinationNameFilter(e.target.value)}
          type="text"
          name="nameFilter"
          defaultValue={destinationNameFilter}
        />
      </div>
      <div className="attractions__filter__wrapper__input">
        <label htmlFor="storyFilter">Related Story:</label>
        <input
          onChange={(e) => setDestinationStoryFilter(e.target.value)}
          type="text"
          name="storyFilter"
          defaultValue={destinationStoryFilter}
        />
      </div>
      <div className="attractions__filter__wrapper__input">
        <label htmlFor="maxPrice">Max Price Per Night:</label>
        <input
          type="number"
          name="maxPrice"
          onChange={(e) => setDestinationMaxPrice(e.target.value)}
          defaultValue={destinationMaxPrice}

        />
      </div>
    </div>
  );
}
