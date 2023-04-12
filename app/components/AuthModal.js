"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/selectors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";
import Link from "next/link";
import useAuth from "../../hooks/useAuth";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircularProgress from "@mui/material/CircularProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal() {
  const [existUser, setExistUser] = useState(() => {
    try {
      const user = localStorage.getItem("user");
      if (user === null) {
        return null;
      }
      return JSON.parse(user);
    } catch (error) {
      console.log("Error parsing user from local storage:", error);
      return null;
    }
  });
  const [open, setOpen] = useState(false);
  const [changeLogin, setChangeLogin] = useState(true);
  const [forgotPass, setForgotPass] = useState(false);
  const [disable, setDisable] = useState(true);
  const [active, setActive] = useState(false);
  const [mightError, setMightError] = useState(false);
  const user = useSelector(selectUser);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const { signin, signup } = useAuth();
  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
    rePassword: "",
    email: "",
  });

  const handleOpen = () => {
    setChangeLogin(true);
    setForgotPass(false);
    setOpen(true);
  };

  const handleClose = () => {
    setInputs({
      userName: "",
      password: "",
      rePassword: "",
      email: "",
    });
    setMightError(false);
    setOpen(false);
  };

  const handleChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const changeToForgotPass = () => {
    setChangeLogin(false);
    setForgotPass(true);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setActive(true);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setActive(false);
  };

  useEffect(() => {
    if (changeLogin) {
      if (inputs.userName && inputs.password) {
        return setDisable(false);
      }
    } else if (forgotPass && inputs.email) {
      return setDisable(false);
    } else if (inputs.userName && inputs.password && inputs.rePassword) {
      return setDisable(false);
    }

    return setDisable(true);
  }, [inputs, changeLogin]);

  useEffect(() => {
    if (user.data) {
      localStorage.setItem("user", JSON.stringify(user.data));
      setOpen(false);
      setExistUser(user.data);
    }
  }, [user.data]);

  const handleAuth = () => {
    setMightError(true);
    if (changeLogin) {
      signin({ username: inputs.userName, password: inputs.password });
    } else {
      signin({
        username: inputs.userName,
        password: inputs.password,
        rePassword: inputs.rePassword,
      });
    }
  };

  const handleClearUser = () => {
    localStorage.removeItem("user");
    setExistUser(null);
  };

  return (
    <div>
      {!existUser ? (
        <Button
          onClick={handleOpen}
          className="text-white bg-[#FF2423] px-4 py-[5px] rounded-2xl text-[14px] flex items-center mr-6 capitalize hover:opacity-90 hover:bg-[#FF2423]"
        >
          login
        </Button>
      ) : (
        <>
          <Button
            variant="contained"
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            className={`${
              active ? "text-[#FF2423]" : ""
            } hover:bg-transparent [&>span]:m-0 hover:text-[#FF2423] font-bold capitalize`}
          >
            {existUser.fullName}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            disableScrollLock={true}
            className="[&>*>ul]:bg-[#19181C] [&>*>ul]:text-white [&>*>ul]:p-4 [&>*>ul>li]:border-b [&>*>ul>li]:border-white"
            PaperProps={{
              style: {
                width: anchorEl ? anchorEl.clientWidth : undefined,
              },
            }}
          >
            <MenuItem onClick={handleCloseMenu}>
              <Link
                href="#"
                className="hover:text-[#FF2423] hover:border-[#FF2423] border-b border-white w-full py-2"
              >
                Trang cá nhân
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <Link
                href="#"
                className="hover:text-[#FF2423] hover:border-[#FF2423] border-b border-white w-full py-2"
              >
                Túi đồ
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <button
                className="bg-[#FF2423] hover:text-[#FF2423] hover:bg-white w-full mx-auto px-4 py-2 font-bold text-center"
                onClick={handleClearUser}
              >
                Đăng xuất
              </button>
            </MenuItem>
          </Menu>
        </>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock
        disablePortal
      >
        <Box sx={style}>
          {user.loading ? (
            <div className="w-full flex justify-center">
              <CircularProgress />
            </div>
          ) : (
            <>
              <div className="uppercase font-bold py-2 px-4 flex items-baseline justify-center text-[24px]">
                {changeLogin ? (
                  <>
                    <p>Đăng nhập</p>
                    <span className="text-[#FF2423] ml-2">fumeli</span>
                  </>
                ) : forgotPass ? (
                  <p>QUÊN MẬT KHẨU</p>
                ) : (
                  <p>Đăng ký</p>
                )}
              </div>
              <AuthModalInputs
                changeLogin={changeLogin}
                forgotPass={forgotPass}
                inputs={inputs}
                handleChangeInput={handleChangeInput}
              />

              {!forgotPass &&
                (changeLogin ? (
                  <div className="flex justify-between items-baseline">
                    <div className="flex text-[#8B8B8B] [&>*]:mr-2 items-baseline">
                      <p>Nhớ tài khoản</p>
                      <input type="checkbox" onChange={handleChangeInput} />
                    </div>
                    <button
                      className="text-[#FF2423] font-bold"
                      onClick={changeToForgotPass}
                    >
                      Quên mật khẩu?
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between items-baseline">
                    <div className="flex text-[#8B8B8B] [&>*]:mr-2 items-baseline">
                      <input type="checkbox" onChange={handleChangeInput} />
                      <p>
                        Tôi xác nhận rằng tôi trên 18 tuổi và đồng ý với các
                        <Link
                          href="/term"
                          className="text-[#FF2423] font-bold ml-2"
                        >
                          Điều khoản & Điều kiện!
                        </Link>
                      </p>
                    </div>
                  </div>
                ))}

              {mightError && user.error === "invalid_grant" ? (
                <p className="text-[#FF2423]">
                  Tài khoản hoặc mật khẩu không chính xác
                </p>
              ) : null}

              <button
                className="text-white bg-[#FF2423] uppercase w-full px-4 py-[5px] my-4 disabled:bg-gray-500"
                onClick={handleAuth}
                disabled={disable}
              >
                {changeLogin
                  ? "đăng nhập"
                  : forgotPass
                  ? "gửi email xác minh"
                  : "đăng ký ngay"}
              </button>

              {changeLogin && (
                <Button
                  onClick={() => setChangeLogin(false)}
                  className="text-black bg-[#F0F0F0] px-4 py-[5px] font-bold flex items-center capitalize w-full "
                >
                  đăng ký tài khoản
                </Button>
              )}
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
