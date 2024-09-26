import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard 
          key={plant.id} 
          plants={plant.name} 
          plantImgs={plant.image} 
          prices={plant.price} 
        />
      ))}
    </ul>
  );
}

export default PlantList;