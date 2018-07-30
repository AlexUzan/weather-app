import React, { Component } from 'react';
import '../styles/App.css';
import { city, country, countryCode } from '../config.json';

import WeatherDisplay from './WeatherDisplay.js';
import UnitButton from './UnitButton.js';
import { updateTime } from '../Redux/weatherReducer.js';
import { connect } from 'react-redux';


class PageContainer extends Component {
  componentDidMount() {
    setInterval(
      this.props.getTime,
      1000
    );
  }

  render() {
    return (
      <div className="page-container">
        <h2>Current conditions in {city}, {country}</h2>
        <p>{this.props.date}</p>
        <WeatherDisplay city={city} countryCode={countryCode}/>
        <UnitButton />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {date: state.date};
}

function mapDispatchToProps(dispatch) {
  return {getTime: () => dispatch(updateTime())};
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
