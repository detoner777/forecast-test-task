import React from 'react';
import Search from './components/Search/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './app.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Search />
      </Router>
    </div>
  );
}
export default App;
