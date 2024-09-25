import React from "react";
import "./style.css";

import SearchPanel from "../SearchPanel/SearchPanel";
function FlightBanner() {
  return (
    <div className="heroBanner">
      <div className="banner-Img"></div>

      <SearchPanel />
    </div>
  );
}
export default FlightBanner;
