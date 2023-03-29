"use client";
import { Fragment, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import VideoModal from "./VideoModal";

import gamer1 from "../../public/images/gamer1.jpg";
import gamer2 from "../../public/images/gamer2.jpg";
import gamer3 from "../../public/images/gamer3.jpg";
import VideoPlayIcon from "../../public/images/videoPlayIcon.png";
import NextArrow from "../../public/images/NextArrrow.png";
import PrevArrow from "../../public/images/PreviosArrow.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function VideosCarousel({ isMatchMD }) {
  const images = [gamer1, gamer2, gamer3, gamer1, gamer2, gamer3];

  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const settings = {
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: isMatchMD ? 1 : 3,
    slidesToScroll: isMatchMD ? 1 : 3,
    beforeChange: (current, next) => setSlideIndex(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full">
      <div className="slider">
        <Slider {...settings}>
          {images.map((img, index) => (
            <Fragment key={index}>
              <div className="slide relative">
                <Image
                  src={img}
                  alt=""
                  className="w-full h-full"
                  onClick={handleOpen}
                />
                <Image
                  src={VideoPlayIcon}
                  alt=""
                  className="absolute top-0 right-0 left-0 bottom-0 m-auto opacity-0 play-video"
                  onClick={handleOpen}
                />
              </div>
            </Fragment>
          ))}
        </Slider>
        <VideoModal open={open} handleClose={handleClose} />
      </div>
    </div>
  );
}
