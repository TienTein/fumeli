import Image from "next/image";
import mission1 from "../../public/images/mission1.png";
import mission2 from "../../public/images/mission2.png";
import mission3 from "../../public/images/mission3.png";
import mission4 from "../../public/images/mission4.png";

export default function MissionItems() {
  return (
    <div className="border-[#707070] border-y-[1px] w-[80vw] h-[70%] absolute top-40 right-0 left-0 bottom-0 m-auto grid grid-cols-3 gap-4 py-10">
      <div className="flex flex-col text-white">
        <h1 className="mb-6 text-5xl font-bold">Nhiệm vụ</h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          esse. Autem suscipit, explicabo quia iusto ipsa nemo.
        </p>
        <button className="border-[#FF2423] border-[1px] border-b-4 bg-transparent w-fit px-6 mb-6 hover:border-white hover:bg-[#FF2423] hover:border-b-[1px] transition-[500ms]">
          Xem thêm
        </button>
      </div>

      <Image src={mission1} alt="" />
      <Image src={mission2} alt="" />

      <Image src={mission3} alt="" />
      <Image src={mission4} alt="" />
      <div className="flex flex-col text-white items-end">
        <h1 className="mb-6 text-5xl font-bold">Nhiệm vụ nổi bật</h1>
        <p className="mb-6 text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          esse. Autem suscipit, explicabo quia iusto ipsa nemo.
        </p>
        <button className="border-[#FF2423] border-[1px] border-b-4 bg-transparent w-fit px-6 mb-6 hover:border-white hover:bg-[#FF2423] hover:border-b-[1px] transition-[500ms]">
          Xem thêm
        </button>
      </div>
    </div>
  );
}
