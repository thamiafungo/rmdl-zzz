import { useEffect, useState } from "react";
import "./Slider.css";

const images = [
  "https://www.ikea.com/global/en/images/PH_202780_d8dc65c792.jpg",
  "https://www.ikea.com/images/ikeas-complete-living-room-solution-featuring-hammarn-sofa-b-a110b28cb0c263321c28f8d927d4d6ae.jpg?f=xl",
  "https://www.ikea.com/ext/ingkadam/m/1f2c821e16eb874f/original/PH199295.jpg?f=xl",
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        className="slider-image"
      />
      <div className="slider-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
