import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <h2 className="text-center my-5">Portfolio</h2>
          <div className="accordion-fluid" id="portfolioAccordion">
            <div className="accordion-item">
              <h3 className="accordion-header" id="projectHeading1">
                <button className="accordion-button px-4 px-sm-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#project1">Bob Ross' Search & Paint</button>
              </h3>
              <div id="project1" className="accordion-collapse collapse show mb-2 mb-sm-3" data-bs-parent="#portfolioAccordion">
                <div className="accordion-body container px-5 px-sm-1">
                  <div className="row">
                    <div className="app-view-container col-md-6 me-2-sm pb-4 pb-md-0">
                      <a href="https://bobs-search-n-paint.netlify.app/" target="_blank" >
                        <img src="/images/monitor-black.png" alt="Black and white computer monitor." className="monitor w-100" />
                        <img src="/images/bob-monitor.png" alt="Bob Ross' Search & Paint desktop view." className="app" />
                      </a>
                    </div>
                    <div className="col ms-sm-2 mt-4 mt-sm-0">
                      <h4 className="text-center">Bob Ross' Search & Paint</h4>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi exercitationem, perferendis, dolor eos cum aspernatur vitae dicta a totam voluptate deleniti harum provident velit quibusdam neque adipisci vero magni quasi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="projectHeading2">
                <button className="accordion-button collapsed px-4 px-sm-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#project2">Sean's Portfolio</button>
              </h3>
              <div id="project2" className="accordion-collapse collapse mb-2 mb-sm-3" data-bs-parent="#portfolioAccordion">
                <div className="accordion-body container px-5 px-sm-1">
                  <div className="row d-flex flex-row-reverse">
                    <div className="app-view-container col-md-6 me-2-sm pb-4 pb-md-0">
                      <a href="https://www.sean-tarrice.com/" target="_blank" >
                        <img src="/images/monitor-black.png" alt="Black and white computer monitor." className="monitor w-100" />
                        <img src="/images/sean-monitor.png" alt="Sean's portfolio desktop view." className="app" />
                      </a>
                    </div>
                    <div className="col ms-sm-2 mt-4 mt-sm-0">
                      <h4 className="text-center">Sean's Portfolio</h4>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi exercitationem, perferendis, dolor eos cum aspernatur vitae dicta a totam voluptate deleniti harum provident velit quibusdam neque adipisci vero magni quasi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="projectHeading3">
                <button className="accordion-button collapsed px-4 px-sm-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#project3">Stickies</button>
              </h3>
              <div id="project3" className="accordion-collapse collapse mb-2 mb-sm-3" data-bs-parent="#portfolioAccordion">
                <div className="accordion-body container px-5 px-sm-1">
                  <div className="row">
                    <div className="app-view-container col-md-6 me-2-sm pb-4 pb-md-0">
                      <a href="https://samanthatarrice.github.io/notes_app/" target="_blank">
                        <img src="/images/monitor-black.png" alt="Black and white computer monitor." className="monitor w-100" />
                        <img src="/images/stickies-monitor.png" alt="Stikies app desktop view." className="app" />
                      </a>
                    </div>
                    <div className="col ms-sm-2 mt-4 mt-sm-0">
                      <h4 className="text-center">Stickies</h4>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi exercitationem, perferendis, dolor eos cum aspernatur vitae dicta a totam voluptate deleniti harum provident velit quibusdam neque adipisci vero magni quasi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="projectHeading4">
                <button className="accordion-button collapsed px-4 px-sm-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#project4">BMO's Matching Game</button>
              </h3>
              <div id="project4" className="accordion-collapse collapse mb-2 mb-sm-3" data-bs-parent="#portfolioAccordion">
                <div className="accordion-body container px-5 px-sm-1">
                  <div className="row d-flex flex-row-reverse">
                    <div className="app-view-container col-md-6 me-2-sm pb-4 pb-md-0">
                      <a href="https://samanthatarrice.github.io/bmos_matching_game/" target="_blank">
                        <img src="/images/monitor-black.png" alt="Black and white computer monitor." className="monitor w-100" />
                        <img src="/images/bmo-monitor.png" alt="BMO's Matching Game desktop view." className="app" />
                      </a>
                    </div>
                    <div className="col ms-sm-2 mt-4 mt-sm-0">
                      <h4 className="text-center">BMO's Matching Game</h4>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi exercitationem, perferendis, dolor eos cum aspernatur vitae dicta a totam voluptate deleniti harum provident velit quibusdam neque adipisci vero magni quasi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center my-5 py-3">
            <p>See more of my work on <span>Github</span></p>
            <a href="https://github.com/samanthatarrice" target="_blank"><i className="portfolio-fa fab fa-github" /></a>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Portfolio; 