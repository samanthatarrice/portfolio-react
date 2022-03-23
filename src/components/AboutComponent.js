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
                    <p className="card-text my-3">React, React Native, React-Bootstrap, Javascript, jQuery, CSS, Boostrap, Sass, HTML, Git, Github, Figma, Adobe Creative Suite, VS Code</p>
                    <span><i className="fab fa-react m-2"></i><i className="fab fa-js-square m-2"></i><i className="fab fa-css3-alt m-2"></i><i className="fab fa-bootstrap m-2"></i><i className="fab fa-sass align-top pt-2 m-2"></i><i className="fab fa-gitkraken m-2"></i><i className="fab fa-figma m-2"></i></span>
                  </div>
                </div>
              </div>
              <div className="col-7 col-md-4 text-center mx-md-5 mb-4 mb-md-0">
                <img src="images/profile-side.jpg" alt="Sam's profile pic." className="sam-sitting w-100 rounded-circle"/>
              </div>
            </div>
            <div className="row my-2 my-sm-4 my-md-5">
              <div className="col">
                <div className="card experience-card border-0 pb-4">
                  <div className="card-body p-1 p-md-5">
                    <h3 className="card-title text-center py-4">My Story</h3>
                    <p className="px-4 ms-md-4">Last year I decided to leave my career as a teacher for ten years to pursue coding. I have always been interested in technology. As a kid, I remember my parents bringing home some magazines that taught how to program card games on MS-DOS (yes, I’m aging myself). I remember making those card games and loved the feeling of being able to actually see something I created come to life on the screen. Since then, I’ve found that I’ve always gravitated towards tech in other areas of my life, even before I started really learning a coding language.</p>
                    <p className="px-4 ms-md-4">As a studio art student at SFSU, I was able to explore this passion to create more and took courses in the Computer Integrated Arts department. We learned how to use technology as just another tool to create art, in particular how to create animations and websites and use the Adobe Creative Suite.</p> 
                    <p className="px-4 ms-md-4">As a teacher, one of my first positions was as a Media Specialist. My job was to run the library and teach library studies, and as the media specialist I also taught tech lessons to younger students. This gave me the chance to learn about the world of Educational Technology. I designed the curriculum based on the ISTE (International Standards for Technology in Education) and was able to find fun and engaging ways to include technology in my lessons in a way that enhanced student learning. Along the way I collaborated with and trained my colleagues. Last year, when the pandemic made us all teach from home, while most teachers were lamenting having to teach on a computer, it thrilled me to be able to find and create fun technology to teach online.</p>
                    <p className="px-4 ms-md-4">Since I have left teaching I have dedicated myself to learning web and app development full time through online resources and books, the bootcamp I completed, hackathons, and projects. As a former teacher, I know the value in always learning, and look forward to always striving to learn more as a software developer.</p>
                    {/* Took this out. Not enough about tech:
                    <h3 className="card-title text-center pb-3">Professional Experience</h3>
                    <ul className="experience-item card-text my-3 ps-3 ps-md-5">
                      <li className='fw-bold'>Aug 2017-June 2021: <span className="text-uppercase">First Grade Teacher</span> @ <a href="https://pasb.com.br/en/">Pan American School of Bahia (PASB)</a></li>
                      <p>My husband and I moved to Salvador, Bahia, Brazil to teach at PASB. While I finished my ten year career as a teacher here, I am so grateful to this school for the opportunities I gained. As a teacher I was responsible for teaching all subjects to a bilingual class. I developed curriculum on a daily basis on my own and with my team, and always sought out new and engaging ways to enhance my lessons. I integrated using technology wherever possible, especially during the pandemic when I spent the majority of my last year teaching online using tools such as Google apps and other various educational programs. I also helped with introducing educational robots with younger grade levels and training teachers on how to integrate them into their lessons. Being a team player and always striving to improve my skills are mindsets that help me grow as a developer as well.</p>
                    </ul>
                    <ul className="experience-item card-text my-3 ps-3 ps-md-5">
                      <li className='fw-bold'>Sept 2015-June 2017: <span className="text-uppercase">Third Grade Teacher</span> @ <a href="https://www.st-andrews.org/" target="_blank">Saint Andrew's School</a></li>
                      <p>I gained my first experiences as a classroom teacher at Saint Andrew's. Here I developed my skills as a teacher by attending multiple professional development workshops and conventions in order to learn best teaching practices. I also led an after school Minecraft club.</p>
                    </ul>
                    <ul className="experience-item card-text my-3 ps-3 ps-md-5">
                      <li className='fw-bold'>Aug 2012-Sept 2015: <span className="text-uppercase">Media Specialist</span> @ <a href="https://www.st-andrews.org/" target="_blank">Saint Andrew's School</a></li>
                      <p>As an elementary school Media Specialist I was responsible for managing the library and teaching weekly courses to all grade levels. In addition, I taught weekly technology lessons which I developed curriculum for based on ISTE (International Standards for Technology in Education) in collaboration with each grade level.</p>
                    </ul> */}
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
                        <p className="education-dates mb-0">To be completed on April 23 2022</p>
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
                        <iframe loading="lazy" style={{position: "absolute",width: "100%",height: "100%",top: 0, left: 0,border: "none",padding: 0,margin: 0}} src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE7Pyirwg4&#x2F;view?embed" allowFullScreen="allowFullScreen" allow="fullscreen"></iframe>
                      </div>
                      <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE7Pyirwg4&#x2F;view?utm_content=DAE7Pyirwg4&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
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