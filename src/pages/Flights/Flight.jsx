import React from "react";
import FlightsOffers from "../Flights/FlightsOffers/FlightsOffers";
import SearchPanel from "../Flights/SearchPanel/SearchPanel";
import WhyIxigo from "../Flights/WhyIxigo/WhyIxigo";
import Advertisement from "./Advertisement/Advertisement";
import FlightBanner from "./FlightBanner/FlightBanner";

function Flight() {
  return (
    <div className="homePage">
      <FlightBanner />
      {/* <SearchPanel /> */}
      <Advertisement />
      <FlightsOffers />
      <WhyIxigo />
    </div>
  );
}

export default Flight;
