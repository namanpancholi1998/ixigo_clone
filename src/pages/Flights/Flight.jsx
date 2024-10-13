import React from "react";
import FlightsOffers from "../Flights/FlightsOffers/FlightsOffers";
import SearchPanel from "../Flights/SearchPanel/SearchPanel";
import WhyIxigo from "../Flights/WhyIxigo/WhyIxigo";
import Advertisement from "./Advertisement/Advertisement";
import FlightBanner from "./FlightBanner/FlightBanner";
import TestPanel from "./SearchPanel/TestPanel";
import DomesticAirline from "./DomesticAirline/DomesticAirline";

function Flight() {
  return (
    <div className="homePage">
      <FlightBanner />
      {/* <SearchPanel /> */}
      {/* <TestPanel /> */}
      <Advertisement />
      <FlightsOffers />
      <WhyIxigo />
      <DomesticAirline />
    </div>
  );
}

export default Flight;
