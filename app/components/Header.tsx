"use client";

import Link from "next/link";
import logo from "../../public/images/logoFUMELI 1.png";
import bgLogo from "../../public/images/bg_logoFUMELI 3.png";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import NavbarLink from "./NavbarLink";
import StarIcon from "@mui/icons-material/Star";

import "../styles/Header.scss";
import AuthModal from "./AuthModal";

export default function Header() {
  return (
    <nav className="bg-black flex h-[14vh] relative flex-col navbar px-[20vh]">
      <div className="h-[130%] w-[15%] absolute left-0 right-0 top-0 bottom-0 m-auto z-10">
        <Link href="/">
          <Image src={bgLogo} alt="" className="absolute w-full h-full" />
          <Image
            src={logo}
            alt=""
            className="absolute w-[50%] h-[50%] left-0 right-0 top-0 bottom-0 m-auto"
          />
        </Link>
      </div>

      <hr className="h-[1px] bg-white w-screen absolute left-0 right-0 top-0 bottom-0 m-auto" />

      {/* auth menu */}
      <div className="flex items-center md:order-2 w-full justify-between pt-2">
        <div className="flex justify-between nav-icons px-3">
          <FacebookIcon className="text-white" />
          <YouTubeIcon className="text-white" />
          <InstagramIcon className="text-white" />
          <TwitterIcon className="text-white" />
        </div>
        <div className="flex">
          <button
            id="mega-menu-dropdown-button"
            data-dropdown-toggle="mega-menu-dropdown"
            className="flex items-center justify-between text-white text-[14px] mr-3"
          >
            <div className="w-6 h-6 border-white bg-[red] border-[1px] rounded-full relative mr-2">
              <StarIcon className="text-[yellow] absolute w-[70%] h-[70%] left-0 right-0 top-0 bottom-0 m-auto" />
            </div>
            VN
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-1 md:w-4 md:h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <AuthModal isSignin={true} />

          <button
            data-collapse-toggle="mega-menu"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <NavbarLink />
    </nav>
  );
}
