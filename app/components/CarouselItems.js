"use client";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import bgCarousel from "../../public/images/img13 1.png";
import ImageItem1 from "../../public/images/image 19.png";
import ImageItem2 from "../../public/images/image 20.png";
import ImageItem3 from "../../public/images/image 21.png";
import NextArrow from "../../public/images/NextArrrow.png";
import PrevArrow from "../../public/images/PreviosArrow.png";
import { useMediaQuery, useTheme } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-next">
      <Image src={NextArrow} alt="" onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-prev">
      <Image src={PrevArrow} alt="" onClick={onClick} />
    </div>
  );
}

export default function AsNavFor() {
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    ImageItem2,
    ImageItem3,
    ImageItem1,
    ImageItem2,
    ImageItem3,
    ImageItem1,
  ];

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    slidesToShow: isMatchMD ? 1 : 3,
    centerMode: true,
    beforeChange: (current, next) => {
      if (nav1) {
        nav1.slickGoTo(next);
      }
      setSlideIndex(next);
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider asNavFor={nav2} ref={slider1}>
        {images.map((img, index) => (
          <Image
            src={bgCarousel}
            alt=""
            className="w-full h-[80vh] object-cover"
            key={index}
          />
        ))}
      </Slider>

      <div className="slider mx-auto">
        <Slider asNavFor={nav1} ref={slider2} {...settings}>
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
