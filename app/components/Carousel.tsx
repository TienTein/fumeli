import Image from "next/image";
import bgCarousel from "../../public/images/img13 1.png";
import CarouselItems from "./CarouselItems";
import "../styles/CarouselItems.scss";

export default function Carousel() {
  return (
    <div className="relative carousel">
      <div className="w-full h-[70vh] relative">
        <Image
          src={bgCarousel}
          alt=""
          className="w-full h-full absolute top-0 left-0"
        />
      </div>
      <CarouselItems />
    </div>
  );
}
