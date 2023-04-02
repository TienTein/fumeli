"use client";

import { useState, isValidElement } from "react";
import Link from "next/link";

import Image from "next/image";
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DrawlerHeader from "./DrawlerHeader";
import NavbarLink from "./NavbarLink";
import AuthModal from "./AuthModal";

import logo from "../../public/images/logoFUMELI 1.png";
import bgLogo from "../../public/images/bg_logoFUMELI 3.png";
import "../styles/Header.scss";

const Header = () => {
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchLG = useMediaQuery(theme.breakpoints.down("lg"));
  const [active, setActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedItem, setSelectedItem] = useState<string>("vn");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
    setActive(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActive(false);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    menuItem: React.ReactNode
  ) => {
    if (
      isValidElement(menuItem) &&
      typeof menuItem.props.children === "string"
    ) {
      setSelectedItem(menuItem.props.children);
    }
    handleClose();
  };

  return (
    <AppBar
      className={`bg-black flex h-fit relative flex-col navbar ${
        isMatchLG ? "" : "px-[20vh]"
      } min-h-[10vh]`}
    >
      {!isMatchMD ? (
        <>
          {!isMatchLG ? (
            <>
              <div className="h-[130%] w-[15%] absolute left-0 right-0 top-0 bottom-0 m-auto z-10">
                <Link href="/">
                  <Image
                    src={bgLogo}
                    alt=""
                    className="absolute w-full h-full"
                  />
                  <Image
                    src={logo}
                    alt=""
                    className="absolute w-[50%] h-[50%] left-0 right-0 top-0 bottom-0 m-auto"
                  />
                </Link>
              </div>
              <hr className="h-[1px] bg-white w-screen absolute left-0 right-0 top-0 bottom-0 m-auto" />
            </>
          ) : null}

          {/* auth menu */}
          <div
            className={`flex items-center md:order-2 w-full justify-between pt-2 ${
              !isMatchLG ? "" : "px-[10px]"
            }`}
          >
            <div className="flex justify-between nav-icons px-3">
              <FacebookIcon className="text-white" />
              <YouTubeIcon className="text-white" />
              <InstagramIcon className="text-white" />
              <TwitterIcon className="text-white" />
            </div>

            <div className="flex">
              <Button
                variant="contained"
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                className={`${
                  active ? "text-[#FF2423]" : ""
                } hover:bg-transparent [&>span]:m-0`}
              >
                <div className="w-6 h-6 border-white bg-[red] border-[1px] rounded-full relative mr-2">
                  <StarIcon className="text-[yellow] absolute w-[70%] h-[70%] left-0 right-0 top-0 bottom-0 m-auto" />
                </div>
                {selectedItem}
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem
                  onClick={(event) =>
                    handleMenuItemClick(
                      event,
                      <MenuItem onClick={handleClose}>vn</MenuItem>
                    )
                  }
                >
                  vn
                </MenuItem>
                <MenuItem
                  onClick={(event) =>
                    handleMenuItemClick(
                      event,
                      <MenuItem onClick={handleClose}>en</MenuItem>
                    )
                  }
                >
                  en
                </MenuItem>
              </Menu>

              <AuthModal />
            </div>
          </div>

          <NavbarLink isMatchLG={isMatchLG} />
        </>
      ) : (
        <DrawlerHeader />
      )}
    </AppBar>
  );
};

export default Header;
