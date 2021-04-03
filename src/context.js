import React, { useContext, useState, useEffect, useReducer } from 'react';
import reducer from './reducer';
import { SET_LOADING, SET_FOODS, HANDLE_SEARCH } from './actions';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const initialState = {
  isLoading: true,
  meals: [],
  query: 'chicken',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchFoods = async () => {
    dispatch({ type: SET_LOADING });

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: SET_FOODS, payload: { meals: data.meals } });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
