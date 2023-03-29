"use client";

import Image from "next/image";
import Navi from "../../public/images/Navi-logo 1.png";
import G2 from "../../public/images/G2-logo.png";
import VS from "../../public/images/vs_finished 1.png";
import nextArrow from "../../public/images/Vector.png";
import "../styles/Matchs.scss";
import Link from "next/link";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Matchs() {
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="w-[80vw] h-fit mx-auto text-white flex flex-col mb-20">
      <h1 className="mb-6 text-5xl font-bold">Giải đấu</h1>
      <div
        className={`flex w-full match-kind ${isMatchMD ? "" : "justify-end"}`}
      >
        <button>ALL</button>
        <p>/</p>
        <button className="active">CS GO</button>
        <p>/</p>
        <button>DOTA 2</button>
        <p>/</p>
        <button>FORTINE</button>
        <p>/</p>
        <button>PUBG</button>
      </div>

      <div className="match">
        <div className="bg-match"></div>
        <div className="flex justify-around items-center z-10">
          <div className="match-ava">
            <Image src={G2} alt="" />
            <p>G2</p>
          </div>
          <Image src={VS} alt="" />
          <div className="match-ava">
            <Image src={Navi} alt="" />
            <p>Navi</p>
          </div>
        </div>
        <div className="flex flex-col z-10 h-full justify-center">
          <p className="font-bold">ESPORTS LEAGUE - CS GO DIVISION</p>
          <p className="text-[14px]">Thứ 6 - 07/12/2023 4:00 PM</p>
        </div>
        <Link href="#" className="flex justify-end items-center mr-8 z-10">
          Xem trận đấu <Image src={nextArrow} alt="" className="w-4 h-6 ml-4" />
        </Link>
      </div>

      <div className="match">
        <div className="bg-match"></div>
        <div className="flex justify-around items-center z-10">
          <div className="match-ava">
            <Image src={G2} alt="" />
            <p>G2</p>
          </div>
          <Image src={VS} alt="" />
          <div className="match-ava">
            <Image src={Navi} alt="" />
            <p>Navi</p>
          </div>
        </div>
        <div className="flex flex-col z-10 h-full justify-center">
          <p className="font-bold">ESPORTS LEAGUE - CS GO DIVISION</p>
          <p className="text-[14px]">Thứ 6 - 07/12/2023 4:00 PM</p>
        </div>
        <Link href="#" className="flex justify-end items-center mr-8 z-10">
          Xem trận đấu <Image src={nextArrow} alt="" className="w-4 h-6 ml-4" />
        </Link>
      </div>

      <div className="match">
        <div className="bg-match"></div>
        <div className="flex justify-around items-center z-10">
          <div className="match-ava">
            <Image src={G2} alt="" />
            <p>G2</p>
          </div>
          <Image src={VS} alt="" />
          <div className="match-ava">
            <Image src={Navi} alt="" />
            <p>Navi</p>
          </div>
        </div>
        <div className="flex flex-col z-10 h-full justify-center">
          <p className="font-bold">ESPORTS LEAGUE - CS GO DIVISION</p>
          <p className="text-[14px]">Thứ 6 - 07/12/2023 4:00 PM</p>
        </div>
        <Link href="#" className="flex justify-end items-center mr-8 z-10">
          Xem trận đấu <Image src={nextArrow} alt="" className="w-4 h-6 ml-4" />
        </Link>
      </div>
    </div>
  );
}
