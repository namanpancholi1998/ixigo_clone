import React from "react";
import FlightsOffers from "../Flights/FlightsOffers/FlightsOffers";
import SearchPanel from "../Flights/SearchPanel/SearchPanel";
import WhyIxigo from "../Flights/WhyIxigo/WhyIxigo";
import Advertisement from "./Advertisement/Advertisement";

function Flight() {
  return (
    <div className="homePage">
      <SearchPanel />
      <Advertisement />
      <FlightsOffers />
      <WhyIxigo />
    </div>
  );
}

export default Flight;
