import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import '../Main/Slider.css';
import { MdSwipeRight } from "react-icons/md";

const ImageSlider = ({ image }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + image.length) % image.length
    );
  };

  return (
    <div className="slider-container">
      
      <FaArrowLeft className="slider-button left"onClick={prevSlide}/>
      
      <div className="slider-image-wrapper">
        <img
          src={image[currentIndex]}
          
          className="slider-image"
        />
      </div>
      
      <FaArrowRight className="slider-button right"onClick={nextSlide}/>
    </div>
  );
};

export default ImageSlider;
