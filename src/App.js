import React, { useEffect } from 'react';

function App() {
  const fetchFoods = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken'
    );
    const data = await response.json();
    console.log(data.meals[0]);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return <h3>food project api</h3>;
}

export default App;
