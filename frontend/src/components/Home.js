  import React, { useEffect } from 'react';
  import '../styles/Home.css'; // Import CSS file for styling
  import darkImage from '../assests/darkhome.png';
  import lightImage from '../assests/lighthome.png';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  const Home = ({ theme }) => {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

    return (
      <div className={`home-container ${theme}`}>
        <div className="parallax-bg"></div>
        <div className="image-container">
          <img 
            src={theme === 'light' ? lightImage : darkImage} 
            alt="Inventory Management" 
            className="home-image"
          />
          {theme === 'dark' && <div className="image-overlay"></div>}
        </div>
        <div className="text-container" data-aos="fade-up">
          <h1>Inventory Management System</h1>
          <p>Manage your inventory with ease and efficiency.</p>
          <p>Track stock levels, orders, sales, and deliveries in real time.</p>
          <p>Optimize your supply chain and reduce costs.</p>
        </div>
                              
      </div>
      
    );
  };

  export default Home;
