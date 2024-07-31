import React from 'react';

const Header = () => {
  return (
    <header className="bg-danger text-white p-1 mb-1">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img 
            src="https://pbs.twimg.com/profile_images/1333392601450426370/x_DT51WI_400x400.jpg" 
            className="img-fluid" 
            alt="Smaller image" 
            style={{ height: '50px', width: '50px', objectFit: 'cover', marginRight: '10px' }} 
          />
          <h1 className="m-0" style={{ fontSize: '2rem' }}>GB's NC News</h1>
        </div>
        <h2 className="ml-auto m-0 small">Logged in: jessjelly</h2>
      </div>
    </header>
  );
};

export default Header;
