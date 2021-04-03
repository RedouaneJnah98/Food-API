import React from 'react';
import FoodList from './components/FoodList';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import { Route, Switch } from 'react-router-dom';

// Import page
import SingleFood from './page/SingleFood';

function App() {
  return (
    <>
      <Navbar />
      <SearchForm />
      <Switch>
        <Route exact path="/">
          <FoodList />
        </Route>
        <Route path="/foods/:id" children={<SingleFood />} />
      </Switch>
    </>
  );
}

export default App;
