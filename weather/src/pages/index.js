import { Search } from "@/Components/Search-Part";
import { Side } from "@/Components/BlackWhiteSide";
import { Sugg } from "@/Components/Suggestion";
import Image from "next/image";
import { Inside } from "@/Components/Inside";
export default function Home() {
  return (
    <div className="flex justify-center mt-[200px]  ">
      <div className="relative px-[40px] py-[40px] w-fit bg-stone-800">
        <Search />
        {/* <Sugg /> */}
        <Image
          src="/bigsun.png"
          width={130}
          height={130}
          className="absolute z-30 top-[270px] left-[180px] drop-shadow-2xl"
        />
        <Image
          src="/bigmoon.png"
          width={130}
          height={130}
          className="absolute z-30 top-[270px] right-[180px]"
        />
        <Image
          src="/sun.png"
          width={100}
          height={100}
          className="absolute z-[10] top-[140px] left-[70px]"
        />
        <Image
          src="/moon.svg"
          width={120}
          height={120}
          className="absolute z-[10] top-[500px] right-[70px]"
        />{" "}
        <Inside
          left="120px"
          bg="#fbfbfc"
          textclr="black"
          textSize="34px"
          temp="-11"
          tempClr="black"
          mood="Bright"
          moodClr="#ff8d28"
          iconClr="black"
        />
        <Inside
          right="120px"
          bg="#111724"
          textclr="#777e8b"
          textclr2="white"
          textSize="34px"
          temp={"-20"}
          tempClr="#b3b6ba"
          mood="Clear"
          moodClr="#6b70ba"
          iconClr="white"
        />
        <div className="flex">
          <Side bg="#F3F4F6;" radius="13px" />
          <Side bg="#0F141E;" blackRadius="13px" />
        </div>{" "}
      </div>
    </div>
  );
}
