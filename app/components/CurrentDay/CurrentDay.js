import React, { Fragment } from 'react';
import CurrentDayTable from './CurrentDayTable/CurrentDayTable';
import CurrentDayMain from './CurrentDayMain/CurrentDayMain';
import { Link } from 'react-router-dom';
import './CurrentDay.css';

function CurrentDay() {
  return (
    <Fragment>
      <div className="current-day-wrapp">
        <CurrentDayMain />
        <CurrentDayTable />
      </div>
      <div>
        <Link className="link-redirect" to="/forecast">
          5 days forecast
        </Link>
      </div>
    </Fragment>
  );
}

export default CurrentDay;
