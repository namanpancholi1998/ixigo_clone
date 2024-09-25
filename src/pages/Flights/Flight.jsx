import React from "react";
import FlightsOffers from "../Flights/FlightsOffers/FlightsOffers";
import SearchPanel from "../Flights/SearchPanel/SearchPanel";
import WhyIxigo from "../Flights/WhyIxigo/WhyIxigo";

function Flight() {
  return (
    <div className="homePage">
      <SearchPanel />
      <FlightsOffers />
      <WhyIxigo />
    </div>
  );
}

export default Flight;
