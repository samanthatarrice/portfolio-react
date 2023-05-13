import React, { Component } from 'react';

class Divider extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="pt-5 position-relative">
          <div className="divider">
            <div className="top-white-line"></div>
            <img src="images/waves2.svg" alt="wavy white divider" />
            <img src="images/waves.svg" alt="wavy white divider" />
            <div className="bottom-white-line"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Divider;
