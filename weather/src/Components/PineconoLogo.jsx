import Image from "next/image";
const Logos = (props) => {
    const {dayImage, dayShadow}= props;
  return (
    <div>
      <div className=" absolute z-10 mt-[250px] ml-[355px] w-[90px] h-[90px] gap-[10px] flex items-center justify-center   bg-white rounded-full">
        <Image src={dayImage} width={30} height={60} />
        <Image src={dayShadow} width={30} height={60} />
      </div>
    </div>
  );
};
export default Logos;
