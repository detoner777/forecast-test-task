import React, { Component } from 'react';
import './CurrentDayTable.css';
import { connect } from 'react-redux';

class CarrentDayTable extends Component {
  convertToTime(timestamp) {
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = '0' + date.getMinutes();
    minutes = minutes.length > 2 ? minutes.substring(1, 3) : minutes;
    let time = hours + ' : ' + minutes;
    return time;
  }
  render() {
    const { humidity, pressure, sunrise, sunset } = this.props;
    let windSpeed = parseInt(this.props.windSpeed);

    return (
      <div className="current-day-table">
        <div className="current-day-table__content">
          <div className="extra-current-day-table">
            <div>
              <i className="fas fa-wind wind"></i> Wind speed{' '}
              <span>{windSpeed.toFixed(0)} m/s</span>
            </div>
            <div>
              <i className="fas fa-tint humidity"></i> Humidity{' '}
              <span>{humidity}%</span>
            </div>
            <div>
              <i className="fas fa-compress-arrows-alt press"></i> Pressure{' '}
              <span>{pressure}</span>
            </div>
            <div>
              <i className="fas fa-sun sun-i"></i> Sunrise{' '}
              <span>{this.convertToTime(sunrise)}</span>
            </div>
            <div>
              <i className="fas fa-moon sunset"></i> Sunset{' '}
              <span>{this.convertToTime(sunset)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    windSpeed: state.currentWeather.wind
      ? state.currentWeather.wind.speed
      : undefined,
    humidity: state.currentWeather.main
      ? state.currentWeather.main.humidity
      : undefined,
    pressure: state.currentWeather.main
      ? state.currentWeather.main.pressure
      : undefined,
    sunrise: state.currentWeather.sys
      ? state.currentWeather.sys.sunrise
      : undefined,
    sunset: state.currentWeather.sys
      ? state.currentWeather.sys.sunset
      : undefined,
    list: state.forecast.list,
  };
};

export default connect(mapStateToProps)(CarrentDayTable);
