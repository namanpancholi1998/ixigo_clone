import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import dayjs from "dayjs";
import InputBox from "../../../components/CustomInput/CustomInputBox";
import SwapButton from "../../../components/Buttons/SwapButton";
import TravelersCount from "../../../components/Counter/TravelersCount";
import SpecialFares from "./SpecialFear";
import SearchButton from "../../../components/Buttons/SearchBtn";
import { useFlightsContext } from "../../../context/FlightContextProvider/FlightContextProvider";
import DateSelect from "../../../components/SelectDate/SelectDate";
import { errorToast, successToast } from "../../../components/Toast/Toast";

function SearchInput() {
  const [inputFromValue, setInputFromValue] = useState("");
  const [inputToValue, setInputToValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const { flightsDetails, dispatchFlightsDetails } = useFlightsContext();

  const {
    source_location,
    destination_location,
    oneWay,
    travel_details,
    date_of_journey,
  } = flightsDetails;

  const pathname = useLocation().pathname;

  const navigate = useNavigate();

  const handleSearch = (e) => {
    const { adult, child, infant } = travel_details?.numbers;
    if (source_location == "") {
      errorToast("Please Enter Source Location");
      return;
    }

    if (destination_location == "") {
      errorToast("Please Enter Destination Location");
      return;
    }

    if (source_location == destination_location) {
      errorToast(
        "Both airports are the same, Please Select Different Airports"
      );
      return;
    }

    const encodedPath = btoa(
      `${source_location}-${destination_location}--${date_of_journey}--${adult}-${child}-${infant}`
    );

    // console.log(source_location, destination_location);

    if (pathname.includes("flight")) {
      navigate(`air-${encodedPath}`);
    } else {
      navigate(`flight/air-${encodedPath}`);
    }
  };
  return (
    <div className="p-8 md:p-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-white border  border-slate-200 shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.2)]   my-2 mx-auto
    flex flex-col"
      >
        <div className="border-none px-6 pt-6 md:p-[20px] gap-2 md:gap-10 flex md:flex-row flex-col rounded-[20px] ">
          <div className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row justify-center items-center">
            <InputBox
              type="text"
              placeholder="Enter city or airport"
              label="From"
              id="from_location"
              inputValue={inputFromValue}
              setInputValue={setInputFromValue}
              className="w-full"
              selectedValue={source_location}
              handleValue={(value) => {
                dispatchFlightsDetails({
                  type: "set_source_location",
                  payload: { value },
                });
              }}
            />
            <SwapButton
              handleSwap={(e) => {
                e.preventDefault();
                const temp = inputFromValue;
                setInputFromValue(inputToValue);
                setInputToValue(temp);
                dispatchFlightsDetails({ type: "swap_location" });
              }}
              className="self-center swap-button flex items-center justify-center bg-white cursor-pointer  z-[1] rounded-xl border shadow-md w-9 h-9 m-[-20px] "
            />
            <InputBox
              type="text"
              placeholder="Enter city or airport"
              label="To"
              id="to_location"
              inputValue={inputToValue}
              setInputValue={setInputToValue}
              className="w-full"
              selectedValue={destination_location}
              handleValue={(value) => {
                dispatchFlightsDetails({
                  type: "set_destination_location",
                  payload: { value },
                });
              }}
            />
          </div>
          <div className="flex md:gap-4 flex-1 flex-col md:flex-row justify-center items-center">
            <DateSelect
              className="w-full relative bg-transparent focus:outline-none border-b-2 border-slate-200 hover:border-[var(--skyBlue)] focus:border-[var(--skyBlue)] font-medium text-xs md:text-lg md:leading-7 text-[rgb(20, 24, 35)] py-2 px-2 md:py-5 md:px-4 "
              value={date_of_journey || dayjs()}
              handleDepartureDate={(value) => {
                // console.log("handleDate");
                dispatchFlightsDetails({
                  type: "set_date_of_journey",
                  payload: { value },
                });
              }}
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
            />
          </div>
          <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
            <button
              type="submit"
              onClick={handleSearch}
              className="bg-orange-500 mx-10  md:mx-0  text-xs md:text-lg py-2 px-8 md:py-2 hover:bg-orange-600 text-white rounded-lg hover:shadow-md"
            >
              SEARCH
            </button>
          </div>
        </div>
        <div>
          <SpecialFares />
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
