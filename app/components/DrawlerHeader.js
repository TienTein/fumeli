"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function DrawlerHeader() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMissionMenu, setOpenMissionMenu] = useState(false);
  const handleOpenMissionMenu = () => {
    setOpenMissionMenu(!openMissionMenu);
  };
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="top"
      >
        <div className="bg-black text-white px-[10vw] [&>*]:border-b-[#8B8B8B] [&>*]:border-b-[1px]  [&>*]:w-full [&>*]:py-[5px] py-[20px]">
          <Link
            href="/introduction"
            className="block"
            aria-current="page"
            onClick={() => setOpenDrawer(false)}
          >
            Giới thiệu
          </Link>

          <button
            className={`flex justify-between items-baseline transition-[500ms] ${
              openMissionMenu ? "text-[#FF2423]" : null
            }`}
            onClick={handleOpenMissionMenu}
          >
            Nhiệm vụ{" "}
            {openMissionMenu ? (
              <ArrowForwardIosIcon className="text-[16px]" />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </button>

          {openMissionMenu ? (
            <div className="pl-[10vh] [&>*]:border-b-[#8B8B8B] [&>*]:border-b-[1px]  [&>*]:w-full [&>*]:py-[5px] border-none">
              <Link
                href="#"
                className="block"
                aria-current="page"
                onClick={() => setOpenDrawer(false)}
              >
                Điểm danh hàng ngày
              </Link>
              <Link
                href="#"
                className="block"
                aria-current="page"
                onClick={() => setOpenDrawer(false)}
              >
                Mời bạn nhận quà
              </Link>
            </div>
          ) : null}

          <Link
            href="#"
            className="block"
            aria-current="page"
            onClick={() => setOpenDrawer(false)}
          >
            Vòng quay may mắn
          </Link>

          <Link
            href="#"
            className="block"
            aria-current="page"
            onClick={() => setOpenDrawer(false)}
          >
            Giải đấu
          </Link>

          <Link
            href="#"
            className="block"
            aria-current="page"
            onClick={() => setOpenDrawer(false)}
          >
            Đổi quà
          </Link>

          <Link
            href="#"
            className="block"
            aria-current="page"
            onClick={() => setOpenDrawer(false)}
          >
            Liên hệ
          </Link>

          <Link
            href="#"
            className="block border-none"
            aria-current="page"
            onClick={() => setOpenDrawer(false)}
          >
            Đội viên
          </Link>
        </div>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className="w-fit absolute top-0 right-5 p-0"
      >
        <MenuIcon className="text-white text-[40px]" />
      </IconButton>
    </>
  );
}