import { IoLocationOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
export const Sugg = (props) => {
  let data;
  const { handleweat, inputSuggPart } = props;
  const [array, setArray] = useState([]);
  const closseSugg = () => {
    setArray([]);
  };
  const gitFetcher = async () => {
    const url = `https:api.mapbox.com/geocoding/v5/mapbox.places/${inputSuggPart}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`;

    const result = await axios(url);
    data = result.data.features.slice(0, 1).map((user) => {
      return user.place_name;
    });
  };
  useEffect(() => {
    const abortController = new AbortController();
    abortController.signal;
    gitFetcher().then((res) => setArray(data));

    return () => abortController.abort();
  }, [inputSuggPart]);

  return (
    <div
      // onClick={gitFetcher}
      className="absolute z-50 top-[130px] left-[60px] flex bg-white opacity-[0.93] 	 w-[320px] shadow-2xl  rounded-lg text-[30px]"
    >
      <div>
        <div className="w-[100%]  ">
          {array.map((datas, id) => {
            const handlespeech = () => {
              const speech = new SpeechSynthesisUtterance();
              speech.lang = "en";
              speech.text = `${datas}`;
              window.speechSynthesis.speak(speech);
            };
            return (
              <div className="flex text-[30px]" key={id}>
                <IoLocationOutline className="mx-[10px] mt-[10px]" />
                <div onClick={() => handleweat(datas.split(",")[0])} key={id}>
                  <div onClick={() => closseSugg()}>
                    <div onClick={() => handlespeech()}>{datas}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
