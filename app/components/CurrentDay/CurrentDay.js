import React from 'react';
import CurrentDayTable from './CurrentDayTable/CurrentDayTable';
import CurrentDayMain from './CurrentDayMain/CurrentDayMain';
import './CurrentDay.css';

function CurrentDay() {
  return (
    <div className="current-day-wrapp">
      <CurrentDayMain />
      <CurrentDayTable />
    </div>
  );
}

export default CurrentDay;
