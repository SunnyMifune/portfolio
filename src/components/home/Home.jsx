import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDowm from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Sunny Mifune</h1>
        <span className="home_education">I'm a Front-End developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDowm />
      </div>

      <Shapes />
    </section>
  )
}

export default Home
