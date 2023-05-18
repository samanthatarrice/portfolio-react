import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer" className="pb-5 position-relative">
          <div className="footer-divider">
            <div className="top-white-line"></div>
            <img className="w-100" src="images/waves2.svg" alt="wavy white divider" />
          </div>
          <p className="text-center mt-5 mt-md-0 px-4">Web Development & Design © Samantha Tarrice, 2023</p>
          <p className="text-center px-5">Icons by <a href="https://fontawesome.com/" target="_blank">FontAwesome</a> and illustrations by <a href="https://icons8.com/illustrations/author/TQQ1qAnr9rn5" target="_blank">Oleg Shcherba</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
          <div className="d-flex justify-content-center footer-fa">
            <a href="https://github.com/samanthatarrice" target="_blank" aria-label="Sam's Github"><i className="fab fa-github-square m-3" /></a>
            <a href="https://www.linkedin.com/in/starrice/" target="_blank" aria-label="Sam's Linkedin"><i className="fab fa-linkedin m-3" /></a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
