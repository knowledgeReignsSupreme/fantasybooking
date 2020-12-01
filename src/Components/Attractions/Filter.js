import React, { useState, useEffect } from "react";

export default function Filter({
  filtersOn,
  setAttractionNameFilter,
  setAttractionStoryFilter,
  attractionNameFilter,
  attractionStoryFilter,
}) {
  useEffect(() => {}, [filtersOn]);
  return (
    <div className="attractions__filter__wrapper">
      <div className="attractions__filter__wrapper__input">
        <label htmlFor="nameFilter">Attraction Name:</label>
        <input
          onChange={(e) => setAttractionNameFilter(e.target.value)}
          defaultValue={attractionNameFilter}
          type="text"
          name="nameFilter"
        />
      </div>
      <div className="attractions__filter__wrapper__input">
        <label htmlFor="storyFilter">Related Story:</label>
        <input
          onChange={(e) => setAttractionStoryFilter(e.target.value)}
          defaultValue={attractionStoryFilter}
          type="text"
          name="storyFilter"
        />
      </div>
    </div>
  );
}
