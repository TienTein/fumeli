import Image from "next/image";
import contextBg from "@/public/images/another/partnerBg.png";
import partner1 from "@/public/images/another/introductcustomer1.png";
import partner2 from "@/public/images/another/introductcustomer2.png";
import partner3 from "@/public/images/another/introductcustomer3.png";
import partner4 from "@/public/images/another/introductcustomer4.png";
import partner5 from "@/public/images/another/introductcustomer5.png";
import partner6 from "@/public/images/another/introductcustomer6.png";
import partner7 from "@/public/images/another/introductcustomer7.png";
import partner8 from "@/public/images/another/introductcustomer8.png";

export default function IntroPartner() {
  return (
    <div className="my-[10vh]">
      <h1 className="text-3xl ml-[10vw] mb-8">ĐỐI TÁC</h1>
      <div className="relative w-full z-10">
        <Image
          src={contextBg}
          alt=""
          className="absolute w-full h-full top-0 left-0 -z-50"
        />
        <div className="flex [&>*]:w-[12%] [&>*]:h-[80px] justify-between py-5 border-y-[1px] border-white">
          <Image src={partner1} alt="" />
          <Image src={partner2} alt="" />
          <Image src={partner3} alt="" />
          <Image src={partner4} alt="" />
          <Image src={partner5} alt="" />
          <Image src={partner6} alt="" />
          <Image src={partner7} alt="" />
          <Image src={partner8} alt="" />
        </div>
      </div>
    </div>
  );
}
