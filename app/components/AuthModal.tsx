"use client";

import React, { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";
import Link from "next/link";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isLogin }: { isLogin: boolean }) {
  const [open, setOpen] = useState(false);
  const [changeLogin, setChangeLogin] = useState(isLogin);
  const [forgotPass, setForgotPass] = useState(false);

  const handleOpen = () => {
    setChangeLogin(true);
    setForgotPass(false);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const changeToForgotPass = () => {
    setChangeLogin(false);
    setForgotPass(true);
  };

  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
    rePassword: "",
    fullName: "",
    email: "",
    phone: "",
    referralCode: "",
  });

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="text-white bg-[#FF2423] px-4 py-[5px] rounded-2xl text-[14px] flex items-center mr-6 capitalize hover:opacity-90 hover:bg-[#FF2423]"
      >
        login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                    <Link href="#" className="text-[#FF2423] font-bold ml-2">
                      Điều khoản & Điều kiện!
                    </Link>
                  </p>
                </div>
              </div>
            ))}

          <button className="text-white bg-[#FF2423] uppercase w-full px-4 py-[5px] my-4">
            {changeLogin
              ? "đăng nhập"
              : forgotPass
              ? "gửi email xác minh"
              : "đăng ký ngay"}
          </button>

          {changeLogin && (
            <Button
              onClick={() => setChangeLogin(false)}
              className="text-black bg-[#F0F0F0] px-4 py-[5px] font-bold flex items-center capitalize w-full"
            >
              đăng ký tài khoản
            </Button>
          )}
        </Box>
      </Modal>
    </div>
  );
}
