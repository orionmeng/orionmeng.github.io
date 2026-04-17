import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import './Other.css';

function Other() {
  return (
    <>
      <div className='other-hero'>
        <video src='/videos/space.mp4' autoPlay loop muted />
        <h1>Check out some of my hobbies!</h1>
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default Other;
