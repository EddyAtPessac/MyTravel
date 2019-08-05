import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
     <iframe src= {photo}>
    </iframe>
    <figcaption>
      <blockquote>Travel to {destination} in {country} <br/>(distance: {distance} km)</blockquote>
    </figcaption>
  </figure>
);

export default Travel;

