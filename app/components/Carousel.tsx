import Image from "next/image";
import CarouselItems from "./CarouselItems";
import "../styles/CarouselItems.scss";

export default function Carousel() {
  return (
    <div className="carousel relative">
      <CarouselItems />
    </div>
  );
}
