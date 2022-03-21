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
                <button className="accordion-button px-4 px-sm-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#project1">Mono-Log Journal App</button>
              </h3>
              <div id="project1" className="accordion-collapse collapse show mb-2 mb-sm-3" data-bs-parent="#portfolioAccordion">
                <div className="accordion-body container px-5 px-sm-1">
                  <div className="row d-flex align-items-center">
                    <div className="app-view-container col-md-6 me-2-sm pb-4 pb-md-0">
                      <div className="d-flex justify-content-center" >
                        <img src="/images/mobile-black.png" alt="Mobile phone outline." className="mobile-phone"/>
                        <div className="app-video-container">
                          <video className="app-video" src="images/Mono_Log-video.mp4" muted autoPlay loop>
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        
                      </div>
                    </div>
                    <div className="col ms-sm-2 mt-4 mt-sm-0">
                      <h4 className="text-center">Mono-Log Journal App</h4>
                      <p>I am currently working on this final project to showcase all I have learned in NuCamp's Full Stack Bootcamp. I created the wireframe using Figma, and set up the React Native app using Expo. I set up navigation with React-Navigation, and used other elements from other packages such as React-Native-Elements and React-Native-Calendars. So far, the user can log journal entries to another page which shows all the journal entries. They can also log their mood and upload images from their gallery. I plan to implement more features, such as a calendar that keeps track of the days they logged an entry and shows data trends about their mood. I also plan on adding the ability for a user to log on to the app when I learn more about backend programming.</p>
                      <div className="project-links d-flex align-items-center justify-content-center my-4 my-lg-5">
                        <div className="d-flex align-items-center me-5">
                          <i className="fab fa-github fs-1 me-2" />
                          <a className="fs-5" href="https://github.com/samanthatarrice/mono_log-journal-app" target="_blank">Github repo</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="projectHeading2">
                <button className="accordion-button collapsed px-4 px-sm-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#project2">My Travel Blog</button>
              </h3>
              <div id="project2" className="accordion-collapse collapse mb-2 mb-sm-3" data-bs-parent="#portfolioAccordion">
                <div className="accordion-body container px-5 px-sm-1">
                  <div className="row d-flex flex-row-reverse">
                    <div className="app-view-container col-md-6 me-2-sm pb-4 pb-md-0">
                      <a href="https://samanthatarrice.github.io/travel-journal/" target="_blank" >
                        <img src="/images/monitor-black.png" alt="Black and white computer monitor." className="monitor w-100" />
                        <img src="images/travel-blog.png" alt="View of Travel Blog" className="app" />
                      </a>
                    </div>
                    <div className="col ms-sm-2 mt-4 mt-sm-0">
                      <h4 className="text-center">My Travel Blog</h4>
                      <p>This is a solo project I worked on after learning more about passing props in React. I mapped over the data I included as a data.js file to display the properties for each experience. Although I still have yet to learn about importing data from APIs, this was good practice working with data and passing to components.</p>
                      <div className="project-links d-flex align-items-center justify-content-center my-4 my-lg-5">
                        <div className="d-flex align-items-center me-5">
                          <i className="fab fa-github fs-1 me-2" />
                          <a className="fs-5" href="https://github.com/samanthatarrice/travel-journal" target="_blank">Github repo</a>
                        </div>
                        <button className="live-site-btn btn fs-5 text-decoration-none"><a href="https://samanthatarrice.github.io/travel-journal/" target="_blank">Live Site</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="projectHeading3">
                <button className="accordion-button collapsed px-4 px-sm-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#project3">Bob Ross' Search & Paint</button>
              </h3>
              <div id="project3" className="accordion-collapse collapse mb-2 mb-sm-3" data-bs-parent="#portfolioAccordion">
                <div className="accordion-body container px-5 px-sm-1">
                  <div className="row d-flex align-items-center">
                    <div className="app-view-container col-md-6 me-2-sm pb-4 pb-md-0">
                      <a href="https://bobs-search-n-paint.netlify.app/" target="_blank" >
                        <img src="/images/monitor-black.png" alt="Black and white computer monitor." className="monitor w-100" />
                        <img src="/images/bob-monitor.png" alt="Bob Ross' Search & Paint desktop view." className="app" />
                      </a>
                    </div>
                    <div className="col ms-sm-2 mt-4 mt-sm-0">
                      <h4 className="text-center">Bob Ross' Search & Paint</h4>
                      <p>This was my first Hackathon where I completed a solo project for a Mintbean Hackathon. The challenge was to create an app where a user could draw on the screen. At this time, I only knew foundational web development, so I used what I knew about HTML, CSS and JavaScript to create an app that did more than fulfill the requirements by adding more creative features. I was one of only 5% of developers who participated in this hackathon to receive a <a href="https://hire.mintbean.io/">Mintbean Star</a>. The idea was also inspired by a game I was working on for my three year old daughter where the user has to find items on the screen in order to play a game or watch a video. Learn more about it on my project's <a href="https://bob-landing.netlify.app/" target="_blank">landing page</a>. </p>
                      <div className="project-links d-flex align-items-center justify-content-center my-4 my-lg-5">
                        <div className="d-flex align-items-center me-5">
                          <i className="fab fa-github fs-1 me-2" />
                          <a className="fs-5" href="https://github.com/samanthatarrice/bobs_search_and_paint" target="_blank">Github repo</a>
                        </div>
                        <button className="live-site-btn btn fs-5 text-decoration-none"><a href="https://bobs-search-n-paint.netlify.app/" target="_blank">Live Site</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="projectHeading4">
                <button className="accordion-button collapsed px-4 px-sm-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#project4">Sean's Portfolio</button>
              </h3>
              <div id="project4" className="accordion-collapse collapse mb-2 mb-sm-3" data-bs-parent="#portfolioAccordion">
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
                      <p>This is a professional portfolio I am working on for a graphic designer. It was created using HTML, CSS, and JS. I experimented with some custom animations here and a custom cursor. I plan to add some Bootstrap elements as well as optimize the images for better performance.</p>
                      <div className="project-links d-flex align-items-center justify-content-center my-4 my-lg-5">
                        <div className="d-flex align-items-center me-5">
                          <i className="fab fa-github fs-1 me-2" />
                          <a className="fs-5" href="https://github.com/samanthatarrice/seans_portfolio" target="_blank">Github repo</a>
                        </div>
                        <button className="live-site-btn btn fs-5 text-decoration-none"><a href="https://www.sean-tarrice.com/" target="_blank">Live Site</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="projectHeading5">
                <button className="accordion-button  collapsed px-4 px-sm-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#project5">Stickies</button>
              </h3>
              <div id="project5" className="accordion-collapse collapse mb-2 mb-sm-3" data-bs-parent="#portfolioAccordion">
                <div className="accordion-body container px-5 px-sm-1">
                  <div className="row">
                    <div className="app-view-container col-md-6 me-2-sm pb-4 pb-md-0">
                      <a href="https://samanthatarrice.github.io/stickies_notes_app/" target="_blank">
                        <img src="/images/monitor-black.png" alt="Black and white computer monitor." className="monitor w-100" />
                        <img src="/images/stickies-monitor.png" alt="Stickies app desktop view." className="app" />
                      </a>
                    </div>
                    <div className="col ms-sm-2 mt-4 mt-sm-0">
                      <h4 className="text-center">Stickies</h4>
                      <p>I created this app to practice using jQuery to manipulate the DOM. Once I've learned more about programming the backend, I plan to add a way for a user to log in so the data persists in their account. You can find more practice projects such as these on my Github page, such as a simple <a href="https://github.com/samanthatarrice/expense_app" target="_blank">Expense App</a> and a simple <a href="https://github.com/samanthatarrice/simple_to_do" target="_blank">To Do List app</a>, which was the first JS project I completed independent of any tutorials.</p>
                      <div className="project-links d-flex align-items-center justify-content-center my-4 my-lg-5">
                        <div className="d-flex align-items-center me-5">
                          <i className="fab fa-github fs-1 me-2" />
                          <a className="fs-5" href="https://github.com/samanthatarrice/stickies_notes_app/" target="_blank">Github repo</a>
                        </div>
                        <button className="live-site-btn btn fs-5 text-decoration-none"><a href="https://samanthatarrice.github.io/stickies_notes_app/" target="_blank">Live Site</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="projectHeading6">
                <button className="accordion-button collapsed px-4 px-sm-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#project6">BMO's Matching Game</button>
              </h3>
              <div id="project6" className="accordion-collapse collapse mb-2 mb-sm-3" data-bs-parent="#portfolioAccordion">
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
                      <p>This was completed as the last project of my Web Development Fundamentals course with NuCamp. The task was to create a matching game with inline styles and JS. I added more features than were required such as more CSS styling and more functionality, such as tracking the levels and prompting the user to choose a difficulty level.</p>
                      <div className="project-links d-flex align-items-center justify-content-center my-4 my-lg-5">
                        <div className="d-flex align-items-center me-5">
                          <i className="fab fa-github fs-1 me-2" />
                          <a className="fs-5" href="https://github.com/samanthatarrice/bmos_matching_game/" target="_blank">Github repo</a>
                        </div>
                        <button className="live-site-btn btn fs-5 text-decoration-none"><a href="https://samanthatarrice.github.io/bmos_matching_game/" target="_blank">Live Site</a></button>
                      </div>
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