import Image from "next/image";
import DailyBg from "../../../public/images/bg-top 1.png";
import DailyTitle from "../../../public/images/another/bgDailyMission.png";

export default function page() {
  return (
    <div>
      <div className="w-screen relative z-10">
        <Image
          src={DailyBg}
          alt=""
          className="w-full h-full absolute top-0 left-0"
        />
        <Image src={DailyTitle} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}
