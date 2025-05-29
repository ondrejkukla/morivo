import React from 'react';
import teamImage from '../../assets/team.png';
import './TeamPhoto.css';

function TeamPhoto() {
  return (
    <section className="team-photo-section">
      <div className="team-photo-container">
        <img 
          src={teamImage} 
          alt="Our Team" 
          className="team-photo-image"
        />
      </div>
    </section>
  );
}

export default TeamPhoto; 