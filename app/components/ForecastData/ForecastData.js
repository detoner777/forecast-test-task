import React, { Component, Fragment } from 'react';
import './ForecastData.css';
import Forecast from './Forecast/Forecast';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class ForecastData extends Component {
  render() {
    const { list } = this.props;
    const temperatures = [];
    if (list) {
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      let day = new Date().getDay();
      for (let i = 10; i <= 26; i += 4) {
        if (day === 6) {
          day = 0;
        } else {
          day++;
        }
        temperatures.push({
          tempAfternoon: list[i].main.temp,
          tempNight: list[i + 4].main.temp,
          weekDay: days[day],
        });
      }
    }

    return (
      <Fragment>
        <div className="forecast-data">
          {temperatures.map((temperature) => (
            <Forecast
              key={temperature.weekDay}
              tempAfternoon={parseInt(temperature.tempAfternoon).toFixed(0)}
              tempNight={parseInt(temperature.tempNight).toFixed(0)}
              day={temperature.weekDay}
            />
          ))}
        </div>
        <div>
          <Link className="link-redirect" to="/">
            Back
          </Link>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.forecast.list,
  };
};

export default connect(mapStateToProps)(ForecastData);
