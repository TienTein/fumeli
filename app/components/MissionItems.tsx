"use client";
import Image from "next/image";
import mission1 from "../../public/images/mission1.png";
import mission2 from "../../public/images/mission2.png";
import mission3 from "../../public/images/mission3.png";
import mission4 from "../../public/images/mission4.png";
import bgMission from "../../public/images/bg-top 1.png";
import { useMediaQuery, useTheme } from "@mui/material";

export default function MissionItems() {
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      className={`border-[#707070] border-y-[1px] px-[10vw] h-fit m-auto grid  gap-4 text-white z-10 relative py-[20vh] ${
        isMatchMD ? "" : " grid-cols-3"
      }`}
    >
      <Image
        src={bgMission}
        alt=""
        className="w-full h-full absolute top-0 left-0 -z-50"
      />
      <div className="flex flex-col">
        <h1 className="mb-6 text-4xl font-bold">Nhiệm vụ</h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          esse. Autem suscipit, explicabo quia iusto ipsa nemo.
        </p>
        {!isMatchMD && (
          <button className="border-[#FF2423] border-[1px] border-b-4 bg-transparent w-fit px-6 mb-6 hover:border-white hover:bg-[#FF2423] hover:border-b-[1px] transition-[500ms] pb-1">
            Xem thêm
          </button>
        )}
      </div>

      <Image src={mission1} alt="" className="h-full w-full" />
      <Image src={mission2} alt="" className="h-full w-full" />
      {isMatchMD && (
        <button className="border-[#FF2423] border-[1px] border-b-4 bg-transparent w-fit px-6 mb-6 hover:border-white hover:bg-[#FF2423] hover:border-b-[1px] transition-[500ms]">
          Xem thêm
        </button>
      )}

      <Image
        src={mission3}
        alt=""
        className={`h-full w-full ${isMatchMD ? "order-2" : ""}`}
      />
      <Image
        src={mission4}
        alt=""
        className={`h-full w-full ${isMatchMD ? "order-3" : ""}`}
      />
      {isMatchMD && (
        <button className="order-3 border-[#FF2423] border-[1px] border-b-4 bg-transparent w-fit px-6 mb-6 hover:border-white hover:bg-[#FF2423] hover:border-b-[1px] transition-[500ms]">
          Xem thêm
        </button>
      )}
      <div className="flex flex-col items-end ">
        <h1 className="mb-6 text-4xl font-bold">Nhiệm vụ nổi bật</h1>
        <p className="mb-6 text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          esse. Autem suscipit, explicabo quia iusto ipsa nemo.
        </p>
        {!isMatchMD && (
          <button className="border-[#FF2423] border-[1px] border-b-4 bg-transparent w-fit px-6 mb-6 hover:border-white hover:bg-[#FF2423] hover:border-b-[1px] transition-[500ms]">
            Xem thêm
          </button>
        )}
      </div>
    </div>
  );
}
