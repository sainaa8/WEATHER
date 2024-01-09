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
    tempClr,
    mood,
    moodClr,
    iconClr,
  } = props;
  return (
    <div
      style={{ right: `${right}`, left: `${left}`, backgroundColor: `${bg}` }}
      className="absolute flex flex-col justify-between z-20 w-[250px] h-[400px] bg-red-300 mt-[136px] rounded-xl"
    >
      <div className="flex px-[20px] mt-[20px]">
        <div>
          <div style={{ color: `${textclr}` }} className="text-[18px]">
            January 9, 2024
          </div>
          <div style={{ color: `${textclr2}`, fontSize: `${textSize}` }}>
            Ulaanbaatar
          </div>
        </div>
        <div style={{ color: `${textclr2}` }} className="text-[25px] mt-[27px]">
          <IoLocationOutline />
        </div>
        <div></div>
      </div>
      <div className="px-[20px] mb-[20px] leading-[49px]">
        <div style={{ color: `${tempClr}` }} className="text-[60px]">
          {temp}&deg;
        </div>
        <div style={{ color: `${moodClr}` }} className="text-[20px] mb-[10px] ">
          {mood}
        </div>
        <div className="flex w-[100%] gap-[30px] text-[25px]">
          <CiHome style={{ color: `${iconClr}` }} />
          <IoLocationOutline className="text-gray-600" />
          <FaRegHeart className="text-gray-600" />
          <CgProfile className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};
