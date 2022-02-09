//HERO SECTION

//IMPORTING
import React from 'react';
import '../App.css';
import './HeroSection.css';

//FUNCTION HEROSECTION
function HeroSection() {
  return (
    <div className='hero-container' id='home'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>TECNOLOGIA DA INFORMAÇÃO</h1>
      <p>Conheça nossas soluções em TI</p>
      <div className='hero-btns'>
        <a class='btns btn--outline btn--large' href='#services'>
          CONHECER
        </a>
        <a class='btns btn--primary btn--large btn-right' href='#footer'>
          NEWSLETTER
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
