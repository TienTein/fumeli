"use client";
import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import NextArrow from "../../public/images/NextArrrow.png";
import PrevArrow from "../../public/images/PreviosArrow.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow({ onClick }) {
  return (
    <div className="w-fit arrow right-48">
      <Image src={NextArrow} alt="" onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="w-fit arrow right-60">
      <Image src={PrevArrow} alt="" onClick={onClick} />
    </div>
  );
}

export default function VideosCarousel() {
  const videos = [
    "https://www.youtube.com/embed/sk1Z-Hqwwog",
    "https://www.youtube.com/embed/MRAisVL4K7Q",
    "https://www.youtube.com/embed/b3GCfyNKeLs",
    "https://www.youtube.com/embed/sk1Z-Hqwwog",
    "https://www.youtube.com/embed/MRAisVL4K7Q",
    "https://www.youtube.com/embed/b3GCfyNKeLs",
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (current, next) => setSlideIndex(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container">
      <div className="slider">
        <Slider {...settings}>
          {videos.map((vid, index) => (
            <div className="slide" key={index}>
              <iframe src={vid}></iframe>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
