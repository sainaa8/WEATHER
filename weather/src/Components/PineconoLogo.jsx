import React from "react";

import Image from "next/image";
const Logos = (props) => {
  const { dayImage, dayShadow } = props;
  return (
    <div>
      <div className="absolute z-10 mt-[250px] ml-[355px] w-[90px] h-[90px] ">
        <div className="logo-corner" />
      </div>
      <div className=" absolute z-10 mt-[250px] ml-[355px] w-[90px] h-[90px] gap-[10px] flex items-center justify-center   bg-white rounded-full">
        <Image src={dayImage} width={30} height={60} />
        <Image src={dayShadow} width={30} height={60} />
      </div>
    </div>
  );
};
export default Logos;

// const Home = () => {
//   return (
// <div className="h-screen flex">
// <div className="bg-[yellow] flex-1">left</div>
// <div className="bg-[green] flex-1">right</div>
// <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40">
// <div className="logo-corner" />
// </div>
// <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-40 w-40 rounded-full flex items-center justify-center">Logo</div>
// </div>
//   );
