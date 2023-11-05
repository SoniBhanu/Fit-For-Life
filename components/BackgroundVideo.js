import React from "react";
import video from '../styles/Home.module.css'

const BackgroundVideo = () => {
  return (
    <div className={video}>
      {/* <video autoPlay loop muted>
        <source src="background.mp4" type="video/mp4" />
        <div class="video-text">
          <h1>Wrapped Text</h1>

        </div>
      </video> */}

      <video autoPlay loop muted>
        <source src="background.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
        }}
      >
        <div>
          <a
            href="/home"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 rounded-full"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
