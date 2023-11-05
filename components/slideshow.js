import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  //Array of Images
  const images = [
    "home.jpg",
    "Image1.jpg",
    "Image2.jpg",
    "Image3.jpg",
    "Image4.jpg",
    "Image5.jpg",
  ];

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
  };
  return (
    <div className="m-10">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center w-full h-full">
            <img
              className="w-3/4 object-cover rounded-lg shadow-xl"
              src={each}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
