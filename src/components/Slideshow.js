// src/components/Slideshow.js

import React from 'react';
import Slider from 'react-slick';

const Slideshow = () => {
  // Example data for slides
  const slides = [
    {
      id: 1,
      img: 'https://via.placeholder.com/800x400.png?text=Slide+1',
      title: 'Explore Our Albums',
      description: 'Discover a wide range of albums to store your precious memories.',
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/800x400.png?text=Slide+2',
      title: 'Share Your Moments',
      description: 'Easily share your favorite moments with friends and family.',
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/800x400.png?text=Slide+3',
      title: 'Manage Photos Efficiently',
      description: 'Organize your photos seamlessly with our user-friendly interface.',
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/800x400.png?text=Slide+4',
      title: 'Secure and Private',
      description: 'Your data is safe with us. Enjoy secure access to your albums.',
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="my-8">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="flex flex-col items-center justify-center h-64">
            <img src={slide.img} alt={`Slide ${slide.id}`} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{slide.title}</h3>
              <p className="text-md">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
