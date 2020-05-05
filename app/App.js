import React, { Fragment } from 'react';
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

function App(props) {
  return (
    <div className="App">
      <Router>
        <Search />
        <SearchedCitys />
        {props.error ? (
          <div className="info error">Invalid name</div>
        ) : (
          <Switch>
            <Route path="/" exact component={CurrentDay} />
            <Route path="/forecast" component={ForecastData} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(App);
