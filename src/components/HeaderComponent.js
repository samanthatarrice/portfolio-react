import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark navbar-expand-md fixed-top">
          <div className="mobile-nav container px-3">
            <a href="#" className="navbar-brand d-md-none">Samantha Tarrice</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav w-100 d-flex justify-content-evenly">
                <li className="nav-item text-end ms-auto">
                  <a href="#portfolio" className="nav-link pt-4 pt-md-2">Portfolio</a>
                </li>
                <li className="nav-item mx-md-auto ms-auto">
                  <a href="#about" className="nav-link py-3 py-md-2">About</a>
                </li>
                <li className="nav-item ms-auto ms-md-0 me-md-auto">
                  <a href="#contact" className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header>
          <div className="container">
            <div className="row">
              <div className="col-md">
                <h1>Hi, I'm Sam...</h1>
                {/* <p>I am a dedicated developer who truly enjoys building high quality responsive web and mobile apps with keen attention to detail. As a former educator I understand the importance of always learning and working in a team. I'm available for remote part-time/full-time employment, or freelance work.</p> */}
                <p>I’m a frontend developer who views coding as a combination of a creative process, problem solving, and science. As a previous educator for over a decade, I bring excellent communication and organizational skills to my team. Learn more about me in my <a href='#about'>about</a> section. I’m available for hire as a contractor or permanent employee, and would love to <a href='#contact'>hear</a> from you!</p>
              </div>
              <div className="col">
                <img src="images/hero.png" alt="Woman sitting at desk working on a laptop." className="w-100" />
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
