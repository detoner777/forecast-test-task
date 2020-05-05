import React from 'react';
import Search from './components/Search/Search';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import CurrentDay from './components/CurrentDay/CurrentDay';
import ForecastData from './components/ForecastData/ForecastData';
import SearchedCitys from './components/SearchedCitys/SearchedCitys';

function App() {
  return (
    <div className="App">
      <Router>
        <Search />
        <SearchedCitys />
        <Switch>
          <Route path="/" exact component={CurrentDay} />
          <Route path="/forecast" component={ForecastData} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
