"use client";
import React, { useState } from "react";
import Image from "next/image";
import miniGamesBg from "../../public/images/minigamebg.png";
import ImageItem1 from "../../public/images/image 4.png";
import ImageItem2 from "../../public/images/image 5.png";
import ImageItem3 from "../../public/images/image 6.png";
import topAva from "../../public/images/topavater.png";
import Link from "next/link";
import GLPagination from "./GLPagination";
import { useMediaQuery, useTheme } from "@mui/material";

export default function MiniGames() {
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const datas = [
    {
      image: topAva,
      name: "maitrang212",
      point: 87200,
    },
    {
      image: topAva,
      name: "dnhathuy688",
      point: 90900,
    },
    {
      image: topAva,
      name: "phuongthuy272",
      point: 100200,
    },
    {
      image: topAva,
      name: "haihai272",
      point: 500,
    },
    {
      image: topAva,
      name: "ngoquyen112",
      point: 60200,
    },
    {
      image: topAva,
      name: "enyyen322",
      point: 10200,
    },
    {
      image: topAva,
      name: "benzo272",
      point: 33400,
    },
  ];

  const images = [
    { src: ImageItem1, label: "Vua bóng đá" },
    { src: ImageItem2, label: "Bắn trứng khủng long" },
    { src: ImageItem3, label: "Free Fire" },
  ];

  const [pages, setPages] = useState(3);
  const [page, setPage] = useState(1);

  return (
    <div className="text-white">
      <div className="px-[10%] h-full relative z-10 py-[30px]">
        <Image
          src={miniGamesBg}
          alt=""
          className="w-full h-full absolute top-0 left-0 -z-10"
        />
        <h1 className="mb-6 text-5xl font-bold uppercase col-span-3">
          video hot
        </h1>
        {isMatchMD ? (
          <div>
            {datas &&
              datas.map((data, index) => (
                <div
                  className="w-full h-fit bg-[#0F0F0F] gap-2 my-1 p-4 flex justify-between items-center"
                  key={index}
                >
                  <div className="flex [&>*]:ml-4">
                    <Image src={data.image} alt="" className="h-full w-10" />
                    <div className="flex flex-col [&:p]:p-0 [&:p]:m-0">
                      <p className="text-[#FF2423]">{data.name}</p>
                      <p>{data.point} Fpoint</p>
                      <small className="text-[#D9D9D9] text-[11px]">
                        Tham gia: 1/16/2023 5:36:40 PM
                      </small>
                    </div>
                  </div>

                  <button className="bg-[#FF2423] w-4 h-4 flex justify-center items-center p-4 hover:bg-white hover:text-[#FF2423] text-[18px] font-bold">
                    +
                  </button>
                </div>
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-3">
            {images &&
              images.map((img, index) => (
                <div
                  className="flex flex-col items-center justify-center"
                  key={index}
                >
                  <Link href="#" className="w-[80%] h-[70%] object-cover">
                    <Image src={img.src} alt="" className="w-full h-full" />
                  </Link>
                  <Link href="#" className="mt-6 font-bold">
                    {img.label}
                  </Link>
                </div>
              ))}
          </div>
        )}

        <GLPagination pages={pages} setPage={setPage} />
      </div>
    </div>
  );
}
