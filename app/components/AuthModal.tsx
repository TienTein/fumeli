"use client";

import { ChangeEvent, useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";
import { Alert } from "@mui/material";
import AuthModalInputs from "./AuthModalInputs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (signinContent: string, signUpContent: string) => {
    return isSignin ? signinContent : signUpContent;
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (isSignin) {
      if (inputs.password && inputs.email) {
        return setDisabled(false);
      }
    } else if (
      inputs.firstName &&
      inputs.lastName &&
      inputs.email &&
      inputs.city &&
      inputs.phone &&
      inputs.password
    ) {
      return setDisabled(false);
    }

    setDisabled(true);
  }, [inputs]);

  return (
    <div>
      <button
        className={`${renderContent(
          "text-white bg-[#FF2423] px-4 py-[5px] rounded-2xl text-[14px] flex items-center mr-6",
          ""
        )} border p-1 px-4 rounded mr-3`}
        onClick={handleOpen}
      >
        {renderContent("Login", "Sign up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2">
            <div className="font-bold uppercase text-center pb-2 border-b mb-2">
              <p className="text-xl">
                {renderContent("Đăng nhập", "Create Account")}
                {isSignin ? (
                  <span className="text-[#FF2423] ml-2">fumeli</span>
                ) : null}
              </p>
            </div>
            <div className="m-auto">
              <AuthModalInputs
                inputs={inputs}
                handleChangeInput={handleChangeInput}
                isSignin={isSignin}
              />
              <button
                className="bg-red-600 uppercase w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-500"
                disabled={disabled}
              >
                {renderContent("Sign In", "Create Account")}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
