import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
     <iframe width="500" height="450" src= {photo}>
    </iframe>
    <figcaption>
      <blockquote>Travel to {destination} in {country} <br/>(distance: {distance} km)</blockquote>
    </figcaption>
  </figure>
);

export default Travel;

