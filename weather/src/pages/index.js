import { Search } from "@/Components/Search-Part";
import { Side } from "@/Components/BlackWhiteSide";
import { Sugg } from "@/Components/Suggestion";
import Image from "next/image";
import { Inside } from "@/Components/Inside";
import Logos from "@/Components/PineconoLogo";
// import Home from "@/Components/Test";
import { useState } from "react";
import Round from "@/Components/Round";

export default function Home(props) {
  const [local, setLocal] = useState("");
  const [state, setState] = useState({});
  const [input, setInput] = useState("");
  const [temps, setTemps] = useState({});
  
  const handleweater = async (cityName) => {
    const api_key = "7c91776fb1267161889e298c3e7ceb4b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=en&units=Metric&appid=${api_key}`;
    const waitMe = await fetch(url);
    const data = await waitMe.json();
    const dayState = data.weather[0].description;
    const nightState = data.weather[0].main;
    const tempurNight = data.main.temp_max;
    const tempurDay = data.main.temp_min;
    const location = data.name;
    console.log(data);

    setLocal(location);
    setState({ dayState, nightState });
    setTemps({ tempurDay, tempurNight });
    setInput(cityName);
    // handlespeech();
  };
  const rounds = [
    { w: "[90px]", h: "[90px]", margint: "[250px]" },
    // { w: "[180px]", h: "[180px]", margint: "[150px]" },
    // { w: "[90px]", h: "[90px]", margint: "[250px]" },
    // { w: "[90px]", h: "[90px]", margint: "[250px]" },
  ];
  return (
    <div className="flex justify-center mt-[200px]  ">
      <div className="relative px-[40px] py-[40px] w-fit z bg-stone-800 flex justify-center">
        <Logos dayImage="/logoleft.svg" dayShadow="/logoright.svg" />
        {/* <div className="absolute z-10">
          {rounds.map((el, i) => {
            return (
              <div key={i}>
                <Round width={el.w} height={el.h} />
              </div>
            );
          })}
        </div> */}
        <Sugg inputSuggPart={input} handleweat={handleweater} />
        <div>
          <Search SetIputSearcgPart={setInput} input={input} />
        </div>
        <Image
          src="/bigsun.png"
          width={130}
          height={130}
          className="absolute z-40 top-[270px] left-[180px] drop-shadow-2xl"
        />
        <div className="absolute z-30 top-[270px] left-[180px] w-[130px] h-[130px] bg-yellow-300 blur-xl rounded-full"></div>
        <Image
          src="/bigmoon.png"
          width={130}
          height={130}
          className="absolute z-40 top-[270px] right-[180px]"
        />
        <div className="absolute z-30 w-[130px] h-[130px] rounded-full top-[270px] right-[180px] bg-white blur-xl"></div>
        <Image
          src="/sun.png"
          width={100}
          height={100}
          className="absolute z-[10] top-[140px] left-[70px] "
        />
        <Image
          src="/moon.svg"
          width={120}
          height={120}
          className="absolute z-[10] top-[500px] right-[70px] "
        />{" "}
        <Inside
          left="120px"
          bg="#fbfbfc"
          textclr="black"
          textSize="34px"
          temp={temps.tempurDay}
          check={false}
          mood={state.dayState}
          moodClr="#ff8d28"
          locationInIsidePard={local}
        />
        <Inside
          right="120px"
          bg="#111724"
          textclr="#777e8b"
          textclr2="white"
          textSize="34px"
          temp={temps.tempurNight}
          check={true}
          mood={state.nightState}
          moodClr="#6b70ba"
          locationInIsidePard={local}
        />
        <div className="flex relative">
          <Side bg="#F3F4F6;" radius="13px" />
          <Side bg="#0F141E;" blackRadius="13px" />
        </div>{" "}
      </div>
    </div>
  );
}
