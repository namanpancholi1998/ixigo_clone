import React, { useEffect, useState } from "react";
import "./style.css";

const projectID = "f104bi07c490";

const CustomInput = ({
  label,
  placeholder,
  id,
  type,
  className,
  inputValue,
  setInputValue,
  handleValue,
  selectedValue,
  error,
  onClick,
}) => {
  const [airportList, setAirportList] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestionList, setSuggestionList] = useState(null);
  useEffect(() => {
    async function FetchAirportFromAPI() {
      const data = await fetch(
        "https://academics.newtonschool.co/api/v1/bookingportals/airport?limit=30",
        {
          headers: { projectID: projectID },
        }
      );
      const resData = await data.json();
      // console.log(resData.data.airports);
      setAirportList(resData?.data?.airports);
      setSuggestionList(resData?.data?.airports);
    }

    FetchAirportFromAPI();
  }, []);

  useEffect(() => {
    if (suggestionList) {
      setSuggestionList((prevList) => {
        return airportList?.filter(({ name, city, iata_code }) => {
          return (
            name.toLowerCase().includes(inputValue.toLowerCase()) ||
            iata_code.toLowerCase().includes(inputValue.toLowerCase()) ||
            city.toLowerCase().includes(inputValue.toLowerCase())
          );
        });
      });
    }
  }, [inputValue]);

  const handleInput = (inputText) => {
    console.log(inputText);

    if (inputText.trim().length > 0) {
      setShowSuggestion(true);
    } else {
      setShowSuggestion(false);
    }
  };

  function handleSelect(airport) {
    console.log(airport);
    setShowSuggestion(false);
    handleValue(airport?.iata_code);
    setInputValue(`${airport?.city}, (${airport?.iata_code})`);
  }
  return (
    <div className={`relative p-0  ${className} `}>
      <div className="flex-1 h-full flex flex-col justify-center px-15 py-10 ">
        <div className="flex items-center ">
          <div className="flex flex-col">
            <label
              htmlFor={id}
              className={` ${
                error ? "text-red-500" : "text-[rgb(119,119,119)]"
              } `}
            >
              {label ? label : "Input"}
            </label>

            <input
              placeholder={placeholder ? placeholder : "Enter your text"}
              type={type}
              id={id}
              autoComplete="off"
              value={inputValue}
              onChange={(e) => {
                console.log(e.target.value, "clicked!!");
                setInputValue(e.target.value);
                handleInput(e.target.value);
              }}
              className="w-full text-lg font-semibold outline-none bg-transparent"
              onClick={() => {
                show("from_location ");
                hide("inputSpan1");
              }}
            />
          </div>
        </div>
      </div>

      <div
        id="list1"
        className=" overflow-y-scroll absolute top-[61px] bg-white w-[200%] lg:w-[375px] min-h-[150px] max-h-[450px] shadow-500 z-20 rounded-20  !animate-none no-scrollbar  Autocompleter_animate__zqRDe"
      >
        <div>
          <p className="h6 px-20 pt-15 pb-5 font-medium">
            Select Airport {console.log(showSuggestion)}
          </p>
        </div>
        {showSuggestion && (
          <ul className="absolute text-black max-h-[200px] md:h-[200px] overflow-y-auto bg-white border-2 border-gray-200 rounded-lg w-full text-sm md:text-lg z-10 cursor-pointer">
            {suggestionList?.length > 0 ? (
              suggestionList?.map((airportDetails) => (
                <li
                  key={airportDetails?.iata_code}
                  className="flex flex-row gap-1 item-center "
                  onClick={() => handleSelect(airportDetails)}
                >
                  <img
                    src="https://gos3.ibcdn.com/flightIcon-1675492260.png"
                    alt="flight Icon"
                    className="p-2 w-10 h-10"
                  />
                  <p className="self-center">
                    {airportDetails.iata_code} - {airportDetails.city},
                    {airportDetails.country}.
                    <span>{airportDetails.airportName}</span>
                  </p>
                </li>
              ))
            ) : (
              <div className="font-medium text-black text-lg py-4 text-center w-full h-full flex justify-center items-center">
                NO RESULT FOUND
              </div>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};
export default CustomInput;
