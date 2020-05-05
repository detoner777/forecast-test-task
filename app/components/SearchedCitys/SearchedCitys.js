import React, { Component, Fragment } from 'react';
import './SearchedCitys.css';
import City from './City/City';

import { connect } from 'react-redux';

function SearchedCitys(props) {
  const reversed = props.citys.reverse();
  const citys = reversed.slice(0, 5);

  return (
    <Fragment>
      <div className="searched-citys-container">
        {citys.map((city) => (
          <City key={city.index} city={city} />
        ))}
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    citys: state.citys,
  };
};

export default connect(mapStateToProps)(SearchedCitys);
