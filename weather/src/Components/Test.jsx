import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";
 
import { useState, useEffect } from "react";
 
export const Search = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
 
  //   useEffect(() => {
  //     const gitFetcher = async () => {
  //       // const api_key = "7c91776fb1267161889e298c3e7ceb4b";
  //       const url = `https:api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`;
 
  //       const result = await axios(url);
  //       const data = result.data.features.map((user) => {
  //         return user.place_name;
  //       });
  //       console.log(data);
  //       setArray(data);
  //       gitFetcher();
  //     };
  //   }, [input]);
 
  const gitFetcher = async () => {
    // const api_key = "7c91776fb1267161889e298c3e7ceb4b";
    const url = `https:api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`;
 
    const result = await axios(url);
    const data = result.data.features.map((user) => {
      return user.place_name;
    });
    console.log(data);
    setArray(data);
  };
 
  return (
    <div>
      <div className="w-[512px] h-[80px] px-[24px] py-[16px] bg-gray-100 flex rounded-[48px]">
        <IoIosSearch
          className="w-[48px] h-[48px] text-gray-400"
          onChange={gitFetcher}
          width={48}
          height={48}
        />
        <input
          className="w-[400px]"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>
      </div>
      <div className="w-[512px] h-[200px] bg-gray-100 rounded-[24px]">
        <div className="w-[100%]  bg-red-300">
          {array.map((datas, id) => {
            return (
              <div className="" key={id}>
                {datas}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};