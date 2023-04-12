"use client";
import { Fragment, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import bgMission from "../../public/images/img13 1.png";
import NextArrow from "../../public/images/NextArrrow.png";
import PrevArrow from "../../public/images/PreviosArrow.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/MissionSlide.scss";

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow next-arrow">
      <Image src={NextArrow} alt="" onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow prev-arrow">
      <Image src={PrevArrow} alt="" onClick={onClick} />
    </div>
  );
}

export default function MissionSlide() {
  const images = [bgMission, bgMission, bgMission];

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSlideIndex(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full">
      <div className="slider">
        <Slider {...settings}>
          {images.map((image, idx) => (
            <div className="slide relative" key={idx}>
              <Image src={bgMission} alt="" className="w-full h-full" />
              <div className="absolute z-10 bottom-[10%] left-[10%] flex flex-col text-white font-bold [&>*]:mb-4">
                <h1 className="text-4xl">ĐIỂM DANH NHẬN QUÀ</h1>
                <span className="text-2xl">1000 Fpoint</span>
                <button className="border border-[#FF2423] bg-transparent border-b-4 w-fit px-8 py-1 hover:border-white hover:bg-white hover:text-black">
                  THAM GIA
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
