import React from "react";
import Travel from "./Travel";

const travels_tab = [
    {
        destination:"Vienne",
        country:"Autriche",
        photo:"https://pixabay.com/fr/photos/%C3%A9glise-de-st-charles-vienne-autriche-4387053/",
        distance:"1700"
    },
    {
        destination:"Petra",
        country:"Jordanie",
        photo:"https://pixabay.com/fr/photos/petra-jordanie-grottes-antique-4389242/",
        distance:"5000"
    },
    {
        destination:"Paris",
        country:"France",
        photo:"https://pixabay.com/fr/photos/paris-tour-eiffel-france-4353082/",
        distance:"600"
    },
    {
        destination:"Gommern",
        country:"Allemagne",
        photo:"https://pixabay.com/fr/photos/allemagne-ch%C3%A2teau-l-architecture-4380763/",
        distance:"1600"
    },
    {
        destination:"Lisbonne",
        country:"Portugal",
        photo:"https://pixabay.com/fr/photos/lisbonne-portugal-rouge-tram-4379656/",
        distance:"1100"
    } ];



const Travels =() => (
 <div>
    {travels_tab.map( item => (
      <Travel destination={item.destination} country={item.country} photo={item.photo} distance={item.distance}/>
    )) }

 </div>
);
export default Travels;