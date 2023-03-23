"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logoFUMELI 1.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <div className="w-full flex flex-col bg-black items-center text-white [&>*]:mb-8 py-10">
      <Image src={logo} alt="" />
      <div className="uppercase [&>*]:mr-8">
        <Link href="#">giới thiệu</Link>
        <Link href="#">nhiệm vụ</Link>
        <Link href="#">giải đấu</Link>
        <Link href="#">dổi quà</Link>
        <Link href="#">liên hệ</Link>
        <Link href="#">hội viên</Link>
      </div>
      <div className="[&>*]:mr-6 [&>*]:rounded-sm">
        <FacebookIcon className="w-8 h-8" />
        <YouTubeIcon className="text-black bg-white" />
        <InstagramIcon className="text-black bg-white" />
        <TwitterIcon className="text-black bg-white" />
      </div>
      <div className="grid grid-cols-4 gap-8 text-[13px]">
        <div className="flex col-start-2 items-baseline">
          <LocationOnIcon className="mr-2 text-[14px]" />
          <p>
            <span className="font-bold">Địa chỉ: </span>
            Số 52 Đường 10, Khu dân cư Nam Long, Phường Tân Nhuận Đông, Quận 7,
            TP. HCM, VN
          </p>
        </div>
        <div className="col-start-3 flex flex-col items-baseline">
          <div className="flex">
            <LocalPhoneIcon className="mr-2 text-[14px]" />
            <p>
              <span className="font-bold">Phone: </span>
              0968236915 - 0988666415
            </p>
          </div>
          <div className="flex">
            <EmailIcon className="mr-2 text-[14px]" />
            <p>
              <span className="font-bold">Email: </span>
              info@fusoft.vn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
