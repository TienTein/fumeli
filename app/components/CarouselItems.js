"use client";

import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ImageItem1 from "../../public/images/image 19.png";
import ImageItem2 from "../../public/images/image 20.png";
import ImageItem3 from "../../public/images/image 21.png";
import NextArrow from "../../public/images/NextArrrow.png";
import PrevArrow from "../../public/images/PreviosArrow.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow({ onClick }) {
  return (
    <div className="w-fit arrow -right-[6rem]">
      <Image src={NextArrow} alt="" onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="w-fit arrow -right-10">
      <Image src={PrevArrow} alt="" onClick={onClick} />
    </div>
  );
}

export default function CarouselSlide() {
  const images = [
    ImageItem2,
    ImageItem3,
    ImageItem1,
    ImageItem2,
    ImageItem3,
    ImageItem1,
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container absolute top-0 left-0 z-10">
      <div className="slider mx-auto">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div
              className={index === slideIndex ? "slide slide-active" : "slide"}
              key={index}
            >
              <Image src={img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
