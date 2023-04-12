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
import SuccessModal from "./SuccessModal";
import { useMediaQuery, useTheme } from "@mui/material";

export default function ContactForm() {
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchLG = useMediaQuery(theme.breakpoints.down("lg"));
  const [disable, setDisable] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div
      className={`w-full px-[10vw] py-[50px] grid [&>*]:p-[2rem] ${
        isMatchLG ? "grid-cols-1" : "grid-cols-2 gap-8"
      }`}
    >
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
          className="text-white bg-[#FF2423] uppercase px-4 py-[5px] w-fit my-4 disabled:bg-gray-500"
          disabled={disable}
          onClick={handleOpen}
        >
          Xác nhận gửi
        </button>
      </div>
      {open && <SuccessModal handleClose={handleClose} open={open} />}
    </div>
  );
}
