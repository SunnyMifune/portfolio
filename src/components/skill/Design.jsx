import React from 'react';

const Design = () => {
  return (
    <div className="skill_content">
      <h3 className="skill_title">Design</h3>

      <div className="skill_box">
        <div className="skill_group">
            <div className="skill_data">
            <i class="fa-brands fa-figma"></i>

            <div>
              <h3 className="skill_name">Figma</h3>
            </div>
            </div>

            <div className="skill_data">
            <i class="devicon-photoshop-plain skills__devicon"></i>

            <div>
              <h3 className="skill_name">Photoshop</h3>
            </div>
            </div>
        </div>

        <div className="skill_group">
            <div className="skill_data">
            <i class="devicon-illustrator-plain skills__devicon"></i>

            <div>
              <h3 className="skill_name">Illustrator</h3>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
