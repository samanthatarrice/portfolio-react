import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <h2 className="text-center my-4">About</h2>
          <div className="container mb-5">
            <div className="row d-flex align-items-center flex-md-row flex-column-reverse">
              <div className="col">
                <div className="card toolkit-card border-0">
                  <div className="card-body text-center p-4 p-md-5">
                    <h3 className="card-title">Tech Toolkit</h3>
                    <p className="card-text my-3">React, Javascript, jQuery, CSS, Boostrap, Sass, HTML, Git, Github, Figma, VS Code</p>
                    <span><i className="fab fa-react m-2"></i><i className="fab fa-js-square m-2"></i><i className="fab fa-css3-alt m-2"></i><i className="fab fa-bootstrap m-2"></i><i className="fab fa-sass align-top pt-2 m-2"></i><i className="fab fa-gitkraken m-2"></i><i className="fab fa-figma m-2"></i></span>
                  </div>
                </div>
              </div>
              <div className="col-7 col-md-4 text-center mx-md-5 mb-4 mb-md-0">
                <img src="/images/headshot-placeholder.png" alt="Sam sitting in front of leaves." className="sam-sitting w-100 rounded-circle" />
              </div>
            </div>
            <div className="row my-2 my-sm-4 my-md-5">
              <div className="col">
                <div className="card experience-card border-0 p-2">
                  <div className="card-body p-4 p-md-5">
                    <h3 className="card-title text-center">Experience</h3>
                    <ul className="experience-item card-text my-3 ps-3 ps-md-5">
                      <li>Aug 2021-present: <span className="text-uppercase">Tech Integration Volunteer</span> @ <a href="https://pasb.com.br/en/">Pan American School of Bahia</a></li>
                      <p>Volunteering to help tech department integrate lessons with robots in lower grades</p>
                    </ul>
                    <ul className="experience-item card-text my-3 ps-3 ps-md-5">
                      <li>Aug 2017-June 2021: <span className="text-uppercase">First Grade Teacher</span> @ <a href="https://pasb.com.br/en/">Pan American School of Bahia</a></li>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea eveniet vero eligendi labore voluptatem non quo provident, maxime tenetur quas deleniti eius laborum laboriosam culpa. Quisquam provident corporis rerum.</p>
                    </ul>
                    <ul className="experience-item card-text my-3 ps-3 ps-md-5">
                      <li>Sept 2015-June 2017: <span className="text-uppercase">Third Grade Teacher</span> @ <a href="https://www.st-andrews.org/" target="_blank">Saint Andrew's School</a></li>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea eveniet vero eligendi labore voluptatem non quo provident, maxime tenetur quas deleniti eius laborum laboriosam culpa. Quisquam provident corporis rerum.</p>
                    </ul>
                    <ul className="experience-item card-text my-3 ps-3 ps-md-5">
                      <li>Aug 2012-Sept 2015: <span className="text-uppercase">Media Specialist</span> @ <a href="https://www.st-andrews.org/" target="_blank">Saint Andrew's School</a></li>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea eveniet vero eligendi labore voluptatem non quo provident, maxime tenetur quas deleniti eius laborum laboriosam culpa. Quisquam provident corporis rerum.</p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-2 my-sm-4 my-md-5">
              <div className="col-12 col-md-6 mb-2 mb-sm-4 mb-md-5">
                <div className="education-card card border-0">
                  <div className="card-body text-center p-4 p-md-5">
                    <h3 className="card-title">Education</h3>
                    <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum culpa non expedita autem modi atque! Quidem, nesciunt amet unde natus maiores autem obcaecati, dolorem iusto deleniti molestiae, nostrum quos!</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4 mb-md-5">
                <div className="fun-facts-card card border-0">
                  <div className="card-body text-center p-4 p-md-5">
                    <h3 className="card-title">Fun Facts</h3>
                    <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quis sequi facilis vel maiores pariatur, ducimus illo quidem eum voluptate error! Qui facilis earum laudantium animi consectetur id quibusdam deserunt!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;