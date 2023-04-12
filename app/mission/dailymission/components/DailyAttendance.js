"use client";
import React from "react";
import DailyItem1 from "../../../../public/images/another/dailymission-item1.png";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";

export default function DailyAttendance() {
  const dailyAttendanceItems = [
    { label: "thứ 2", status: "done" },
    { label: "thứ 3", status: "pass" },
    { label: "thứ 4", status: "notreach" },
    { label: "thứ 5", status: "notreach" },
    { label: "thứ 6", status: "notreach" },
    { label: "thứ 7", status: "notreach" },
    { label: "chủ nhật", status: "notreach" },
  ];
  const dailyAttendanceItemsInWeek = dailyAttendanceItems.slice(0, 6);
  const handleClick = (item) => {
    console.log(item);
  };
  return (
    <div className="w-full grid grid-cols-3 gap-2">
      <div className="grid grid-cols-3 col-span-2">
        {dailyAttendanceItemsInWeek &&
          dailyAttendanceItemsInWeek.map((item, idx) => (
            <button
              key={idx}
              className={`flex justify-center items-center flex-col mb-4 bg-black rounded-lg border border-white h-[300px] ${
                item.status === "done"
                  ? "cursor-default"
                  : item.status === "pass"
                  ? ""
                  : "hover:bg-gradient-to-t from-[#FF2423] from-10% to-black to-70%"
              } relative`}
              onClick={() => handleClick(item)}
            >
              <p className="mb-2 capitalize">{item.label}</p>
              <Image
                src={DailyItem1}
                alt={item.label}
                className={`w-3/4 h-2/3 rounded-md ${
                  item.status === "done" && "filter grayscale"
                } `}
              />
              {item.status === "pass" && (
                <div className="w-full absolute bottom-0 left-0 bg-[#FF2423] py-4 bg-opacity-40 backdrop-blur-15 capitalize">
                  điểm danh bù
                </div>
              )}
              {item.status === "done" && (
                <CheckIcon className="w-3/4 h-2/3 absolute top-0 right-0 left-0 bottom-0 m-auto font-bold text-[#FF2423]" />
              )}
            </button>
          ))}
      </div>
      <button
        className={`flex justify-center items-center flex-col mb-4 bg-black rounded-lg border border-white h-[70%] ${
          dailyAttendanceItems[6].status === "done"
            ? "cursor-default"
            : dailyAttendanceItems[6].status === "pass"
            ? ""
            : "hover:bg-gradient-to-t from-[#FF2423] from-10% to-black to-70%"
        } relative`}
      >
        <p className="mb-2 capitalize">{dailyAttendanceItems[6].label}</p>
        <Image
          src={DailyItem1}
          alt={dailyAttendanceItems[6].label}
          className={`w-3/4 h-2/3 rounded-md ${
            dailyAttendanceItems[6].status === "done" && "filter grayscale"
          } `}
        />
        {dailyAttendanceItems[6].status === "pass" && (
          <div className="w-full absolute bottom-0 left-0 bg-[#FF2423] py-4 bg-opacity-40 backdrop-blur-15 capitalize">
            điểm danh bù
          </div>
        )}
        {dailyAttendanceItems[6].status === "done" && (
          <CheckIcon className="w-3/4 h-2/3 absolute top-0 right-0 left-0 bottom-0 m-auto font-bold text-[#FF2423]" />
        )}
      </button>
    </div>
  );
}
