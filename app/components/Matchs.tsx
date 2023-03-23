import Image from "next/image";
import Navi from "../../public/images/Navi-logo 1.png";
import G2 from "../../public/images/G2-logo.png";
import VS from "../../public/images/vs_finished 1.png";
import nextArrow from "../../public/images/Vector.png";
import "../styles/Matchs.scss";
import Link from "next/link";

export default function Matchs() {
  return (
    <div className="w-[80vw] h-[80vh] mx-auto text-white flex flex-col mb-20">
      <h1 className="mb-6 text-5xl font-bold">Giải đấu</h1>
      <div className="flex w-full justify-end match-kind">
        <button>
          <text className="z-10">ALL</text>
          <div className="btn-active"></div>
        </button>
        <p>/</p>
        <button className="active">
          <text>CS GO</text>
          <div className="btn-active"></div>
        </button>
        <p>/</p>
        <button>
          <text className="z-10">DOTA 2</text>
          <div className="btn-active"></div>
        </button>
        <p>/</p>
        <button>
          <text className="z-10">FORTINE</text>
          <div className="btn-active"></div>
        </button>
        <p>/</p>
        <button>
          <text className="z-10">PUBG</text>
          <div className="btn-active"></div>
        </button>
      </div>
      <div className="match">
        <div className="bg-match"></div>
        <div className="flex justify-around items-center z-10">
          <div className="match-ava">
            <Image src={G2} alt="" className="h-2/2 w-2/3" />
            <p>G2</p>
          </div>
          <Image src={VS} alt="" className="h-1/2 w-10" />
          <div className="match-ava">
            <Image src={Navi} alt="" className="h-2/3 w-2/3" />
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
            <Image src={G2} alt="" className="h-2/2 w-2/3" />
            <p>G2</p>
          </div>
          <Image src={VS} alt="" className="h-1/2 w-10" />
          <div className="match-ava">
            <Image src={Navi} alt="" className="h-2/3 w-2/3" />
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
            <Image src={G2} alt="" className="h-2/2 w-2/3" />
            <p>G2</p>
          </div>
          <Image src={VS} alt="" className="h-1/2 w-10" />
          <div className="match-ava">
            <Image src={Navi} alt="" className="h-2/3 w-2/3" />
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
