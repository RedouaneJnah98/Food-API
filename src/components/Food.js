import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({ id, image, title, country }) => {
  return (
    <main className="food-box">
      <img src={image} alt={title} className="food-img" />
      <div className="info">
        <h2 className="title">{title}</h2>
        <p className="food-country">{country} recipe</p>
        <Link to={`/foods/${id}`} className="btn">
          see recipe
        </Link>
      </div>
    </main>
  );
};

export default Food;
