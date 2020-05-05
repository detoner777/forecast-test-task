import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { getWeather, addSearchedCity } from '../../store/actions/actions';
import './search.css';

const Search = (props) => {
  const [value, setValue] = useState('');

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      props.onSearchSubmit(value);
      props.addCity(value);
    }
  };
  return (
    <Fragment>
      <div className="search">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter city name..."
            value={value}
            onChange={inputChangeHandler}
            required
          />
          <button onClick={submitHandler}>Search</button>
        </form>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchSubmit: (name) => dispatch(getWeather(name)),
    addCity: (name) => dispatch(addSearchedCity(name)),
  };
};

export default connect(null, mapDispatchToProps)(Search);
