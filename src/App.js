import React, { Component } from 'react';
import Header from './components/HeaderComponent'
import Portfolio from './components/PortfolioComponent'
import './App.css';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Header />
      <Portfolio />
    </React.Fragment>
    );
  }
}

export default App;
