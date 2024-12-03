import React, { useState, useEffect, useRef } from 'react';
import CardComponent from './CardComponent';

const Home = ({ searchQuery, priceQuery }) => {
  const [filteredCards, setFilteredCards] = useState([]);

  const cardData = useRef([
    {
      
      title: 'Redmi Note 13 5G',
      text: 'Chromatic Purple, 6GB RAM, 128GB Storage, 6.67" FHD+ pOLED Display',
      price: '16,000',
      imageUrl: 'https://m.media-amazon.com/images/I/71VW8LmqqPL._SL1500_.jpg',
      rating:4,
    },
    {
      title: 'Samsung Galaxy S24',
      text: 'Amber Yellow, 8GB RAM, 128GB Storage, 5G AI Smartphone',
      price: '58,799',
      imageUrl: 'https://m.media-amazon.com/images/I/617rH1xpQTL._SL1500_.jpg',
      rating:3.5,
    },
    {
      title: 'Realme GT 6T 5G',
      text: 'Fluid Silver, 8GB RAM, 128GB Storage, 5500mAh+120W',
      price: '30,998',
      imageUrl: 'https://m.media-amazon.com/images/I/61HyiMlCuTL._SL1500_.jpg',
      rating:4,
    },
    {
      title: 'HONOR 200 5G',
      text: 'Black & White, 8GB RAM, 256GB Storage, 50MP AI-Powered Camera',
      price: '34,998',
      imageUrl: 'https://m.media-amazon.com/images/I/71yVqjq0aeL._SL1500_.jpg',
      rating:3,
    },
    {
      title: 'Redmi Note 13 5G',
      text: 'Arctic White, 6GB RAM, 128GB Storage) | 5G Ready',
      price: '15,999',
      imageUrl: 'https://m.media-amazon.com/images/I/71VW8LmqqPL._SL1500_.jpg',
      rating:3.5,
    },
    {
      title: 'Redmi 13 5G',
      text: 'Orchid Pink, 6GB+128GB | India Debut SD 4 Gen 2 AE',
      price: '12,499',
      imageUrl: 'https://m.media-amazon.com/images/I/81Q9jpYOFdL._SL1500_.jpg',
      rating:4,
    },
    {
      title: 'Redmi 13C 5G',
      text: 'Starlight Black, 4GB RAM, 128GB Storage) | MediaTek Dimensity 6100+ 5G',
      price: '8,749',
      imageUrl: 'https://m.media-amazon.com/images/I/81nMsYgIHdL._SL1500_.jpg',
      rating:4.5,
    },
    {
      title: 'Samsung Galaxy A35 5G',
      text: 'Awesome Lilac, 8GB RAM, 128GB Storage | 50 MP Main Camera (OIS)',
      price: '25,999',
      imageUrl: 'https://m.media-amazon.com/images/I/71picrEy4YL._SL1500_.jpg',
      rating:4,
    },
    {
      title: 'Samsung Galaxy M55S 5G',
      text: 'Coral Green,8GB RAM,128GB Storage | 50MP Triple Cam| 5000mAh Battery',
      price: '17,999',
      imageUrl: 'https://m.media-amazon.com/images/I/818pYqcA7BL._SL1500_.jpg',
      rating:4.5,
    },
    {
      title: 'Samsung Galaxy S23 Ultra 5G',
      text: 'Green, 12GB, 256GB Storage 200MP Camera|Snapdragon 8 Gen 2 ',
      price: '74,999',
      imageUrl: 'https://m.media-amazon.com/images/I/71lD7eGdW-L._SL1500_.jpg',
      rating:4.5,
    },
    {
      title: 'Xiaomi 14',
      text: 'Black, 12GB RAM, 512GB Storage | 50MP Leica',
      price: '45,999',
      imageUrl: 'https://m.media-amazon.com/images/I/714PYaZXuiL._SL1500_.jpg',
      rating:4.5,
    },
    {
      title: 'Xiaomi 14',
      text: 'Jade Green, 12GB RAM, 512GB Storage | 50MP Leica',
      price: '45,999',
      imageUrl: 'https://m.media-amazon.com/images/I/71MsYJjQhBL._SL1500_.jpg',
      rating:4.5,
    },
    {
      title: 'Xiaomi 14',
      text: 'White, 12GB RAM, 512GB Storage | 50MP Leica',
      price: '45,999',
      imageUrl: 'https://m.media-amazon.com/images/I/711SMo2bL4L._SL1500_.jpg',
      rating:4.5,
    },
    {
      title: 'iQOO Z9s 5G',
      text: 'Onyx Green, 12GB RAM, 256GB Storage |3D Curved AMOLED Display',
      price: '23,999',
      imageUrl: 'https://m.media-amazon.com/images/I/61nO5YRaAxL._SL1200_.jpg',
      rating:4,
    },
    {
      title: 'iQOO Z9s 5G',
      text: 'Titanium Matte, 12GB RAM, 256GB Storage |3D Curved AMOLED Display',
      price: '23,999',
      imageUrl: 'https://m.media-amazon.com/images/I/61BxKJrnbdL._SL1200_.jpg',
      rating:4,
    },
    {
      title: 'iQOO Z9s Pro 5G',
      text: 'Flamboyant Orange, 12GB RAM, 256GB Storage| Curved AMOLED Display with 4500 nits',
      price: '28,999',
      imageUrl: 'https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1724148007652/6cd870dac9cf3dc260b5aced24e8ba08.png.webp',
      rating:4,
    },
    {
      title: 'iQOO Z9 5G',
      text: 'Brushed Green, 8GB RAM, 128GB Storage|Dimensity 7200 5G Processor',
      price: '28,999',
      imageUrl: 'https://m.media-amazon.com/images/I/61pt59LW-lL._SL1200_.jpg',
      rating:4,
    },
    {
      title: 'iQOO Z9 Lite 5G',
      text: 'Mocha Brown, 6GB RAM, 128GB Storage|Dimensity 6300 5G|50MP Sony AI Camera',
      price: '11,499',
      imageUrl: 'https://m.media-amazon.com/images/I/619VJYWIbXL._SL1200_.jpg',
      rating:4.5,
    },
    {
      title: 'Apple iPhone 16 Pro',
      text: 'White Titanium, 128GB Storage|48MP Fusion Camera',
      price: '1,19,900',
      imageUrl: 'https://m.media-amazon.com/images/I/61xJlx-3KDL._SL1500_.jpg',
      rating:5,
    },
    {
      title: 'Apple iPhone 16 Pro Max',
      text: 'Desert Titanium 128GB Storage |48MP Fusion camera',
      price: '1,44,900',
      imageUrl: 'https://m.media-amazon.com/images/I/61giwQtR1qL._SL1500_.jpg',
      rating:5,
    },
    {
      title: 'OnePlus Nord CE4 Lite 5G',
      text: 'Super Silver, 8GB RAM, 128GB Storage|5,500 mAh battery',
      price: '19,999',
      imageUrl: 'https://m.media-amazon.com/images/I/61Io5-ojWUL._SL1500_.jpg',
      rating:4.5,
    },
    {
      title: 'OnePlus Nord CE4 Lite 5G',
      text: 'Ultra Orange, 8GB RAM, 128GB Storage|5,500 mAh battery',
      price: '19,999',
      imageUrl: 'https://m.media-amazon.com/images/I/51KJE22BKrL._SL1000_.jpg',
      rating:4.5,
    },
    {
      title: 'OnePlus_12R',
      text: 'Sunset Dune, 8GB RAM, 256GB Storage|Snapdragon 8 Gen 2',
      price: '37,999',
      imageUrl: 'https://m.media-amazon.com/images/I/71c3EH8FoWL._SL1500_.jpg',
      rating:4.5,
    },
    {
      title: 'OnePlus Nord 4 5G',
      text: 'Mercurial Silver, 8GB RAM, 256GB Storage|5500mAh battery',
      price: '29,999',
      imageUrl: 'https://m.media-amazon.com/images/I/61JOYUJbhcL._SL1500_.jpg',
      rating:4.5,
    },
  ]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = cardData.current.filter((card) => {
        const titleMatch = card.title.toLowerCase().includes(searchQuery.toLowerCase());
        const textMatch = card.text.toLowerCase().includes(searchQuery.toLowerCase());

        const cardPrice = parseFloat(card.price.replace(/,/g, ''));
        let priceMatch = true; // Default to true if priceQuery is not provided
        if (priceQuery) {
          const priceRange = priceQuery.split(',').map(price => parseFloat(price.trim()));
          const minPrice = priceRange[0] || 0;
          const maxPrice = priceRange[1] || Infinity;

          priceMatch = cardPrice >= minPrice && cardPrice <= maxPrice;
        }

        return (titleMatch || textMatch) && priceMatch;
      });
      setFilteredCards(filtered);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, priceQuery]);

  return (
    <div className="card-container">
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => (
          <CardComponent
            key={index}
            rating={card.rating}
            title={card.title}
            text={card.text}
            price={card.price}
            imageUrl={card.imageUrl}
          />
        ))
      ) : (
        <p>Featching (or) No Products found matching your search.</p>
      )}
    </div>
  );
};

export default Home;
