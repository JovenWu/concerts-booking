import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import IU from "../assets/IU.jpg";
import BrunoMars from "../assets/BrunoMars.jpg";
import ITZY from "../assets/ITZY.jpg";
import Baekhyun from "../assets/Baekhyun.jpg";
import DeepPurple from "../assets/DeepPurple.jpg";
import ImeeOoiaandJSJG from "../assets/ImeeOoiandJSJG.jpg";
import { useState } from "react";
import Modal from "./Modal";

function Carousel() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="absolute h-full w-full items-center px-4 flex justify-center flex-col">
      <div className="w-3/4 m-auto">
        <div className="mt-28">
          <h1 className="text-white text-2xl md:4xl font-bold mb-4">
            Available Concert
          </h1>
          <Slider {...settings}>
            {concertList.map((d) => (
              <div className="bg-black/50 rounded-xl" key={d.name}>
                <div className="flex justify-center items-center">
                  <img
                    src={d.img}
                    alt="musician"
                    className="w-[266px] h-[171px] object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center rounded-b-xl gap-2 px-4">
                  <p className="text-[#ebecf0] font-medium">{d.name}</p>
                  <p className="text-[#C7C6C1]">{d.desc}</p>
                  <p className="text-[#C7C6C1]">{d.location}</p>
                  <button onClick={openModal}className="px-4 mb-4 bg-white rounded-xl font-bold hover:bg-white/80 text-[#333333]">
                    Book Now!
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Modal showModal={showModal} closeModal={closeModal}/>
    </div>
  );
}

export default Carousel;

const concertList = [
  {
    name: "IU",
    img: IU,
    desc: "Sun, Apr 21 5:00 PM",
    location: "Singapore Indoor Stadium",
  },
  {
    name: "Bruno Mars",
    img: BrunoMars,
    desc: "Fri, Apr 05 8:00 PM",
    location: "Singapore National Stadium",
  },
  {
    name: "Baekhyun",
    img: Baekhyun,
    desc: "Thu, Mar 28 8:00PM",
    location: "Resorts World Ballroom",
  },
  {
    name: "ITZY",
    img: ITZY,
    desc: "Sat, Apr 06 6:00PM",
    location: "Singapore Indoor Stadium",
  },
  {
    name: "Deep Purple",
    img: DeepPurple,
    desc: "Wed, May 01 8:00PM",
    location: "Fort Canning Park",
  },
  {
    name: "Imee Ooi and JSJG",
    img: ImeeOoiaandJSJG,
    desc: "Tue, Apr 30 8:00PM",
    location: "Captiol Theater - Singapore",
  },
];
