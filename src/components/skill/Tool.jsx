import React from 'react';

const Tool = () => {
  return (
    <div className="skill_content">
      <h3 className="skill_title">Other Tools</h3>

      <div className="skill_box">
        <div className="skill_group">
            <div className="skill_data">
            <i class="fa-brands fa-github"></i>

            <div>
              <h3 className="skill_name">Github</h3>
            </div>
            </div>

            <div className="skill_data">
            <i class="fa-brands fa-trello"></i>

            <div>
              <h3 className="skill_name">Trello</h3>
            </div>
            </div>
        </div>

        <div className="skill_group">
            <div className="skill_data">
            <i class="fa-brands fa-slack"></i>

            <div>
              <h3 className="skill_name">Slack</h3>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
