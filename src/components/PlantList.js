import React from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  return (
    <ul className="cards">{/* render PlantCards components in here */}</ul>
    plants.map((plant)=>
    <PlantCard
    key={plant.id}
    id={plant.id}
    
  )
  );
}

export default PlantList;
