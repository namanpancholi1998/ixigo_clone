import React from "react";
import { NavLink } from "react-router-dom";
import hotelLogo from "../../../assets/navbar/svgs/hotel.svg";
import busLogo from "../../../assets/navbar/svgs/bus.svg";
import trainLogo from "../../../assets/navbar/svgs/train.svg";
import flightLogo from "../../../assets/navbar/svgs/flight.svg";

function Navbar() {
  return (
    <div className="">
      <nav className=" nav-links bg-white relative flex h-full items-center gap-6 font-semibold text-slate-500 mx-5 max-lg:gap-0 max-lg:fixed max-lg:bottom-0 max-lg:h-16 max-lg:w-full max-lg:left-0 max-lg:mx-0 max-lg:px-5  max-lg:justify-between max-lg:shadow-sm z-30 ">
        <NavLink to={"/flight"} className="nav-item">
          <img className="nav-service-logo " src={flightLogo} />
          <span>Flights</span>
        </NavLink>
        <NavLink to={"/hotels"} className="nav-item">
          <img className="nav-service-logo " src={hotelLogo} />
          <span>Hotels</span>
        </NavLink>
        <NavLink to={"/trains"} className="nav-item">
          <img className="nav-service-logo " src={trainLogo} />
          <span>Trains</span>
        </NavLink>
        <NavLink to={"/buses"} className="nav-item">
          <img className="nav-service-logo" src={busLogo} />
          <span>Buses</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
