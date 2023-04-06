"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function NavbarLink({ isMatchLG }: { isMatchLG: boolean }) {
  const pathname = usePathname();

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
    <div
      className={`flex md:order-2 w-full nav-link  ${
        isMatchLG ? "py-2 justify-around" : "py-4 justify-between"
      }`}
    >
      <div
        className={`flex [&>a]:mr-2 [&>a:hover]:text-[#FF2423] ${
          isMatchLG ? "w-full justify-around" : "justify-between"
        }`}
      >
        <Link
          href="/introduction"
          className={`block py-2 pl-3 pr-4  ${
            pathname === "/introduction"
              ? "border-b-2 border-[#FF2423] text-[#FF2423]"
              : "text-white"
          } `}
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
          } hover:bg-transparent [&>span]:m-0 hover:text-[#FF2423]`}
        >
          Nhiệm vụ
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock={true}
        >
          <MenuItem className="hover:text-[#FF2423]" onClick={handleClose}>
            Điểm danh hàng ngày
          </MenuItem>
          <MenuItem className="hover:text-[#FF2423]" onClick={handleClose}>
            Mời bạn nhận quà
          </MenuItem>
        </Menu>

        <Link
          href="#"
          className="block py-2 pl-3 pr-4 text-white"
          aria-current="page"
        >
          Vòng quay may mắn
        </Link>
      </div>

      <div
        className={`flex  [&>a]:mr-2 [&>a:hover]:text-[#FF2423] ${
          isMatchLG ? "w-full justify-around" : "justify-between"
        }`}
      >
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
          href="/contact"
          className={`block py-2 pl-3 pr-4  ${
            pathname === "/contact"
              ? "border-b-2 border-[#FF2423] text-[#FF2423]"
              : "text-white"
          } `}
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
