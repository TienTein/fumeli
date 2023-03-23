import Carousel from "./components/Carousel";
import Missions from "./components/Missions";
import Matchs from "./components/Matchs";
import Videos from "./components/Videos";
import MiniGames from "./components/MiniGames";
import TopRank from "./components/TopRank";

export default function Home() {
  return (
    <>
      <TopRank />
      <Carousel />
      <Missions />
      <Matchs />
      <Videos />
      <MiniGames />
    </>
  );
}
