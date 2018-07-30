import React, { Component } from 'react';
import '../styles/App.css';

import Header from './Header.js';
import PageContainer from './PageContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PageContainer />
      </div>
    );
  }
}

export default App;
