import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = ({ theme }) => {
  return (
    <div className={`about-us ${theme}`}>
      <h1>About Us</h1>
      <p>Welcome to the Inventory Management System. Our mission is to provide...</p>
      <div className="team">
        <div className="team-member">
          <img src="team_member_image1.jpg" alt="Team Member 1" />
          <p>Team Member 1</p>
          <div className="social-media">
            <a href="https://twitter.com/team_member_1" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com/in/team_member_1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="team-member">
          <img src="team_member_image2.jpg" alt="Team Member 2" />
          <p>Team Member 2</p>
          <div className="social-media">
            <a href="https://twitter.com/team_member_2" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com/in/team_member_2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
