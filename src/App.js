import React from 'react';
import FoodList from './components/FoodList';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <>
      <Navbar />
      <SearchForm />
      <FoodList />
    </>
  );
}

export default App;
