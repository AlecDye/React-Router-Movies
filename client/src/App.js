import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Router path="/"></Router>
      <Router path="/movies/"></Router>
    </div>
  );
};

export default App;
