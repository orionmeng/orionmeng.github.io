import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Orion Meng
            </Link>
          </div>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='https://www.instagram.com/orionmeng/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link'
              href='https://www.youtube.com/channel/UCDy5Acy23gk7ITjBz3uibOQ'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>
            <a
              className='social-icon-link'
              href='https://x.com/onionTFT'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link'
              href='https://www.linkedin.com/in/orionmeng/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
