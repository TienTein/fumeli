"use client";
import Image from "next/image";
import contextBg from "../../public/images/another/introbg.png";
import bg from "../../public/images/bg-top 1.png";
import { useMediaQuery, useTheme } from "@mui/material";

export default function IntroContext() {
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchLG = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <div className="mx-auto z-10 relative py-[10vh] px-[10vw]">
      <Image
        src={bg}
        alt=""
        className="w-full h-full absolute top-0 left-0 -z-50"
      />
      <h1 className="text-3xl text-center">
        GIỚI THIỆU VỀ DỰ ÁN <span className="text-[#FF2423]">FUMELI</span>
      </h1>

      <div
        className={`flex w-full gap-8 my-10 ${
          isMatchLG ? "flex-col items-center" : ""
        }`}
      >
        <Image
          src={contextBg}
          alt=""
          className="h-full shadow-md shadow-slate-500"
        />
        <div className="break-words [&>*]:mb-2 text-[17px]">
          <p>
            FUMELI là dự án kết nối cộng đồng mang lại lợi ích hấp dẫn, lâu dài
            cho các thành viên thông qua việc tham gia các hoạt động online được
            ra mắt thường xuyên trên website https://fumeli.com
          </p>
          <p>
            Thành viên FUMELI có thể tận dụng thời gian rảnh rỗi để thực hiện
            các nhiệm vụ được giới thiệu theo mỗi ngày, tuần, hoặc tháng. Tùy
            theo tính chất, độ khó khác nhau, mỗi nhiệm vụ sẽ có phần thưởng cụ
            thể:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Điểm thưởng nhiệm vụ: dùng để đổi phần thưởng, tặng điểm cho bạn
              bè cũng là thành viên Fumeli, hoặc quay số trúng thêm điểm/phần
              thưởng khác.
            </li>
            <li>
              Quà tặng nhiệm vụ: đối với các nhiệm vụ lớn, ngoài điểm thưởng cơ
              bản sẽ có thêm các quà tặng giá trị khác kèm theo khi thành viên
              hoàn thành nhiệm vụ.
            </li>
          </ul>
          <p>
            Phần thưởng người tham gia nhận được rất đa dạng và có giá trị sử
            dụng cao:
          </p>
          <ul className="list-disc ml-6">
            <li>Thẻ game, thẻ điện thoại.</li>
            <li>Hiện vật.</li>
            <li> Code game, tài khoản vip sử dụng các sản phẩm, dịch vụ.</li>
            <li>Coupon, voucher.</li>
          </ul>
          <p>
            Hãy nhanh tay đăng ký thành viên, tham gia vào cộng đồng FUMELI từ
            ngay bây giờ để có cơ hội sở hữu những phần thưởng hấp dẫn, giá trị
            mỗi ngày mỗi tuần từ FUMELI và các đối tác đồng hành cùng chúng tôi!
          </p>
        </div>
      </div>
      {/* end context */}
      <div
        className={`rounded-md bg-black border-[1px] border-white  mx-auto p-[20px] [&>*]:flex-col [&>*]:w-fit [&>*>span]:font-bold [&>*>span]:text-3xl [&>*>span]:mb-2 [&>*]:flex [&>*]:items-center ${
          isMatchMD
            ? "grid grid-cols-2 [&>*]:w-full [&>*]:my-2 w-[80%]"
            : "flex justify-around w-[50%]"
        }`}
      >
        <div>
          <span>70%</span>
          <p>ACCURACY</p>
        </div>
        <div>
          <span>68%</span>
          <p>GAMES</p>
        </div>
        <div>
          <span>91%</span>
          <p>CLIENTS</p>
        </div>
        <div>
          <span>59%</span>
          <p>AWARDS</p>
        </div>
      </div>
    </div>
  );
}
