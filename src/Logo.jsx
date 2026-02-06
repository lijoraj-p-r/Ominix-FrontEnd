import React from 'react';
import { useNavigate } from 'react-router-dom';
//import logo from './assets/image.png'; // Import the image
import logo from './image.png'; // Import the image
import './assets/styles.css'; // Import external CSS

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div className="logo-container" onClick={() => navigate('/customerhome')}>
      <img
        src={logo} // Use the imported image
        alt="SalesSavvy Logo"
        className="logo-image" // Updated class name
        onError={(e) => { e.target.src = 'SALESSAVVYFrontEnd-main\src\assets\ominix1_1.jpg'; }} // Fallback for image error
      />
      <span className="logo-text">Omnix</span>
    </div>
  );
}
