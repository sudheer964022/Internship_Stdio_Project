import React from 'react';
import './styles/index.css';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const MyCarousel = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/shop'); // Make sure the route matches your Router setup
  };

  return (
    <div className="mob">
      {/* First Carousel */}
      <Carousel className="carousel">
        {['123.jpg', '234.jpg', '321.jpg', '5050.jpg', '5051.jpg', '5052.jpg', '5053.jpg'].map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={`imgs/Mobiles/${img}`} // Use template string for dynamic image path
              alt={`Slide ${index + 1}`}
              style={{ height: 'auto', width: '100%', objectFit: 'cover' }}
              onClick={handleImageClick} // Add onClick handler
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Second Carousel */}
      <Carousel className="carousel">
        {['lp1.gif', 'lp2.gif', 'lp3.gif', 'lp4.gif', 'lp5.gif', 'lp6.gif', 'lp7.gif'].map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={`imgs/Mobiles/${img}`} // Use template string for dynamic image path
              alt={`Slide ${index + 1}`}
              style={{ height: 'auto', width: '95%', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {/* third carousel */}
      <Carousel className="carousel">
        {['lp1.gif', 'lp2.gif', 'lp3.gif', 'lp4.gif', 'lp5.gif', 'lp6.gif', 'lp7.gif'].map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={`imgs/Mobiles/${img}`} // Use template string for dynamic image path
              alt={`Slide ${index + 1}`}
              style={{ height: 'auto', width: '95%', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
