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
                    <p className="card-text my-3">React, React Native, React-Bootstrap, Javascript, jQuery, Ruby on Rails, CSS, Boostrap, Sass, HTML, Git, Github, Stripe, Mailchimp, Figma, VS Code</p>
                    <span><i className="fab fa-react m-2"></i><i className="fab fa-js-square m-2"></i><i className="fab fa-css3-alt m-2"></i><i className="fab fa-bootstrap m-2"></i><i className="fab fa-sass align-top pt-2 m-2"></i><i className="fab fa-gitkraken m-2"></i><i className="fab fa-figma m-2"></i></span>
                  </div>
                </div>
              </div>
              <div className="col-7 col-md-4 text-center mx-md-5 mb-4 mb-md-0">
                <img src="images/profile-side.jpg" alt="Professional photo of Sam" className="sam-sitting w-100 rounded-circle"/>
              </div>
            </div>
            <div className="row my-2 my-sm-4 my-md-5">
              <div className="col">
                <div className="card experience-card border-0 pb-4">
                  <div className="card-body p-1 p-md-5">
                    <h3 className="card-title text-center py-4">My Story</h3>
                    <p className="px-4 ms-md-4">In the summer of 2021 I ended my career as a teacher for over a decade to become a software engineer. It was a big and welcome change. I have always been interested in technology. As a kid, I remember my parents bringing home some magazines that taught how to program card games on MS-DOS (yeah, that was a while ago). I was instantly hooked with the “magic” of being able to see something come to life on a screen. Since then, I’ve found that I’ve always gravitated towards tech in other areas of my life, even before I started really learning a coding language.</p>
                    <p className="px-4 ms-md-4">As a teacher, one of my first positions was as a Media Specialist. My job was to run the library and teach technology courses to each elementary grade level. This paved the way for me to continue to always seek ways to incorporate educational tech in my lessons. When the pandemic hit and many of my colleagues were lamenting having to teach on a computer, I realized that being able to solve new problems and seek out ways to utilize technology more was something I enjoyed. That was my aha moment to take the leap into tech.</p>
                    <p className="px-4 ms-md-4">Since then I’ve had great opportunities to sharpen my skills as a frontend developer. After completing my bootcamp in April of 2022, I was hired as a contractor for a private art school to improve upon a custom React learning management system which handled attendance, class planning, student tracking, and evaluations. My most recent experience was also as a contractor at Philz Coffee, where I learned even more alongside talented senior developers by contributing to the frontend features for their new Ruby on Rails ecomm site.</p>
                    <p className="px-4 ms-md-4">When I’m not coding, I enjoy spending time with my family, gardening, finding some new project to work on, traveling, and exploring the outdoors in my beautiful home of California.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-lg-2 my-0">
              <div className="col-12 col-lg-6">
                <div className="education-card card border-0 h-100">
                  <div className="card-body p-4 p-md-5">
                    <h3 className="card-title text-center">Education</h3>
                    <ul className="card-text my-3">
                      <li>
                        <p className="mb-0">NuCamp Bootcamp</p>
                        <p className="education-dates mb-0">April 2022</p>
                        <p className="">Full Stack (MERN) Web & Mobile App Development</p>
                      </li>
                      <li>
                        <p className="mb-0">NuCamp Bootcamp</p>
                        <p className="education-dates mb-0">March 2022</p>
                        <p className="">Front End Web & Mobile App Development</p>
                      </li>
                      <li>
                        <p className="mb-0">San Jose State University</p>
                        <p className="">K-8 Mutliple Subject Teaching Credential</p>
                      </li>
                      <li>
                        <p className="mb-0">San Francisco State University</p>
                        <p className="">Bachelor of Arts in Art Education</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 my-sm-4 my-2 my-lg-0">
                <div className="fun-facts-card card border-0 h-100">
                  <div className="card-body p-4 p-md-5">
                    <h3 className="card-title text-center">Resume</h3>
                    <div className="w-75 m-auto">
                      <div style={{position: "relative", width: "100%", height: 0, paddingTop: "129.4118%",
                        paddingBottom: 48, marginTop:20, marginBottom:15, overflow: "hidden", borderRadius: 8, willChange: 'transform'}}>
                        <iframe loading="lazy" style={{position: "absolute",width: "100%",height: "100%",top: 0, left: 0,border: "none",padding: 0,margin: 0}} src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE7Pyirwg4&#x2F;view?embed" allowFullScreen="allowFullScreen" allow="fullscreen" aria-label="Sam's Resume"></iframe>
                      </div>
                      <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE7Pyirwg4&#x2F;view?utm_content=DAE7Pyirwg4&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener" aria-label="Sam's Resume"></a>
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
