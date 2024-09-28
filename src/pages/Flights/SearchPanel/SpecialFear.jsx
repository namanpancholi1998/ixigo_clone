import React from "react";
import specialFareSVG1 from "../../../assets/images/homePage/student.svg";
import specialFareSVG2 from "../../../assets/images/homePage/seniorCitizen.svg";
import specialFareSVG3 from "../../../assets/images/homePage/armedForces.svg";
import { Tooltip, Button } from "antd";

const FLIGHT_SEARCH_PANEL_SPECIAL_FARES = [
  {
    logo: specialFareSVG1,
    title: "Student",
    header: { pre: `For travelers`, mid: "12 years", post: "and above" },
    body: "It is mandatory to present a valid Student ID at the time of check-in",
  },
  {
    logo: specialFareSVG2,
    title: "Senior Citizen",
    header: { pre: `For travelers`, mid: "60 years", post: "and above" },
    body: "It is mandatory to present a valid date of birth proof at the time of check-in",
  },
  {
    logo: specialFareSVG3,
    title: "Armed Forces",
    header: {
      pre: `For`,
      mid: "serving and retired personnel of Armed Forces & Paramilitary Forces",
      post: ", and their recognized dependant",
    },
    body: "It is mandatory to present a valid Armed Forces ID or a dependent card at the time of check-in",
  },
];

function SpecialFear() {
  return (
    <div className=" px-5 py-2 flex flex-col md:flex-row">
      <p className="text-slate-500 text-center self-center">
        Special Fares(Coming Soon):{" "}
      </p>
      <div className="flex gap-2 m-2">
        {FLIGHT_SEARCH_PANEL_SPECIAL_FARES.map((details) => (
          <Tooltip
            key={details.title}
            placement="topLeft"
            title={
              <div>
                <img src={details.logo} />
                <p>
                  {details.header.pre} {details.header.mid}{" "}
                  {details.header.post}
                </p>
                <p>{details.body}</p>
              </div>
            }
          >
            <Button className="flex justify-center items-center">
              <img src={details.logo} className="inline" />
              {details.title}
            </Button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default SpecialFear;
