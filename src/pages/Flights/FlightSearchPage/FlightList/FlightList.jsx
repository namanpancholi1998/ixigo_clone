import React from "react";
import FlightsCard from "./FlightsCard";
import FlightCard from "./FlightCard";

function FlightList({ flightsResult }) {
  return (
    <div>
      <div>
        <h1>Flights Listing</h1>
        {flightsResult?.map((details) => (
          // console.log(details)

          <FlightCard {...details} key={details._id} />
        ))}
      </div>
    </div>
  );
}
export default FlightList;
