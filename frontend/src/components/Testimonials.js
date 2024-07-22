import React, { useState } from 'react';
import '../styles/Testimonials.css';

const testimonialsData = [
  { name: "Customer A", comment: "This system has greatly improved our efficiency!" },
  { name: "Customer B", comment: "User-friendly and reliable." },
  { name: "Customer C", comment: "Excellent customer service and support." }
];

const Testimonials = ({ theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className={`testimonials ${theme}`}>
      <h1>Testimonials</h1>
      <div className="testimonial">
        <p>"{testimonialsData[currentIndex].comment}" - {testimonialsData[currentIndex].name}</p>
      </div>
      <div className="testimonial-nav">
        <button onClick={prevTestimonial}>Previous</button>
        <button onClick={nextTestimonial}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
