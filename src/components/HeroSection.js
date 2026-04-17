import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Hello!</h1>
      <h2>I am a software developer with a Bachelor's degree in Computer Science.</h2>
      <h2>I mostly do web development and enjoy solving complex problems.</h2>
      <h2>I currently tutor kids at a math center called Mathnasium!</h2>

      <div className='hero-btns'>
        <a
          className='hero-btn hero-btn--full'
          href='https://valorantskintracker.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          My Latest Project
        </a>
        <div className='hero-btns-row'>
          <a
            className='hero-btn'
            href='https://github.com/orionmeng'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            className='hero-btn'
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
