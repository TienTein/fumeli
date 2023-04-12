"use client";
import React, { useState } from "react";

import Modal from "@mui/material/Modal";
import "../styles/RuleModal.scss";
export default function RuleModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className="border border-[#FF2423] w-fit">
        <div className="bg-[#FF2423] w-full h-full border border-black py-1 px-8">
          Thể lệ
        </div>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-[60vw] h-[80vh] absolute top-0 bottom-0 left-0 right-0 m-auto bg-white">
          <div className="w-full bg-[#FF2423] uppercase font-bold text-center text-xl py-4 text-white">
            <p>Thể lệ</p>
          </div>
          <div className="w-full h-[70vh] overflow-y-scroll scroll-modal">
            <div className="[&>span]:text-[#FF2423] px-[10%] py-[5%] [&>p]:mb-4 flex flex-col">
              <p>
                Nằm trong chuỗi chương trình kỷ niệm 10 năm hình thành và phát
                triển của HOCMAI {`(`}2007-2017{`)`}, Vòng Quay Vi Diệu là hoạt
                động nhằm chào mừng THÀNH VIÊN THỨ 3 TRIỆU với lời cảm ơn tới
                tất cả các bạn học sinh trên cả nước đã tin tưởng, đồng hành
                cùng HOCMAI trong suốt thời gian qua. Tham gia Vòng quay vi
                diệu, các bạn học sinh có cơ hội nhận được nhiều phần quà giá
                trị sau
              </p>
              <span>I. Quà tặng “VÒNG QUAY MAY MẮN”</span>
              <span>1. Thời gian</span>
              <p>Từ ngày 03/10/2017 đến hết ngày 31/10/2017</p>
              <span>2. Đối tượng tham gia</span>
              <p>Tất cả học sinh trên cả nước có tài khoản thành viên HOCMAI</p>
              <span>3. Quà tặng hấp dẫn</span>

              <table className="[&>*>tr>*]:border [&>*>tr>*]:border-black [&>*>tr>*]:text-center [&>*>tr>td:nth-child(2)]:text-left [&>*>tr>td:nth-child(2)]:px-3 my-4">
                <thead className="text-[#FF2423]">
                  <tr>
                    <th>STT</th>
                    <th>Phần thưởng</th>
                    <th>Tỷ lệ</th>
                    <th>Trị giá</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Quà tặng màn hình máy tính gaming</td>
                    <td>5%</td>
                    <td>30.000.000 VNĐ</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Giá trị tiền thưởng 1</td>
                    <td>15%</td>
                    <td>30.000.000 VNĐ</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Quà tặng áo thun</td>
                    <td>15%</td>
                    <td>30.000.000 VNĐ</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Quà tặng chuột máy tính gaming</td>
                    <td>35%</td>
                    <td>30.000.000 VNĐ</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Quà tặng giá trị tiền thưởng 2</td>
                    <td>10%</td>
                    <td>30.000.000 VNĐ</td>
                  </tr>
                </tbody>
              </table>

              <span>4. Các bước tham gia</span>

              <p>
                Nằm trong chuỗi chương trình kỷ niệm 10 năm hình thành và phát
                triển của HOCMAI {`(`}2007-2017{`)`}, Vòng Quay Vi Diệu là hoạt
                động nhằm chào mừng THÀNH VIÊN THỨ 3 TRIỆU với lời cảm ơn tới
                tất cả các bạn học sinh trên cả nước đã tin tưởng, đồng hành
                cùng HOCMAI trong suốt thời gian qua. Tham gia Vòng quay vi
                diệu, các bạn học sinh có cơ hội nhận được nhiều phần quà giá
                trị sau
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
