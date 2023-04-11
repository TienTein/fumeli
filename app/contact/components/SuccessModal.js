"use client";
import React from "react";
import Modal from "@mui/material/Modal";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import Link from "next/link";

export default function SuccessModal({ handleClose, open }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="flex flex-col w-[30%] h-[400px] bg-white m-auto top-0 left-0 bottom-0 right-0 absolute  items-center [&>*]:mb-6">
        <CheckCircleOutlineIcon className="text-8xl text-[#FF2423] my-6" />
        <h1 className="text-3xl text-[#FF2423] font-bold">Thành công</h1>
        <div className="text-center font-bold">
          <p>Chúng tôi sẽ phản hồi tới bạn trong thời gian sớm nhất</p>
          <p>Xin cảm ơn!</p>
        </div>
        <Link
          href="/"
          className="bg-[#FF2423] text-white px-2 rounded-sm font-bold py-1 uppercase flex items-center hover:opacity-80"
        >
          <ExpandCircleDownIcon className="w transform rotate-90 mr-2" />
          Quay lại trang chủ
        </Link>
      </div>
    </Modal>
  );
}
