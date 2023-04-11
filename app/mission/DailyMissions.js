"use client";
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import DailyBg from "../../public/images/bg-top 1.png";
import DailyItem1 from "../../public/images/another/dailymission-item1.png";
import DailyItem2 from "../../public/images/another/dailymission-item2.png";
import GLPagination from "../components/GLPagination";
import { useMediaQuery, useTheme } from "@mui/material";

export default function DailyMissions() {
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const datas = useMemo(
    () => [
      DailyItem1,
      DailyItem1,
      DailyItem2,
      DailyItem1,
      DailyItem2,
      DailyItem1,
      DailyItem2,
      DailyItem2,
      DailyItem1,
      DailyItem2,
      DailyItem1,
      DailyItem2,
    ],
    []
  );
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const newDatas = datas.slice(start, end);
  const pageCount = Math.ceil(datas.length / itemsPerPage);

  useEffect(() => {
    if (isMatchMD) {
      setItemsPerPage(3);
    } else if (!isMatchMD) {
      const newPageCount = Math.ceil(datas.length / 6);
      if (newPageCount < page) {
        setPage(2);
      }
      setItemsPerPage(6);
    }
  }, [isMatchMD, datas, page]);

  return (
    <div className="w-full h-full py-[8vh] px-[10vw] relative z-10">
      <Image
        src={DailyBg}
        alt=""
        className="w-full h-full absolute -z-10 top-0 left-0"
      />
      <div
        className={`grid ${
          isMatchMD ? "grid-cols-1 w-fit mx-auto gap-4" : "grid-cols-3 gap-8"
        }  text-white [&>div]:bg-black [&>div]:rounded-md [&>div]:p-4 [&>div>*]:mb-2 [&>div>p]:uppercase`}
      >
        {newDatas &&
          newDatas.map((data, idx) => (
            <div className="flex flex-col" key={idx}>
              <Image src={data} alt="" />
              <p>VÒNG QUAY MAY MẮN</p>
              <span>2000 Fpoint</span>
              <button className="border border-[#FF2423] bg-transparent border-b-4 w-fit px-8 py-1 hover:border-white hover:bg-white hover:text-black">
                THAM GIA
              </button>
            </div>
          ))}
      </div>
      <GLPagination pageCount={pageCount} setPage={setPage} />
    </div>
  );
}
