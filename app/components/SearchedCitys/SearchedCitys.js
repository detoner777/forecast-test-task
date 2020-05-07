import React, { Component, Fragment } from 'react';
import './SearchedCitys.css';
import City from './City/City';
import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';

function SearchedCitys(props) {
  const uniqueSet = Array.from(new Set(props.citys));
  const reversed = uniqueSet.reverse();
  const citys = reversed.slice(0, 5);

  return (
    <Fragment>
      <div className="searched-citys-container">
        {citys.map((city) => (
          <City key={uuidv4()} city={city} />
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
