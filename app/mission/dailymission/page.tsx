"use client";
import Image from "next/image";
import DailyAttendance from "./components/DailyAttendance";
import RuleModal from "./components/RuleModal";
import DailyBg from "../../../public/images/bg-top 1.png";
import DailyTitle from "../../../public/images/another/bgDailyMission.png";

export default function page() {
  return (
    <div className="text-white w-screen">
      <div className="w-full relative z-10 px-[10vw] pt-[5vh]">
        <Image
          src={DailyBg}
          alt=""
          className="w-full h-full absolute top-0 left-0"
        />
        <h1 className="text-center text-[24px]">ĐIỂM DANH HÀNG NGÀY</h1>
        <Image src={DailyTitle} alt="" className="w-full h-full my-6" />
      </div>

      <div className="mx-[10vw] [&>*]:mb-4">
        <div className="flex justify-end">
          <RuleModal />
        </div>

        <ul className="w-full">
          <li>- Hoàn thành điểm danh trong bảy ngày để nhận quà tương ứng</li>
          <li>
            - Bạn có thể dùng Fpoint để điểm danh bù trong trường hợp đã quên
            điểm danh ngày trước đó
          </li>
          <li>
            - Nhận thưởng ngày thứ bảy khi đăng nhập và điểm danh đủ bảy ngày
            liên tục
          </li>
        </ul>

        <DailyAttendance />
      </div>
    </div>
  );
}
