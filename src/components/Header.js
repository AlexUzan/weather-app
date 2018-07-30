import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img id="logo" src={logo} alt="React logo" />
        <h1>Show Local Weather</h1>
      </header>
    );
  }
}
