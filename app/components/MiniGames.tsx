"use client";
import { useState } from "react";
import Image from "next/image";
import miniGamesBg from "../../public/images/minigamebg.png";
import ImageItem1 from "../../public/images/image 4.png";
import ImageItem2 from "../../public/images/image 5.png";
import ImageItem3 from "../../public/images/image 6.png";
import Link from "next/link";
import GLPagination from "./GLPagination";

export default function MiniGames() {
  const images = [
    { src: ImageItem1, label: "Vua bóng đá" },
    { src: ImageItem2, label: "Bắn trứng khủng long" },
    { src: ImageItem3, label: "Free Fire" },
  ];
  const [pages, setPages] = useState(3);
  const [page, setPage] = useState(1);

  return (
    <div className="w-full h-[80vh] mx-auto relative text-white">
      <div className="w-full h-full absolute top-0 left-0">
        <Image src={miniGamesBg} alt="" className="w-full h-full" />
      </div>

      <div className="w-[80%] h-full mx-auto z-10 absolute top-0 left-0 right-0 bottom-0 my-10">
        <h1 className="mb-6 text-5xl font-bold uppercase">video hot</h1>

        <div className="grid grid-cols-3">
          {images &&
            images.map((img, index) => (
              <div
                className="flex flex-col items-center justify-center"
                key={index}
              >
                <Link href="#" className="w-[80%] h-[70%] object-cover">
                  <Image src={img.src} alt="" className="w-full h-full" />
                </Link>
                <Link href="#" className="mt-6 font-bold">
                  {img.label}
                </Link>
              </div>
            ))}
        </div>

        <GLPagination pages={pages} setPage={setPage} />
      </div>
    </div>
  );
}
