"use client";
import Image from "next/image";
import topStar from "../../public/images/topstar.png";
import topAva from "../../public/images/topavater.png";
import firstTop from "../../public/images/1ST 1.png";
import secondTop from "../../public/images/2ND 1.png";
import thirdTop from "../../public/images/3RD 1.png";
import "../styles/TopStar.scss";
import { useState } from "react";

export default function TopRank() {
  const [show, setShow] = useState(false);

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

  const topDatas = datas.sort((a, b) => b.point - a.point).slice(0, 6);

  console.log(show);

  return (
    <div
      className={`fixed ${
        show === true ? "top-[20%]" : "top-[50%]"
      } right-0 text-white z-50 flex flex-col items-end`}
    >
      <button
        className={`w-20 h-7 flex justify-around bg-top-star items-center ${
          show === true ? "hidden" : ""
        }`}
        onClick={() => setShow(true)}
      >
        <Image src={topStar} alt="" className="w-6 h-6" />
        <p>BXH</p>
      </button>
      <div
        className={`w-[300px] h-[880px] bg-[#000] flex flex-col items-center rounded [&>*]:mb-4 [&>*]:py-2  [&>*]:px-4 ${
          show === true ? "" : "hidden"
        }`}
      >
        <button
          className="w-fit absolute top-0 left-0 text-[14px] p-0 font-bold rounded"
          onClick={() => setShow(false)}
        >
          X
        </button>
        <h1 className="uppercase">bảng xếp hạng</h1>
        {topDatas &&
          topDatas.map((data, index) => (
            <>
              <div
                className="w-full h-14 bg-[#252525] grid grid-cols-2 gap-2"
                key={index}
              >
                <div className="flex justify-between">
                  <Image src={data.image} alt="" className="h-full w-10" />
                  <div className="flex flex-col text-[13px] [&:p]:p-0 [&:p]:m-0 ml-2">
                    <p className="text-[#FF2423]">{data.name}</p>
                    <p>{data.point} Fpoint</p>
                  </div>
                </div>
                {index > 2 ? null : (
                  <div className="flex justify-end">
                    <Image
                      src={
                        index === 0
                          ? firstTop
                          : index === 1
                          ? secondTop
                          : thirdTop
                      }
                      alt=""
                      className="h-full w-10"
                    />
                  </div>
                )}
              </div>
            </>
          ))}
      </div>
    </div>
  );
}
