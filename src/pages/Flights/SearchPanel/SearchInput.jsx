import React, { useState } from "react";
import "./style.css";
import dayjs from "dayjs";
import SearchButton from "../../../components/Buttons/SearchBtn";
import SwapButton from "../../../components/Buttons/SwapButton";
import TripSelection from "../../../components/TripSelection/TripSelection";
import CustomInputBox from "../../../components/CustomInput/CustomInputBox";
import { useFlightContext } from "../../../context/FlightContextProvider/FlightContextProvider";
function SearchInput() {
  const [inputFromValue, setInputFromValue] = useState("");
  const [inputToValue, setInputToValue] = useState("");

  // const { flightDetails, dispatchFlightDetails } = useFlightContext();

  return (
    <div className="p-2">
      <form
        className="bg-white border border-slate-200 shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.2)] rounded-[20px]  my-2 mx-auto
  flex flex-col "
      >
        <div className="border-none p-[20px] gap-2 md:gap-10 flex md:flex-row flex-col rounded-[20px] ">
          <div className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row justify-center items-center">
            <CustomInputBox
              type="text"
              placeholder="Enter city or airport"
              label="From"
              id="from_location"
              inputValue={inputFromValue}
              setInputValue={setInputFromValue}
              className="w-full"
            />
            <SwapButton
              handleSwap={(e) => {
                e.preventDefault();
                const temp = inputFromValue;
                setInputFromValue(inputToValue);
                setInputToValue(temp);
                dispatchJourneyDetails({ type: "swap_location" });
              }}
              className="self-center swap-button flex items-center justify-center bg-white cursor-pointer  z-[1] rounded-xl border shadow-md w-9 h-9 m-[-20px] "
            />
            <CustomInputBox
              type="text"
              placeholder="Enter city or airport"
              label="To"
              id="to_location"
              inputValue={inputToValue}
              setInputValue={setInputToValue}
              className="w-full"
            />
          </div>
          <div className="flex md:gap-4 flex-1 flex-col md:flex-row justify-center items-center">
            {/* <DatePicker className="w-full  relative rounded-lg  focus:outline-none  border-b-2 border-slate-200 hover:border-b-orange-500 focus:border-b-orange-500 active:border-b-orange-500  font-medium text-lg leading-7 text-[rgb(20,24,35)] py-[20px] px-[16px]  " />
            <TravellersCount /> */}
          </div>
          <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
            <SearchButton className="bg-orange-500 flex-1 py-4 px-7 rounded-xl text-white font-semibold w-full" />
          </div>
        </div>
        <div>{/* <SpecialFares /> */}</div>
      </form>
    </div>
  );
}

export default SearchInput;
