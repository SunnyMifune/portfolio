import React from 'react';

const Backend = () => {
  return (
    <div className="skill_content">
      <h3 className="skill_title">Backend</h3>

      <div className="skill_box">
        <div className="skill_group">
            <div className="skill_data">
            <i class="devicon-ruby-plain skill__devicon"></i>

            <div>
              <h3 className="skill_name">Ruby</h3>
            </div>
            </div>

            <div className="skill_data">
            <i class="devicon-rails-plain skills__devicon"></i>

            <div>
              <h3 className="skill_name">Rails</h3>
            </div>
            </div>
        </div>

        <div className="skill_group">
            <div className="skill_data">
            <i class="fa-brands fa-python"></i>

            <div>
              <h3 className="skill_name">Python</h3>
            </div>
            </div>

            <div className="skill_data">
            <i class="devicon-mysql-plain skills__devicon"></i>

            <div>
              <h3 className="skill_name">MySQL</h3>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
