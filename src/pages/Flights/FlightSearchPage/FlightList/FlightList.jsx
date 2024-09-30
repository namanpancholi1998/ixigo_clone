import React from "react";
import FlightCard from "./FlightCard";

function FlightList({ flightsResult }) {
  return (
    <div>
      <div>
        <h1>Flights Listing</h1>
        {flightsResult?.map((details) => (
          <FlightsCard {...details} />
        ))}
      </div>
    </div>
  );
}
export default FlightList;
