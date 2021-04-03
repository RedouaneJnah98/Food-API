import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const API_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const SingleFood = () => {
  const { id } = useParams();
  const [foods, setFoods] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchFoods = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchFoods(`${API_ENDPOINT}${id}`);
  }, [id]);

  return <h1>Single Food Page</h1>;
};

export default SingleFood;
