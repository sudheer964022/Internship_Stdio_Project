import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/index.css';

const Navbar = () => {
  const [allCategoriesOpen, setAllCategoriesOpen] = useState(false);
  const [mobilesSidebarOpen, setMobilesSidebarOpen] = useState(false);
  const [laptopsSidebarOpen, setLaptopsSidebarOpen] = useState(false);

  const toggleAllCategories = () => {
    setAllCategoriesOpen(!allCategoriesOpen);
  };

  const toggleMobilesSidebar = () => {
    setMobilesSidebarOpen(!mobilesSidebarOpen);
  };

  const toggleLaptopsSidebar = () => {
    setLaptopsSidebarOpen(!laptopsSidebarOpen);
  };

  return (
    <>
      <nav className="navbar_p">
        <ul>
          <li>
            <a href="#all-categories" onClick={toggleAllCategories}>&#9776; All Categories</a>
          </li>
          <li><a href="/Home">🏠︎Home</a></li>
          <li><Link to="/Shop">🛍️Shop</Link></li>
          <li><a href="#today-deals">🏷️Today Deals</a></li>
          <li><a href="#best-offers">🏷️Best Offers</a></li>
          <li><a href="#mobiles" onClick={toggleMobilesSidebar}>&#9776;📱Mobiles</a></li>
          <li><a href="#laptops" onClick={toggleLaptopsSidebar}>&#9776;💻Laptops</a></li>
          <li><Link to="/ContactUs">☎Contact Us</Link></li>
        </ul>
      </nav>

      {/* All Categories Sidebar */}
      <div className={`sidebar_123 all-categories ${allCategoriesOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <p>Trending</p><hr />
          <ul>
            <li><a href="#Best Sellers">Best Sellers</a></li>
            <li><a href="#Best Offers">Best Offers</a></li>
            <li><a href="#New Releases">New Releases</a></li>
          </ul>
          <hr />
          <p>Shop by Category</p>
          <hr />
          <ul>
            <li><a href="#Mobiles Computers">Mobiles, Computers</a></li>
            <li><a href="#Tv Appliances Electronics">Tv, Appliances, Electronics</a></li>
            <li><a href="#Men's Fashion">Men's Fashion</a></li>
            <li><a href="#Women's Fashion">Women's Fashion</a></li>
            <hr />
            <li><a href="#Home Kitchen Pets">Home, Kitchen, Pets</a></li>
            <li><a href="#Beauty Health Grocery">Beauty, Health, Grocery</a></li>
            <li><a href="#Sports Fitness Bags Luggage">Sports, Fitness, Bags, Luggage</a></li>
          </ul>
          <hr />
          <p>Digital Content and Devices</p>
          <hr />
          <ul>
            <li><a href="#Fire TV">Fire TV</a></li>
            <li><a href="#E-Readers">E-Readers & eBooks</a></li>
            <li><a href="#AudioBooks">AudioBooks</a></li>
            <li><a href="#Movies">Movies</a></li>
            <li><a href="#Music">Music</a></li>
          </ul>
          <hr />
        </div>
        <button className="close-btn_one" aria-label="Close All Categories Sidebar" onClick={toggleAllCategories}>&#10005;</button>
      </div>

      {/* Mobiles Sidebar */}
      <div className={`sidebar_123 mobiles-sidebar ${mobilesSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <p>Mobile Categories</p><hr />
          <ul>
            <li><a href="#Samsung">Samsung</a></li>
            <li><a href="#Apple">Apple</a></li>
            <li><a href="#Google">Google Pixel</a></li>
            <li><a href="#Vivo">Vivo</a></li>
            <li><a href="#Oppo">Oppo</a></li>
            <hr />
            <li><a href="#Nothing">Nothing</a></li>
            <li><a href="#OnePlus">OnePlus</a></li>
            <li><a href="#IQOO">IQOO</a></li>
            <li><a href="#Redmi">Redmi</a></li>
            <li><a href="#RealMe">RealMe</a></li>
            <hr />
            <li><a href="#Motorola">Motorola</a></li>
            <li><a href="#POCO">POCO</a></li>
            <li><a href="#Nokia">Nokia</a></li>
            <li><a href="#Infinix">Infinix</a></li>
            <li><a href="#Honor">Honor</a></li>
            <hr />
          </ul>
        </div>
        <button className="close-btn_one" aria-label="Close Mobiles Sidebar" onClick={toggleMobilesSidebar}>&#10005;</button>
      </div>

      {/* Laptops Sidebar */}
      <div className={`sidebar_123 laptops-sidebar ${laptopsSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <p>Laptops Categories</p><hr />
          <ul>
            <li><a href="#Apple">Apple</a></li>
            <li><a href="#Dell">Dell</a></li>
            <li><a href="#Lenovo">Lenovo</a></li>
            <li><a href="#Asus">Asus Vivobook</a></li>
            <li><a href="#Honor">Honor</a></li>
            <hr />
            <li><a href="#HP">HP</a></li>
            <li><a href="#Acer">Acer</a></li>
            <li><a href="#MSI">MSI</a></li>
            <li><a href="#Redmi">Redmi</a></li>
            <hr />
            <li><a href="#RealMe">RealMe</a></li>
            <li><a href="#Samsung">Samsung</a></li>
            <li><a href="#LG">LG</a></li>
            <li><a href="#Microsoft">Microsoft</a></li>
          </ul>
          <hr />
        </div>
        <button className="close-btn_one" aria-label="Close Laptops Sidebar" onClick={toggleLaptopsSidebar}>&#10005;</button>
      </div>

      {/* Overlay */}
      <div className={`overlay ${allCategoriesOpen || mobilesSidebarOpen || laptopsSidebarOpen ? 'visible' : ''}`} onClick={() => { setAllCategoriesOpen(false); setMobilesSidebarOpen(false); setLaptopsSidebarOpen(false); }}></div>
    </>
  );
};

export default Navbar;
