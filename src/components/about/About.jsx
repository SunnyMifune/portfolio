import React from 'react';
import "./about.css";
import Image from "../../assets/selfie.jpg";
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
            I am Sunny Mifune, web developer from Taipei, Taiwan. My interest is listen to classical music and play the violin.
            Also, I have experience in web site design and backend develope.
            </p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                {/* <h3 className="skills_name">Development</h3>
                <span className="skills_number">90%</span> */}
              </div>

              <div className="skills_bar">
                <span className="skills_percentage"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                {/* <h3 className="skills_name">UI/UX design</h3>
                <span className="skills_number">80%</span> */}
              </div>

              <div className="skills_bar">
                {/* <span className="skills_percentage ui_design"></span> */}
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                {/* <h3 className="skills_name">Photography</h3>
                <span className="skills_number">60%</span> */}
              </div>

              <div className="skills_bar">
                {/* <span className="skills_percentage photography"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default About
