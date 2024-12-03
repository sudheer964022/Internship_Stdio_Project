// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Front-end/Header';
import Navbar from './Front-end/Navbar';
import Shop from './Front-end/Shop';
import ContactUs from './Front-end/ContactUs';
import Footer from './Front-end/Footer';
import Home from './Front-end/Home';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Router>
      <Header setSearchQuery={setSearchQuery} />
      <Navbar />
      <Routes>
      <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/Home" element={<Home searchQuery={searchQuery} />} />
        <Route path="/shop" element={<Shop searchQuery={searchQuery} />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
