import React from 'react';
import './styles/index.css';

const CardComponent = ({ title, text, imageUrl, price, rating }) => {
  // Truncate text to 65 characters with ellipsis
  const truncateText = (text) => {
    return text.length > 65 ? `${text.substring(0, 65)}...` : text;
  };

  // Generate stars based on rating
  const generateStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 !== 0; // Check if there is a half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Calculate empty stars

    // Create an array of star elements
    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fa fa-star" style={{ color: 'gold' }}></i>);
    }

    // Add half star if present
    if (hasHalfStar) {
      stars.push(<i key="half" className="fa fa-star-half-full" style={{ color: 'gold' }}></i>);
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="fa fa-star" style={{ color: 'lightgray' }}></i>);
    }

    return <>{stars}</>; // Return stars as React elements
  };

  return (
    <div className="card_one">
      <img src={imageUrl} alt="Card placeholder" className="card-img-top" />
      <hr />
      <div className="card-body_one">
        <div className="card-rating">{generateStars(rating)}</div>
        <h5 className="card-title">{title}</h5>
        <p className="card-price">Price: ₹{price}</p>
        <p className="card-text">{truncateText(text)}</p>
        <button className="btn-primary_one">Show More Details</button>
      </div>
    </div>
  );
};

export default CardComponent;
