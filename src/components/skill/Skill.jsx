import React from 'react';
import "./skill.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Design from "./Design";
import Tool from "./Tool";

const Skill = () => {
  return (
    <section className="skill container section" id='skill'>
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">Languages and tools I use</span>

      <div className="skill_container container grid">
        <Frontend />
        <Backend />
        <Design />
        <Tool />
      </div>
    </section>
  )
}

export default Skill
