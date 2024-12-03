import React from 'react';
import './styles/index.css'; // Assuming you have a CSS file for styling

const Header = ({ setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <header className="header">
      <div className="left-icon">
        <img src="/imgs/rb_2148956809.png" alt="Left Cart Icon" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Products" onChange={handleSearchChange}/>
        <button className="search-button">
          <img src="/imgs/search.png" alt="Search" />
        </button>
      </div>
      <div className="right-icon">
        <a href='#Add To Cart'><img src="/imgs/cart.png" alt="Right Cart Icon" /></a>
      </div>
    </header>
  );
};

export default Header;
