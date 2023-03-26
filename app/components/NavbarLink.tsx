"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function NavbarLink() {
  const [active, setActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
    setActive(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActive(false);
  };
  return (
    <div className="flex md:order-2 w-full justify-between nav-link py-4">
      <div className="flex justify-between nav-link-l">
        <Link
          href="#"
          className="block py-2 pl-3 pr-4 text-white"
          aria-current="page"
        >
          Giới thiệu
        </Link>

        <Button
          variant="contained"
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          className={`${
            active ? "text-[#FF2423]" : ""
          } hover:bg-transparent [&>span]:m-0`}
        >
          Nhiệm vụ
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Điểm danh hàng ngày</MenuItem>
          <MenuItem onClick={handleClose}>Mời bạn nhận quà</MenuItem>
        </Menu>

        <Link
          href="#"
          className="block py-2 pl-3 pr-4 text-white"
          aria-current="page"
        >
          Vòng quay may mắn
        </Link>
      </div>

      <div className="flex justify-between nav-link-l">
        <Link
          href="#"
          className="block py-2 pl-3 pr-4 text-white"
          aria-current="page"
        >
          Giải đấu
        </Link>
        <Link
          href="#"
          className="block py-2 pl-3 pr-4 text-white"
          aria-current="page"
        >
          Đổi quà
        </Link>
        <Link
          href="#"
          className="block py-2 pl-3 pr-4 text-white"
          aria-current="page"
        >
          Liên hệ
        </Link>
        <Link
          href="#"
          className="block py-2 pl-3 pr-4 text-white"
          aria-current="page"
        >
          Đội viên
        </Link>
      </div>
    </div>
  );
}
