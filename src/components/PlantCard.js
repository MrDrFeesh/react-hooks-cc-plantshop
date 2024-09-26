import React, { useState } from "react";

function PlantCard({ plants, plantImgs, prices }) {
  const [inStock, setInStock] = useState(true);

  const toggleStock = () => {
    setInStock(!inStock);
  };

  const plant = plants;
  const plantImg = plantImgs;
  const price = prices;

  return (
    <li className="card" data-testid="plant-item">
      <img src={plantImg} alt={plant} />
      <h4>{plant}</h4>
      <p>Price: {price}</p>
      <button className={inStock ? "primary" : ""} onClick={toggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;