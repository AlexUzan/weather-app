import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../Redux/weatherReducer.js'
import '../styles/App.css';


class WeatherDisplay extends Component {
  componentDidMount() {
    this.props.getWeather(
      this.props.city,
      this.props.countryCode,
      this.props.unit
    );
  }

  render() {
    var url = "http://openweathermap.org/img/w/";
    url += this.props.weather_icon + ".png";
    return (
      <div id="weather-display">
        <img src={url} alt="Weather icon" />
        <p>
          {"" + this.props.temperature + " degrees " +
            (this.props.unit === "metric" ? "Celsius" : "Fahrenheit")}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {...state};
}

function mapDispatchToProps(dispatch) {
  return {
    getWeather: (city, countryCode, unit) => dispatch(fetchWeather(
      city, countryCode, unit
    ))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);
