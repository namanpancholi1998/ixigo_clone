import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";
import InputBox from "../../../../components/CustomInput/CustomInputBox";
import SwapButton from "../../../../components/Buttons/SwapButton";
import DateSelect from "../../../../components/SelectDate/SelectDate";
import TravelersCount from "../../../../components/Counter/TravelersCount";
import SearchButton from "../../../../components/Buttons/SearchBtn";
import "./style.css";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";

import { useFlightsContext } from "../../../../context/FlightContextProvider/FlightContextProvider";

function UpdatedSearchPanel(flightsResult, setFlightsResult) {
  const { searchQuery } = useParams();
  const encodedString = searchQuery ?? "";
  const extractedEncodedPath = encodedString.replace("air-", "");
  const decodedPath = atob(extractedEncodedPath);
  const [location, date, counts] = decodedPath?.split("--");
  const [source, destination] = location.split("-");
  const [adult, child, infant] = counts?.split("-");

  // To Make update Search
  const [inputSourceValue, setInputSourceValue] = useState(source);
  const [inputDestValue, setInputDestValue] = useState(destination);
  const [selectedDate, setSelectedDate] = useState(date);
  const { flightsDetails, dispatchFlightsDetails } = useFlightsContext();
  const { travel_details } = flightsDetails;
  const navigate = useNavigate();
  const regex = /\((.*?)\)/;
  function handleSearch() {
    const encodedPath = btoa(
      `${inputSourceValue?.match(regex)[1]}-${
        inputDestValue?.match(regex)[1]
      }--${selectedDate}--${travel_details.numbers.adult}-${
        travel_details.numbers.child
      }-${travel_details.numbers.infant}`
    );
    navigate(`/flight/air-${encodedPath}`);
  }
  return (
    <div className="searchPanel">
      <ContentWrapper>
        <div className="border-none p-[20px] gap-2 md:gap-10 flex md:flex-row flex-col rounded-[20px] ">
          <div className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row justify-center items-center">
            <InputBox
              type="text"
              placeholder="Enter city or airport"
              label="From"
              id="from_location"
              className="w-full text-white"
              inputValue={inputSourceValue}
              selectedValue={inputSourceValue}
              setInputValue={setInputSourceValue}
              handleValue={(value) => {
                console.log(value, `setting`);
                setInputSourceValue(value);
              }}
            />
            <SwapButton
              handleSwap={(e) => {
                e.preventDefault();
                const temp = inputSourceValue;
                setInputSourceValue(inputDestValue);
                setInputDestValue(temp);
                dispatchFlightsDetails({ type: "swap_location" });
              }}
              className="self-center swap-button flex items-center justify-center bg-transparent cursor-pointer  z-[1] rounded-xl  shadow-md w-9 h-9 m-[-20px] "
            />
            <InputBox
              className="w-full text-white"
              inputValue={inputDestValue}
              setInputValue={setInputDestValue}
              selectedValue={inputDestValue}
              handleValue={(value) => {
                console.log(value, `setting`);
                setInputDestValue(value);
              }}
              type="text"
              placeholder="Enter city or airport"
              label="To"
              id="to_location"
            />
          </div>
          <div className="flex md:gap-4 flex-1 flex-col md:flex-row justify-center items-center">
            <DateSelect
              value={selectedDate}
              handleDepartureDate={(value) => {
                // console.log("handleDate");
                setSelectedDate(value);
              }}
              className="w-full relative rounded-lg  bg-transparent text-white focus:outline-none  border-b-2 border-slate-200 hover:border-b--[--skyBlue]  hover:bg-transparent focus:border-b-[--skyBlue] active:border-b-orange-500  font-medium text-lg leading-7  py-[20px] px-[16px]  "
            />
            <TravelersCount
              value={travel_details}
              handleValue={(secondType, target) => {
                dispatchFlightsDetails({
                  type: "set_travel_details",
                  secondType: secondType,
                  target: target,
                });
              }}
              className="text-white"
            />
          </div>
          <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
            <SearchButton
              type={""}
              handleSearch={handleSearch}
              className="bg-orange-500 hover:bg-orange-700 flex-1 py-4 px-7  text-white font-semibold w-full"
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default UpdatedSearchPanel;
