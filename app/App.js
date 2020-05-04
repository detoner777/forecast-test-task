import React from 'react';
import Search from './components/Search/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import CurrentDay from './components/CurrentDay/CurrentDay';
import ForecastData from './components/ForecastData/ForecastData';

function App() {
  return (
    <div className="App">
      <Router>
        <Search />
        <Switch>
          <CurrentDay />
        </Switch>
        <ForecastData />
      </Router>
    </div>
  );
}
export default App;
