import Image from "next/image";
import bgMission from "../../public/images/bg-top 1.png";
import MissionItems from "./MissionItems";

export default function Missions() {
  return (
    <div className="w-screen h-[120vh] relative">
      <Image
        src={bgMission}
        alt=""
        className="w-full h-full absolute top-0 left-0"
      />

      <MissionItems />
    </div>
  );
}
