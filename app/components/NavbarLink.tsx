"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavbarLink({ isMatchLG }: { isMatchLG: boolean }) {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => setShowMenu(true);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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

        <div className="relative py-2 pl-3 pr-4">
          <Link
            onMouseEnter={toggleMenu}
            className={`${
              active ? "text-[#FF2423]" : ""
            } hover:bg-transparent [&>span]:m-0 hover:text-[#FF2423]`}
            href="/mission"
          >
            Nhiệm vụ
          </Link>

          {showMenu && (
            <ul
              className="absolute top-[100%] rounded-md left-0 z-10 bg-white text-black [&>*]:cursor-pointer w-48 [&>*]:py-2 [&>*]:pl-3 [&>*]:pr-4"
              ref={menuRef}
            >
              <li className="hover:text-[#FF2423] hover:bg-[#F5F5F5] rounded-t-md">
                Điểm danh hàng ngày
              </li>
              <li className="hover:text-[#FF2423] hover:bg-[#F5F5F5] rounded-b-md">
                Mời bạn nhận quà
              </li>
            </ul>
          )}
        </div>
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
