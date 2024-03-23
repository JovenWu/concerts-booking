import React from "react";
import background from "../assets/Background.jpeg";
import Carousel from "./Carousel";

function Hero() {

  return (
    <div
      className="w-full h-screen relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/35"></div>
      <div className="absolute h-full w-full items-center px-4 flex justify-center flex-col">
      <Carousel />
      </div>
    </div>
  );
}


export default Hero;
