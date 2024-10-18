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
import { IoCall } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";

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

    console.log(source_location, destination_location);

    if (pathname.includes("flight")) {
      navigate(`air-${encodedPath}`);
    } else {
      navigate(`flight/air-${encodedPath}`);
    }
  };

  const hide = (id) => {
    document.getElementById(id).classList.add("hidden");
  };

  const show = (id) => {
    document.getElementById(id).classList.remove("hidden");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="SEARCHBAR-RELATIVE-CONTAINER flex justify-center items-start w-[100%] xl:mt-6 bg-white z-40">
        <div className="xl:shadow  border-2 border-gray-200 xl:border-none w-[98%] p-20 flex flex-col gap-10 rounded-20 bg-white undefined">
          {/* Trip And Auto Scrolling Headings Container Start*/}
          <div className="flex justify-between items-center">
            {/* ONE WAY AND ROUND TRIP */}
            <div className="flex flex-col">
              <div className="flex items-center gap-10 justify-center">
                <button className="flex items-center relative transition-all xl:min-h-[40px]  border rounded-full px-15 text-selection-outline hover:bg-selection-over border-selection-outline hover:bg-subbrand-50">
                  One Way
                </button>
                <button className="flex items-center relative transition-all xl:min-h-[40px] border rounded-full px-15 text-primary hover:bg-primary-over border-secondary hover:bg-subbrand-50">
                  Round Trip
                </button>
              </div>
            </div>

            {/* AUTO SCROLLING HEADINGS CONTAINER STARTS */}
            <div className=" hidden xl:block h-[20px] overflow-y-auto no-scrollbar ">
              <div className="style_scrollingWordBox__F_1N8">
                <ul className="style_scrollingWordBoxUlInput__efDeh scrollingContainer ">
                  <li className="style_scrollingWordBoxUlListInput__1zls5 !justify-end ">
                    <p className="body-sm flex items-center gap-5 ">
                      <IoCall className="text-green-600" />
                      24x7 Customer Support
                    </p>
                  </li>
                  <li className="style_scrollingWordBoxUlListInput__1zls5 !justify-end">
                    <p className="body-sm flex items-center gap-5">
                      <FaThumbsUp className="text-green-600" />
                      Hassle-Free Bookings
                    </p>
                  </li>
                  <li className="style_scrollingWordBoxUlListInput__1zls5 !justify-end">
                    <p className="body-sm flex items-center gap-5">
                      <BiSolidOffer className="text-green-600" />
                      Best Flight Offers
                    </p>
                  </li>
                  <li className="style_scrollingWordBoxUlListInput__1zls5 !justify-end">
                    <p className="body-sm flex items-center gap-5">
                      <FaThumbsUp className="text-green-600" />
                      Hassle-Free Bookings
                    </p>
                  </li>
                  <li className="style_scrollingWordBoxUlListInput__1zls5 !justify-end">
                    <p className="body-sm flex items-center gap-5">
                      <IoCall className="text-green-600" />
                      24x7 Customer Support
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* AUTO SCROLLING HEADINGS CONTAINER ENDS */}
          </div>
          {/* Trip And Auto Scrolling Headings Container End*/}

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col xl:flex-row gap-0.5"
          >
            <div className="relative  flex justify-between gap-0.5 flex-1">
              {/* InputBox From */}
              <div className="INPUT FROM bg-charcoal-40 flex items-center relative w-[50%] h-[60px] hover:bg-neutral-subtle-over border-none rounded-l-10">
                <InputBox
                  type="text"
                  placeholder="Enter city or airport"
                  label="From"
                  id="from_location"
                  inputValue={inputFromValue}
                  setInputValue={setInputFromValue}
                  className="flex  justify-between items-center relative w-full h-full"
                  selectedValue={source_location}
                  handleValue={(value) => {
                    dispatchFlightsDetails({
                      type: "set_source_location",
                      payload: { value },
                    });
                  }}
                  onClick={() => {
                    show("from_location");
                    hide("from_location");
                  }}
                />
              </div>

              {/* Swap Button */}
              {/* <SwapButton
                handleSwap={(e) => {
                  e.preventDefault();
                  const temp = inputFromValue;
                  setInputFromValue(inputToValue);
                  setInputToValue(temp);
                  dispatchFlightsDetails({ type: "swap_location" });
                }}
                className="self-center swap-button flex items-center justify-center bg-white cursor-pointer  z-[1] rounded-xl border shadow-md w-9 h-9 m-[-20px] "
              /> */}
              <div
                id="swapBtn"
                className="SWAP BUTTON absolute w-30 h-30 bg-white text-center rounded-full top-[calc(50%-15px)] left-[calc(50%-15px)] rotate-0 border-none shadow-100 flex justify-center items-center transition duration-400 "
                onClick={(e) => {
                  e.preventDefault();
                  const temp = inputFromValue;
                  setInputFromValue(inputToValue);
                  setInputToValue(temp);
                  dispatchFlightsDetails({ type: "swap_location" });
                }}
              >
                <svg
                  width="1em"
                  height="1em"
                  fontSize="1.5rem"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-testid="SwapIcon"
                  className="text-subbrand-900 transition-all duration-300 transform rotate-0"
                  style={{
                    userSelect: "none",
                    display: "inline-block",
                    transform: "rotate(0deg)",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M14.6403 5.2477a.7483.7483 0 0 1 1.0612.0084l4.0871 4.1684a.7555.7555 0 0 1 .1573.8195.7502.7502 0 0 1-.6921.4623H6.8305c-.4145 0-.7504-.3373-.7504-.7533 0-.4161.336-.7534.7504-.7534h10.6317L14.632 6.3131a.7556.7556 0 0 1 .0083-1.0654ZM9.368 18.8148a.7483.7483 0 0 1-1.0611-.0084l-4.087-4.1684a.7555.7555 0 0 1-.1574-.8195.7503.7503 0 0 1 .6921-.4623H17.178c.4144 0 .7503.3373.7503.7533 0 .4161-.3359.7534-.7503.7534H6.5463l2.8301 2.8865a.7555.7555 0 0 1-.0083 1.0654Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* InputBox To */}
              <InputBox
                type="text"
                placeholder="Enter city or airport"
                label="To"
                id="to_location"
                inputValue={inputToValue}
                setInputValue={setInputToValue}
                className="flex justify-between items-center relative w-full h-full pl-10"
                selectedValue={destination_location}
                handleValue={(value) => {
                  dispatchFlightsDetails({
                    type: "set_destination_location",
                    payload: { value },
                  });
                }}
              />
            </div>

            {/* Date Select and Travelers Count */}
            <div className="flex md:gap-4 flex-1 flex-col md:flex-row justify-center items-center">
              {/* Date Select */}
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

              {/* Travelers Count */}
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

            {/* Search Button */}
            <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
              <button
                type="submit"
                onClick={handleSearch}
                className="bg-orange-500 mx-10  md:mx-0  text-xs md:text-lg py-2 px-8 md:py-2 hover:bg-orange-600 text-white rounded-lg hover:shadow-md"
              >
                SEARCH
              </button>
            </div>
          </form>
          <div>
            <SpecialFares />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
