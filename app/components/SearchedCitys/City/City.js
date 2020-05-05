import React from 'react';
import { getWeather } from '../../../store/actions/actions';
import { connect } from 'react-redux';
import './City.css';

const City = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSearchSubmit(props.city);
  };

  return (
    <div className="searched-city-item" onClick={submitHandler}>
      {props.city}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchSubmit: (name) => dispatch(getWeather(name)),
  };
};

export default connect(null, mapDispatchToProps)(City);
