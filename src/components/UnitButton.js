import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';

import { conversion } from '../Redux/weatherReducer.js';


class UnitButton extends Component {
  render() {
    return (
      <button id="unit-button" onClick={this.props.changeUnit}>
        See temperature in {this.props.unit === 'metric' ? "Fahrenheit" : "Celsius"}
      </button>
    );
  }
}

const mapStateToProps = state => {
  return {unit: state.unit};
}

const mapDispatchToProps = dispatch => {
  return {changeUnit: () => dispatch(conversion())};
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitButton);
