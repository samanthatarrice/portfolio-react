import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer" class="pb-5">
          <div class="footer-divider">
            <div class="top-white-line"></div>
            <img src="/images/waves2.svg" alt="wavy white divider" />
          </div>
          <p class="text-center mt-5 mt-md-0">2022 © Samantha Tarrice</p>
          <p class="text-center">[Attribution]</p>
          <div class="d-flex justify-content-center">
            <i class="fab fa-github-square m-3"></i>
            <i class="fab fa-linkedin m-3"></i>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;