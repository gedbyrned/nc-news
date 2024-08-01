import React from 'react';
import logo from '../snowdonia.jpg'; 
import '../index.css'; 

const Home = () => {
  return (
    <div>
      <h1>Welcome to GB's NC News!</h1>
      <p>Please use the Navigation bar above to view all articles, alternatively you can browse by topic.</p>
      <br />
      <a 
        href="linkedin.com/in/gerard-byrne-b0b731149" 
        target="_blank" 
        rel="noopener noreferrer"
        className="logo-link"
      >
        <img 
          src={logo} // Use the imported image
          className="img-fluid" 
          alt="lrg" 
        />
      </a>
    </div>
  );
};

export default Home;

