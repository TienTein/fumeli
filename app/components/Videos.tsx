"use client";

import VideosCarousel from "./VideosCarousel";
import { useMediaQuery, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";
import "../styles/Videos.scss";

export default function Videos() {
  const pathname = usePathname();
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  console.log(pathname);

  return (
    <div className="w-screen h-fit relative text-white videos">
      <div className={`${isMatchMD ? "" : "w-1/3"}  mx-[10vw]`}>
        <h1 className="mb-6 text-5xl font-bold uppercase">
          {pathname === "/" ? "video hot" : "XEM VIDEO NHẬN QUÀ"}
        </h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          esse. Autem suscipit, explicabo quia iusto ipsa nemo.
        </p>
      </div>

      <VideosCarousel isMatchMD={isMatchMD} />
    </div>
  );
}
