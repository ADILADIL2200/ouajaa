// components/Slider.js
'use client'
import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: '/images/slide1.jpg', // Replace with your image path
    description: 'Learn Web Development with Modern Tools and Techniques!',
  },
  {
    id: 2,
    image: '/images/slide2.jpg', // Replace with your image path
    description: 'Become a React Expert and Build Real-World Applications!',
  },
  {
    id: 3,
    image: '/images/slide3.jpg', // Replace with your image path
    description: 'Explore Python Programming and Automate Your Workflow!',
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <p className="text-orange-300 text-2xl md:text-4xl font-bold max-w-[70%] text-center p-4">
          {slides[currentSlide].description}
        </p>
      </div>
    </div>
  );
}
