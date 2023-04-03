"use client";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContactFormInputs from "./ContactFormInputs";

export default function ContactForm() {
  const [disable, setDisable] = useState(true);

  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    phone: "",
    context: "",
  });

  const handleChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (inputs.fullName && inputs.email && inputs.phone && inputs.context) {
      return setDisable(false);
    }
    return setDisable(true);
  }, [inputs]);

  return (
    <div className="w-full px-[10vw] py-[50px] grid grid-cols-2 gap-8 [&>*]:p-[2rem]">
      <div className="[&>*]:mb-6">
        <h1 className="text-3xl">THÔNG TIN CHÚNG TÔI</h1>
        <div className="flex">
          <LocationOnIcon className="mr-2" />
          <p>
            <span className="font-bold p-0">Địa chỉ: </span>
            Số 52 Đường 10, Khu dân cư Nam Long, Phường Tân Nhuận Đông, Quận 7,
            TP. HCM, VN
          </p>
        </div>
        <div className="flex">
          <LocalPhoneIcon className="mr-2" />
          <p>
            <span className="font-bold">Phone: </span>
            0968236915 - 0988666415
          </p>
        </div>
        <div className="flex">
          <EmailIcon className="mr-2" />
          <p>
            <span className="font-bold">Email: </span>
            info@fusoft.vn
          </p>
        </div>
        <div className="flex [&>*]:mr-4">
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl mb-6">LIÊN HỆ</h1>
        <ContactFormInputs
          inputs={inputs}
          handleChangeInput={handleChangeInput}
        />
        <button
          className="text-white bg-[#FF2423] uppercase w-full px-4 py-[5px] my-4 disabled:bg-gray-500"
          disabled={disable}
        >
          Xác nhận gửi
        </button>
      </div>
    </div>
  );
}
