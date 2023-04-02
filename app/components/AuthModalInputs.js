"use client";

import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function AuthModalInputs({
  inputs,
  handleChangeInput,
  changeLogin,
  forgotPass,
}) {
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);

  return (
    <>
      <div className="text-[13px] [&>input]:my-2 [&>input]:rounded-sm [&>input]:px-2 [&>input]:py-[3px] [&>input]:border [&>input]:border-[#8B8B8B] [&>input]:w-full">
        {!forgotPass && (
          <>
            <input
              type="text"
              placeholder="Tài khoản"
              value={inputs.userName}
              onChange={handleChangeInput}
              name="userName"
            />
            <div className="relative w-full ">
              <input
                type={`${showPass ? "text" : "password"}`}
                placeholder="Mật khẩu"
                value={inputs.password}
                onChange={handleChangeInput}
                name="password"
                className="w-full border border-[#8B8B8B] my-2 rounded-sm px-2 py-[3px]"
              />
              {showPass ? (
                <VisibilityIcon
                  className="absolute right-2 top-[25%]"
                  onClick={() => setShowPass(false)}
                />
              ) : (
                <VisibilityOffIcon
                  className="absolute right-2 top-[25%]"
                  onClick={() => setShowPass(true)}
                />
              )}
            </div>
          </>
        )}

        {!changeLogin && !forgotPass ? (
          <>
            <div className="relative w-full">
              <input
                type={`${showRePass ? "text" : "password"}`}
                placeholder="Xác nhận mật khẩu"
                value={inputs.rePassword}
                onChange={handleChangeInput}
                name="rePassword"
                className="w-full border border-[#8B8B8B] my-2 rounded-sm px-2 py-[3px]"
              />
              {showRePass ? (
                <VisibilityIcon
                  className="absolute right-2 top-[25%]"
                  onClick={() => setShowRePass(false)}
                />
              ) : (
                <VisibilityOffIcon
                  className="absolute right-2 top-[25%]"
                  onClick={() => setShowRePass(true)}
                />
              )}
            </div>
            <input
              type="text"
              placeholder="Họ và tên"
              value={inputs.fullName}
              onChange={handleChangeInput}
              name="fullName"
            />
            <input
              type="email"
              placeholder="Email"
              value={inputs.email}
              onChange={handleChangeInput}
              name="email"
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              value={inputs.phone}
              onChange={handleChangeInput}
              name="phone"
            />
            <input
              type="text"
              placeholder="mã giới thiệu"
              className="bg-[#F0F0F0]"
              value={inputs.referralCode}
              onChange={handleChangeInput}
              name="referralCode"
            />
          </>
        ) : forgotPass ? (
          <>
            <div className="grid grid-cols-2 w-full text-[#8B8B8B]">
              <p>Không đăng nhập được?</p>
              <p>
                Để lấy lại mật khẩu bạn vui lòng cung cấp Email đăng ký/Liên kết
                tài khoản:
              </p>
            </div>
            <input
              type="email"
              placeholder="Email"
              value={inputs.email}
              onChange={handleChangeInput}
              name="email"
            />
          </>
        ) : null}
      </div>
    </>
  );
}
