"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function DrawlerHeader() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setShowMenu(true);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.targe)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="top"
      >
        <div className="bg-black text-white px-[10vw] [&>*]:border-b-[#8B8B8B] [&>*]:border-b [&>*]:w-full [&>*]:py-[5px] py-[20px] [&>a]:block">
          <Link
            href="/introduction"
            className={`${
              pathname === "/introduction"
                ? "border-b-2 border-[#FF2423] text-[#FF2423]"
                : ""
            }`}
            aria-current="page"
            onClick={() => setOpenDrawer(false)}
          >
            Giới thiệu
          </Link>

          <Link
            onMouseEnter={toggleMenu}
            className={`${
              active ? "text-[#FF2423]" : ""
            } hover:text-[#FF2423] w-full`}
            href="/mission"
          >
            <div className="w-full flex justify-between items-center">
              <p className="w-fit p-0 m-0">Nhiệm vụ</p>
              {showMenu ? (
                <ArrowForwardIosIcon className="text-[16px]" />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </div>
          </Link>

          {showMenu && (
            <ul
              className="left-0 z-10 border-none marker:[&>*]:cursor-pointer w-48 [&>*]:py-2 [&>*]:ml-3 [&>*]:pr-4 [&>*]:border-b-[#8B8B8B] [&>*]:border-b flex flex-col"
              ref={menuRef}
            >
              <Link
                href="/mission/dailymission"
                className="hover:text-[#FF2423]"
              >
                Điểm danh hàng ngày
              </Link>
              <Link href="#" className="hover:text-[#FF2423]">
                Mời bạn nhận quà
              </Link>
            </ul>
          )}

          <Link
            href="#"
            className=""
            aria-current="page"
            onClick={() => setOpenDrawer(false)}
          >
            Vòng quay may mắn
          </Link>

          <Link
            href="#"
            className=""
            aria-current="page"
            onClick={() => setOpenDrawer(false)}
          >
            Giải đấu
          </Link>

          <Link
            href="#"
            className=""
            aria-current="page"
            onClick={() => setOpenDrawer(false)}
          >
            Đổi quà
          </Link>

          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "border-b-2 border-[#FF2423] text-[#FF2423]"
                : ""
            } `}
            aria-current="page"
            onClick={() => setOpenDrawer(false)}
          >
            Liên hệ
          </Link>

          <Link
            href="#"
            className="border-none"
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
