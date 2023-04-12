import MissionSlide from "./MissionSlide";
import TopRank from "../components/TopRank";
import DailyMissions from "./DailyMissions";
import Videos from "../components/Videos";

export default function page() {
  return (
    <div className="mission-page">
      <TopRank />
      <MissionSlide />
      <DailyMissions />
      <Videos />
    </div>
  );
}
