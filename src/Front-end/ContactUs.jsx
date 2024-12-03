// Home.jsx
import React, { useEffect, useState } from 'react';

const ContactUs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating data fetch on component mount
    setTimeout(() => {
      setData(["Welcome to the Home Page!", "Here are some featured items...", "More content..."]);
    }, 1000);
  }, []);

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactUs;
