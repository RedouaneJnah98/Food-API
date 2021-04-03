import React from 'react';
import { useGlobalContext } from '../context';
import Food from './Food';

const FoodList = () => {
  const { isLoading, meals } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="section">
      {meals.map((meal) => {
        const {
          idMeal: id,
          strArea: country,
          strInstructions: info,
          strMealThumb: image,
          strMeal: title,
        } = meal;
        const newMeal = { id, country, info, image, title };
        return <Food key={id} {...newMeal} />;
      })}
    </section>
  );
};

export default FoodList;
