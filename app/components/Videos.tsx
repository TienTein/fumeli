import VideosCarousel from "./VideosCarousel";
import "../styles/Videos.scss";

export default function Videos() {
  return (
    <div className="w-screen h-[60vh] relative text-white videos">
      <div className="w-1/3  ml-[10vw]">
        <h1 className="mb-6 text-5xl font-bold uppercase">video hot</h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          esse. Autem suscipit, explicabo quia iusto ipsa nemo.
        </p>
      </div>

      <VideosCarousel />
    </div>
  );
}
