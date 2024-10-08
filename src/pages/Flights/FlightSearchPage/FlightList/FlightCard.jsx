import React, { useState } from "react";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import Button from "../../../../components/Buttons/Button";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import AILogo from "../../../../assets/images/flight/airlines/AI.png";
import INLogo from "../../../../assets/images/flight/airlines/6E.png";
import G8Logo from "../../../../assets/images/flight/airlines/G8.png";
import SGLogo from "../../../../assets/images/flight/airlines/SG.png";
import UKLogo from "../../../../assets/images/flight/airlines/UK.png";
import FlightCardSummary from "./FlightCardSummary";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
dayjs.locale("en");

const AIRPORTS = [
  {
    name: "Rajiv Gandhi International Airport",
    city: "Hyderabad",
    country: "India",
    iata_code: "HYD",
  },
  {
    name: "Sardar Vallabhbhai Patel International Airport",
    city: "Ahmedabad",
    country: "India",
    iata_code: "AMD",
  },
  {
    name: "Goa International Airport",
    city: "Goa",
    country: "India",
    iata_code: "GOI",
  },
  {
    name: "Pune Airport",
    city: "Pune",
    country: "India",
    iata_code: "PNQ",
  },
  {
    name: "Lokpriya Gopinath Bordoloi International Airport",
    city: "Guwahati",
    country: "India",
    iata_code: "GAU",
  },
  {
    name: "Jaipur International Airport",
    city: "Jaipur",
    country: "India",
    iata_code: "JAI",
  },
  {
    name: "Dr. Babasaheb Ambedkar International Airport",
    city: "Nagpur",
    country: "India",
    iata_code: "NAG",
  },
  {
    name: "Indira Gandhi International Airport",
    city: "Delhi",
    country: "India",
    iata_code: "DEL",
  },
  {
    name: "Chhatrapati Shivaji Maharaj International Airport",
    city: "Mumbai",
    country: "India",
    iata_code: "BOM",
  },
  {
    name: "Kempegowda International Airport",
    city: "Bengaluru",
    country: "India",
    iata_code: "BLR",
  },
  {
    name: "Netaji Subhas Chandra Bose International Airport",
    city: "Kolkata",
    country: "India",
    iata_code: "CCU",
  },
  {
    name: "Chennai International Airport",
    city: "Chennai",
    country: "India",
    iata_code: "MAA",
  },
  {
    name: "Cochin International Airport",
    city: "Kochi",
    country: "India",
    iata_code: "COK",
  },
  {
    name: "Chandigarh International Airport",
    city: "Chandigarh",
    country: "India",
    iata_code: "IXC",
  },
  {
    name: "Biju Patnaik International Airport",
    city: "Bhubaneswar",
    country: "India",
    iata_code: "BBI",
  },
  {
    name: "Coimbatore International Airport",
    city: "Coimbatore",
    country: "India",
    iata_code: "CJB",
  },
  {
    name: "Lucknow International Airport",
    city: "Lucknow",
    country: "India",
    iata_code: "LKO",
  },
  {
    name: "Trivandrum International Airport",
    city: "Thiruvananthapuram",
    country: "India",
    iata_code: "TRV",
  },
  {
    name: "Mangalore International Airport",
    city: "Mangalore",
    country: "India",
    iata_code: "IXE",
  },
  {
    name: "Amritsar International Airport",
    city: "Amritsar",
    country: "India",
    iata_code: "ATQ",
  },
  {
    name: "Dehradun Airport",
    city: "Dehradun",
    country: "India",
    iata_code: "DED",
  },
  {
    name: "Vadodara Airport",
    city: "Vadodara",
    country: "India",
    iata_code: "BDQ",
  },
  {
    name: "Madurai Airport",
    city: "Madurai",
    country: "India",
    iata_code: "IXM",
  },
  {
    name: "Lok Nayak Jayaprakash Airport",
    city: "Patna",
    country: "India",
    iata_code: "PAT",
  },
  {
    name: "Kushok Bakula Rimpochee Airport",
    city: "Leh",
    country: "India",
    iata_code: "IXL",
  },
  {
    name: "Agartala Airport",
    city: "Agartala",
    country: "India",
    iata_code: "IXA",
  },
  {
    name: "Gaya Airport",
    city: "Gaya",
    country: "India",
    iata_code: "GAY",
  },
  {
    name: "Surat Airport",
    city: "Surat",
    country: "India",
    iata_code: "STV",
  },
  {
    name: "Raipur Airport",
    city: "Raipur",
    country: "India",
    iata_code: "RPR",
  },
  {
    name: "Jammu Airport",
    city: "Jammu",
    country: "India",
    iata_code: "IXJ",
  },
];

const AIRLINES_INFO = [
  { name: "Air India", key: "AI" },
  { name: "IndiGo", key: "6E" },
  { name: "Vistara", key: "UK" },
  { name: "SpiceJet", key: "SG" },
  { name: "Go First", key: "G8" },
];

const getCityFromIATACode = (iataCode) => {
  const airport = AIRPORTS.find((airport) => airport.iata_code === iataCode);
  return airport ? airport.city : "Unknown City";
};

function AirlineName({ flightID }) {
  const key = flightID.slice(0, 2).toUpperCase();
  const flightsID = flightID.slice(13, 16).toUpperCase();
  const airline = AIRLINES_INFO.find((airline) => airline.key === key);
  let logo;
  switch (key) {
    case "AI":
      logo = AILogo;
      break;
    case "6E":
      logo = INLogo;
      break;
    case "G8":
      logo = G8Logo;
      break;
    case "SG":
      logo = SGLogo;
      break;
    case "UK":
      logo = UKLogo;
      break;
    default:
      logo = null;
  }

  return (
    <div className="text-sm md:text-md md:mx-4 my-2  text-gray-400  font-thin flex flex-col py-2">
      {logo && (
        <img
          src={logo}
          alt={airline?.name}
          className=" w-6 md:w-15 h-6 md:h-12 self-center"
        />
      )}{" "}
      <div className="text-md text-gray-400  font-thin flex flex-col p-1 md:p-2">
        <p className="inline-block">
          {airline ? airline.name : "Unknown Airline"}
        </p>

        <p className="inline-block text-sm text-center">
          {airline ? ` ${key}${flightsID}` : "Unknown ID"}
        </p>
      </div>
    </div>
  );
}
function FlightCard({ ...props }) {
  const [showDetails, setShowDetails] = useState(false);
  const {
    _id,
    flightID,
    airline,
    aircraftModel,
    source,
    stops,
    amenities,
    arrivalTime,
    availableSeats,
    departureTime,
    destination,
    duration,
    ticketPrice,
  } = props;
  const { searchQuery } = useParams();
  const encodedString = searchQuery ?? "";
  const extractedEncodedPath = encodedString.replace("air-", "");
  const decodedPath = atob(extractedEncodedPath);
  const [location, date, counts] = decodedPath?.split("--");
  console.log(date);
  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    const formattedDate = date.format("ddd D MMM");
    return formattedDate;
  };

  return (
    <ContentWrapper>
      <div className="mx-2 md:mx-16">
        <div className="w-full h-[150px] mx-auto border border-1 border-slate-100 shadow-lg bg-white flex ">
          <div
            onClick={(e) => {
              e.preventDefault();
              setShowDetails((prev) => !prev);
            }}
            className="w-full h-[150px] mx-auto border border-1 border-b-0  border-slate-100 shadow-lg bg-white flex "
          >
            <div className="">
              <AirlineName flightID={flightID} />
            </div>
            <div className="border-l border-gray-200"></div>
            <div className="flex gap-2  w-full text-sm md:text-lg">
              <div className="text-md text-gray-700 gap-1  md:mx-10 justify-center font-thin flex flex-col p-1 md:p-4">
                <p className="inline-block text-sm text-center">{source}</p>
                <p className="inline-block text-black font-semibold text-lg text-center">
                  {arrivalTime}
                </p>{" "}
                <p className="inline-block text-sm text-center">
                  {formatDate(date)}
                </p>
                <p className="inline-block text-sm text-center">
                  {getCityFromIATACode(source)}
                </p>
              </div>
              <div className="flex flex-col justify-center  items-center text-center w-full">
                <div className="border-b-2 border-slate-500 text-center w-full text-md text-gray-700 justify-center  font-thin flex flex-col p-1 md:p-4">
                  {duration} hours
                </div>
                <div className="text-md text-gray-700 justify-center text-center font-thin flex flex-col p-1 md:p-4">
                  Stops {stops}
                </div>
              </div>{" "}
              <div className="text-md md:mx-10 text-gray-700 gap-1 justify-center font-thin flex flex-col p-1 md:p-4">
                <p className="inline-block text-sm text-center">
                  {destination}
                </p>

                <p className="inline-block text-black font-semibold text-lg text-center">
                  {departureTime}
                </p>
                <p className="inline-block text-sm text-center">
                  {formatDate(date)}
                </p>
                <p className="inline-block text-sm text-center">
                  {getCityFromIATACode(destination)}
                </p>
              </div>
            </div>
            <div className="border-l border-gray-200"></div>
            <div className="flex items-center  justify-center  gap-2 flex-col md:flex-row  md:mx-6">
              <p className="text-orange-500 text-md md:text-xl font-semibold p-1 md:p-2">
                <span>&#x20B9;</span>
                {ticketPrice}
              </p>
              <Button
                type={`Book `}
                handleClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log("booked");
                }}
                className="bg-orange-500  rounded-md mx-1 shadow-md text-white hover:bg-orange-600 cursor-pointer py-1 md:py-2 px-2  md:px-6 "
              />
              <div className="font-medium text-center text-xl text-gray-600 cursor-pointer select-none transition-all">
                {showDetails ? (
                  <>
                    <FaAngleUp className="inline" />
                  </>
                ) : (
                  <>
                    <FaAngleDown className="inline" />
                  </>
                )}
              </div>
            </div>
          </div>
          {showDetails && <FlightCardSummary date={date} {...props} />}
        </div>
      </div>
    </ContentWrapper>
  );
}

export default FlightCard;
