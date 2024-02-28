import { Poppins } from "next/font/google";
import Image from "next/image";
import Image1 from "@/app/assets/test-wide1.jpg";
import Image2 from "@/app/assets/test-4span1.png";
import Image3 from "@/app/assets/test-6span1.png";
import Image4 from "@/app/assets/test-6span2.png";
import Image5 from "@/app/assets/test-8span1.png";
import ImageWrapper from "@/components/image-fixed-size-wrapper";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
  return (
    <section className="centered w-full">
      <div className="my-5 grid w-full max-w-[1200px] grid-cols-12 gap-1 text-black *:relative *:overflow-hidden lg:gap-5">
        <div className="relative col-span-12 min-h-[484px]">
          <div className="centered relative z-10 h-full justify-start text-3xl">
            안녕하세요
          </div>
          <div className="absolute right-0 top-0 z-0 w-[900px] overflow-hidden">
            <Image
              src={Image1}
              alt="첫번째 이미지"
              className="object-none"
              width={900}
            />
          </div>
        </div>
        <div className="centered col-span-6 min-h-[300px]">
          <div className="relative z-10 h-full min-w-[150px] bg-red-100 text-center text-xl">
            아이고
          </div>
          <div className=" centered right-0 h-full w-full min-w-[100px] flex-1">
            <ImageWrapper src={Image2} alt="두번째 이미지" />
          </div>
        </div>
        <div className="col-span-6 min-h-48">h</div>
        <div className="col-span-5 min-h-48">h</div>
        <div className="col-span-7 min-h-48">h</div>
      </div>
    </section>
  );
}
