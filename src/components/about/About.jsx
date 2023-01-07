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
            I was born and grew up in Taiwan. I love classical music and began violin study since 6 years old. Also, I have joined the Taipei civic symphony orchestra for 9 years!
            I’m self-motivated, mature, and have a strong sense of responsibility with a positive working attitude.
            I have an MBA degree from Soochow University, and now came to Tokyo to learn web development and want to have experience in developer position.
            </p>
            <a href="" className="btn-about">Download CV</a>
          </div>
          {/* <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Development</h3>
                <span className="skills_number">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">UI/UX design</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Photography</h3>
                <span className="skills_number">60%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage photography"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default About
