import React from "react";

export default function ContactFormInputs({ inputs, handleChangeInput }) {
  return (
    <div className="flex flex-col [&>*]:bg-black [&>*]:mb-6 [&>*]:p-2 [&>*]:border-white [&>*]:border-[1px]">
      <input
        type="fullName"
        placeholder="Họ và tên *"
        value={inputs.fullName}
        onChange={handleChangeInput}
        name="fullName"
      />
      <input
        type="email"
        placeholder="Email *"
        value={inputs.email}
        onChange={handleChangeInput}
        name="email"
      />
      <input
        type="phone"
        placeholder="Số điện thoại *"
        value={inputs.phone}
        onChange={handleChangeInput}
        name="phone"
      />
      <textarea
        type="context"
        placeholder="Nhập nội dung *"
        value={inputs.context}
        onChange={handleChangeInput}
        name="context"
        className="resize-none h-48"
      />
    </div>
  );
}
