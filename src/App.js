import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Divider from './components/DividerComponent';
import Portfolio from './components/PortfolioComponent';
import About from './components/AboutComponent';
import Contact from './components/ContactComponent';
import Footer from './components/FooterComponent';
import './App.css';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Header />
      <Divider />
      <Portfolio />
      <Divider />
      <About />
      <Divider />
      <Contact />
      <Footer />
    </React.Fragment>
    );
  }
}

export default App;
