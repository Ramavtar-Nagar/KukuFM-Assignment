"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselStyles from "./Carousel.module.css";
import MediaCard from "../Card/Card.component";

// MediaCarousel component to display a carousel of media items
const MediaCarousel = ({ slide }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  // Handle responsive slidesToShow based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1250) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };
    // Setting initial value
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: slidesToShow,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className={carouselStyles.carouselContainer}>
      {/* Carousel title */}
      <h2>{slide.title}</h2>

      <div className={carouselStyles.carouselInner}>
        {slide.shows ? (
          <>
            {/* Render carousel with shows */}
            <Slider {...settings} style={{ height: "100%" }}>
              {slide.shows.map((item, index) => (
                <div key={index} className={carouselStyles.carouselSlide}>
                  <MediaCard item={item} />
                </div>
              ))}
            </Slider>
          </>
        ) : (
          <>
            {/* Render carousel with slide items */}
            <Slider {...settings} style={{ height: "100%" }}>
              {slide.map((item, index) => (
                <div key={index} className={carouselStyles.carouselSlide}>
                  <MediaCard item={item} />
                </div>
              ))}
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default MediaCarousel;
