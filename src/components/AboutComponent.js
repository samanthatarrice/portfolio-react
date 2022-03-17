import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <section id="about">
          <h2 className="text-center my-4">About</h2>
          <div className="container mb-5">
            <div className="row d-flex align-items-center flex-md-row flex-column-reverse">
              <div className="col">
                <div className="card toolkit-card border-0">
                  <div className="card-body text-center p-4 p-md-5">
                    <h3 className="card-title">Tech Toolkit</h3>
                    <p className="card-text my-3">React, React Native, React-Bootstrap, Javascript, jQuery, CSS, Boostrap, Sass, HTML, Git, Github, Figma, VS Code</p>
                    <span><i className="fab fa-react m-2"></i><i className="fab fa-js-square m-2"></i><i className="fab fa-css3-alt m-2"></i><i className="fab fa-bootstrap m-2"></i><i className="fab fa-sass align-top pt-2 m-2"></i><i className="fab fa-gitkraken m-2"></i><i className="fab fa-figma m-2"></i></span>
                  </div>
                </div>
              </div>
              <div className="col-7 col-md-4 text-center mx-md-5 mb-4 mb-md-0">
                <img src="/images/profile-side.jpg" alt="Sam's profile pic." className="sam-sitting w-100 rounded-circle"/>
              </div>
            </div>
            <div className="row my-2 my-sm-4 my-md-5">
              {/* <div className='col-4 d-xl-block d-none align-self-center'>
                <img className="w-100" src="/images/hug.gif"/>
                Illustration by <a href="https://icons8.com/illustrations/author/TQQ1qAnr9rn5">Oleg Shcherba</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
                <img className="w-100" src="/images/travel.png"/>
                Illustration by <a href="https://icons8.com/illustrations/author/N3YOxdn12Kox">Marina Mogulska</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
                <img className="w-100" src="/images/abstract-sign-in.gif"/>
                Illustration by <a href="https://icons8.com/illustrations/author/TQQ1qAnr9rn5">Oleg Shcherba</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
              </div> */}
              <div className="col">
                <div className="card experience-card border-0">
                  <div className="card-body p-4 p-md-5">
                    <h3 className="card-title text-center">Professional Experience</h3>
                    <ul className="experience-item card-text my-3 ps-3 ps-md-5">
                      <li>Aug 2017-June 2021: <span className="text-uppercase">First Grade Teacher</span> @ <a href="https://pasb.com.br/en/">Pan American School of Bahia (PASB)</a></li>
                      <p>My husband and I moved to Salvador, Bahia, Brazil to teach at PASB. While I finished my ten year career as a teacher here, I am so grateful to this school for the opportunties I gained. As a teacher I was responsible for teaching all subjects to a bilingual class. I developed curriculum on a daily basis on my own and with my team, and always sought out new and engaging ways to enhance my lessons. I integrated using technology wherever possible, especially during the pandemic when I spent the majority of my last year teaching online using tools such as Google apps and other various educational programs. I also helped with introducing educational robots with younger grade levels and training teachers on how to integrate them into their lessons.</p>
                    </ul>
                    <ul className="experience-item card-text my-3 ps-3 ps-md-5">
                      <li>Sept 2015-June 2017: <span className="text-uppercase">Third Grade Teacher</span> @ <a href="https://www.st-andrews.org/" target="_blank">Saint Andrew's School</a></li>
                      <p>I gained my first experience as a classroom teacher at Saint Andrew's. Here I developed my skills as a teacher by attending mutliple professional development workshops and conventions in order to learn best teaching practices. I also led an afterschool Minecraft club.</p>
                    </ul>
                    <ul className="experience-item card-text my-3 ps-3 ps-md-5">
                      <li>Aug 2012-Sept 2015: <span className="text-uppercase">Media Specialist</span> @ <a href="https://www.st-andrews.org/" target="_blank">Saint Andrew's School</a></li>
                      <p>As an elementary school Media Specialist I was responsible for managing the library and teaching weekly courses to all grade levels. In addition, I taught weekly technology lessons which I developed in collaboration with each grade level.</p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-12 col-md-6">
                <div className="education-card card border-0 h-100">
                  <div className="card-body p-4 p-md-5">
                    <h3 className="card-title text-center">Education</h3>
                    <ul className="card-text my-3">
                      <li>
                        <p className="mb-0">NuCamp Bootcamp</p>
                        <p className="education-dates mb-0">to be completed in April 2022</p>
                        <p className="">Full Stack (MERN) Web and Mobile App development</p>
                      </li>
                      <li>
                        <p className="mb-0">NuCamp Bootcamp</p>
                        <p className="education-dates mb-0">Nov 2021</p>
                        <p className="">Web Development Fundamentals</p>
                      </li>
                      <li>
                        <p className="mb-0">San Jose State University</p>
                        <p className="education-dates mb-0">June 2011</p>
                        <p className="">K-8 Mutliple Subject Teaching Credential</p>
                      </li>
                      <li>
                        <p className="mb-0">San Francisco State University</p>
                        <p className="education-dates mb-0">June 2009</p>
                        <p className="">Bachelor of Arts in Art Education</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="fun-facts-card card border-0  h-100">
                  <div className="card-body p-4 p-md-5">
                    <h3 className="card-title text-center">Resume</h3>
                    <div className="d-flex justify-content-center align-items-center">
                      <i className="fas fa-file-user fs-1" />
                      <a href="#" className="mb-0 ps-3 fs-4">Link to my resume</a>   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default About;