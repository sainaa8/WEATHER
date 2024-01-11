import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import { CiHome } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
export const Inside = (props) => {
  const {
    right,
    left = "",
    bg,
    textclr,
    textclr2,
    textSize,
    temp,
    locationInIsidePard,
    mood,
    moodClr,

    check = true,
  } = props;
  let newDate = new Date();
  const {
    month = newDate.toLocaleString("default", { month: "long" }),
    date = newDate.getDate(),
    year = newDate.getFullYear(),
    location = "America",
  } = props;

  return (
    <div
      style={{ right: `${right}`, left: `${left}`, backgroundColor: `${bg}` }}
      className="absolute flex flex-col justify-between z-20 w-[250px] h-[400px] bg-red-300 mt-[136px] rounded-xl opacity-[0.93]"
    >
      <div className="flex px-[20px] mt-[20px]">
        <div>
          <div style={{ color: `${textclr}` }} className="text-[18px]">
            {month} {date} {year}
          </div>
          <div style={{ color: `${textclr2}`, fontSize: `${textSize}` }}>
            {locationInIsidePard}
          </div>
        </div>
        <div style={{ color: `${textclr2}` }} className="text-[25px] mt-[27px]">
          <IoLocationOutline />
        </div>
        <div></div>
      </div>
      <div className="px-[20px] mb-[20px] leading-[49px]">
        <div
          className={`text-[60px] ${
            check
              ? " text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-gray-800"
              : "text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-gray-300"
          }  `}
        >
          {temp}&deg;
        </div>
        <div style={{ color: `${moodClr}` }} className="text-[20px] mb-[10px] ">
          {mood}
        </div>
        <div className="flex w-[100%] gap-[30px] text-[25px]  text-gray-600 ">
          <CiHome
            className={`${
              check
                ? "hover:text-white hover:scale-[1.3]"
                : "hover:text-black hover:scale-[1.3]"
            }`}
          />
          <IoLocationOutline
            className={`${
              check
                ? "hover:text-white hover:scale-[1.3]"
                : "hover:text-black hover:scale-[1.3]"
            }`}
          />
          <FaRegHeart
            className={`${
              check
                ? "hover:text-white hover:scale-[1.3]"
                : "hover:text-black hover:scale-[1.3]"
            }`}
          />
          <CgProfile
            className={`${
              check
                ? "hover:text-white hover:scale-[1.3]"
                : "hover:text-black hover:scale-[1.3]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
