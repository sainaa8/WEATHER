import { IoIosSearch } from "react-icons/io";
export const Search = () => {
  return (
    <div className="absolute z-30 top-[60px] left-[60px] flex items-center bg-white w-[320px] shadow-2xl h-[50px] rounded-3xl text-[20px]">
      <div className="text-zinc-400 flex items-center ml-[20px]">
        <IoIosSearch />
      </div>
      <input className="ml-[10px] w-[200px] h-[40px] border-none"></input>
    </div>
  );
};
