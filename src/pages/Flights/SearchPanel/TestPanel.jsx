import React from "react";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaThumbsUp } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function TestPanel() {
  let angle = 180;
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const navigate = useNavigate();

  const [swapAngle, setSwapAngle] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromCities, setFromCities] = useState([]);
  const [toCities, setToCities] = useState([]);
  const [date, setDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [childrens, setChildrens] = useState(0);
  const [infants, setInfants] = useState(0);
  const [seatClass, setSeatClass] = useState("Economy");
  const [offers, setOffers] = useState();
  const ran = useRef(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("user") != null
  );
  const [popupShow, setPopupShow] = useState();

  const obj = {
    from: from,
    to: to,
    date: date,
    adults: adults,
    childrens: childrens,
    infants: infants,
    seatClass: seatClass,
  };

  const hide = (id) => {
    document.getElementById(id).classList.add("hidden");
  };

  const show = (id) => {
    document.getElementById(id).classList.remove("hidden");
  };

  const toggleShow = (id) => {
    document.getElementById(id).classList.toggle("hidden");
  };

  const focus = (id) => {
    document.getElementById(id).focus();
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="SEARCHBAR-RELATIVE-CONTAINER flex justify-center items-start w-[100%] xl:mt-6 bg-white z-40 ">
        <div className="xl:shadow  border-2 border-gray-200 xl:border-none w-[98%] p-20 flex flex-col gap-10 rounded-20 bg-white undefined">
          {/* TYPE OF TRIP AND AUTO SCROLLING HEADING CONTAINER STARTS */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <div
                role="tablist"
                className="flex items-center gap-10 justify-center"
              >
                <button
                  role="tab"
                  className="flex items-center relative transition-all xl:min-h-[40px]  border rounded-full px-15 text-selection-outline hover:bg-selection-over border-selection-outline hover:bg-subbrand-50"
                >
                  One Way
                </button>
                <button
                  role="tab"
                  className="flex items-center relative transition-all xl:min-h-[40px] border rounded-full px-15 text-primary hover:bg-primary-over border-secondary hover:bg-subbrand-50"
                >
                  Round Trip
                </button>
              </div>
            </div>

            {/* AUTO SCROLLING HEADINGS CONTAINER STARTS */}
            <div className=" hidden xl:block h-[20px] overflow-y-auto no-scrollbar">
              <div className="style_scrollingWordBox__F_1N8">
                <ul className="style_scrollingWordBoxUlInput__efDeh scrollingContainer ">
                  <li className="style_scrollingWordBoxUlListInput__1zls5 !justify-end ">
                    <p className="body-sm flex items-center gap-5 ">
                      <IoCall />
                      24x7 Customer Support
                    </p>
                  </li>
                  <li className="style_scrollingWordBoxUlListInput__1zls5 !justify-end">
                    <p className="body-sm flex items-center gap-5">
                      <FaThumbsUp />
                      Hassle-Free Bookings
                    </p>
                  </li>
                  <li className="style_scrollingWordBoxUlListInput__1zls5 !justify-end">
                    <p className="body-sm flex items-center gap-5">
                      <BiSolidOffer />
                      Best Flight Offers
                    </p>
                  </li>
                  <li className="style_scrollingWordBoxUlListInput__1zls5 !justify-end">
                    <p className="body-sm flex items-center gap-5">
                      <FaThumbsUp />
                      Hassle-Free Bookings
                    </p>
                  </li>
                  <li className="style_scrollingWordBoxUlListInput__1zls5 !justify-end">
                    <p className="body-sm flex items-center gap-5">
                      <IoCall />
                      24x7 Customer Support
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* AUTO SCROLLING HEADINGS CONTAINER ENDS */}
          </div>
          {/* TYPE OF TRIP AND AUTO SCROLLING HEADING CONTAINER ENDS */}

          {/* SEARCHBAR START */}
          <div className=" flex flex-col xl:flex-row gap-0.5 cursor-pointer ">
            <div className="relative  flex justify-between gap-0.5 flex-1">
              <div className="INPUT FROM bg-charcoal-40 flex items-center relative w-[50%] h-[60px] hover:bg-neutral-subtle-over border-none rounded-l-10">
                {/* INPUT TAG FROM */}
                <div
                  className="flex  justify-between items-center relative w-full h-full"
                  onClick={() => {
                    show("inputBox1");
                    hide("inputSpan1");
                    focus("inputBox1");
                    hide("trevellersDropdown");
                  }}
                >
                  <div className="flex-1 h-full flex flex-col justify-center px-15 py-10 ">
                    <div className="flex items-center ">
                      <div className="flex flex-col">
                        <p className="body-xs  text-neutral-400">From</p>
                        <span
                          id="inputSpan1"
                          className="hidden text-sm xl:text-lg  font-semibold outline-none bg-transparent "
                        >
                          {from && `${from.iata_code} - ${from.city}`}
                        </span>
                        <input
                          type="text"
                          id="inputBox1"
                          className="hidden w-full text-lg font-semibold outline-none bg-transparent"
                          autoComplete="off"
                          value={from.city}
                          onClick={() => {
                            show("list1");
                          }}
                          onChange={(e) => {
                            setFrom(e.target.value);
                          }}
                          onFocus={(e) => {
                            e.target.select();
                            show("list1");
                            hide("list2");
                            hide("inputBox2");
                            show("inputSpan2");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* INPUT TAG FROM */}

                {/* INPUT LIST FROM */}
                {
                  <div
                    id="list1"
                    className="hidden overflow-y-scroll absolute top-[61px] bg-white w-[200%] lg:w-[375px] min-h-[150px] max-h-[450px] shadow-500 z-20 rounded-20  !animate-none no-scrollbar  Autocompleter_animate__zqRDe"
                  >
                    <div>
                      <p className="h6 px-20 pt-15 pb-5 font-medium">
                        Select Airport
                      </p>
                    </div>
                    {fromCities.map((city, index) => {
                      const cityCode = city.iata_code;
                      const cityName = city.city;
                      const country = city.country;
                      const airportName = city.name;

                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setFrom(city);
                            hide("list1");
                            hide("inputBox1");
                            show("inputSpan1");
                            show("inputBox2");
                            focus("inputBox2");
                          }}
                        >
                          <li className="flex items-center relative hover:bg-primary-over px-20 py-2 gap-4 group list-sm max-w-screen-sm gap-15">
                            <div className="inline-flex shrink-0 group-[.list-lg]:h-[60px] group-[.list-lg]:w-[30px] h-[30px] w-[30px] items-center justify-center border border-neutral-100 bg-neutral-40 rounded">
                              <span className="text-primary text-xs">
                                {cityCode}
                              </span>
                            </div>
                            <div className="flex flex-col flex-auto pt-1 pb-5 group-[.list-sm]:py-[1px] p-0 gap-[3px] block truncate">
                              <p className="body-md flex group-[.list-lg]:body-lg text-primary">
                                <span className="block truncate text-sm">
                                  {cityName}, {country}
                                </span>
                                <span className="body-xs ml-auto group-[.list-lg]:body-sm text-secondary" />
                              </p>
                              <p className="text-sm text-secondary">
                                {airportName}
                              </p>
                            </div>
                          </li>
                          <div className="border-b border-neutral-100 mx-20" />
                        </div>
                      );
                    })}
                  </div>
                }
                {/* INPUT LIST FROM*/}
              </div>

              <div className=" INPUT TO bg-charcoal-40 flex items-center relative w-[50%] h-[60px] hover:bg-neutral-subtle-over border-none rounded-r-10 xl:rounded-none">
                {/* INPUT TAG TO */}
                <div
                  className="flex justify-between items-center relative w-full h-full pl-10 block"
                  onClick={() => {
                    show("inputBox2");
                    hide("inputSpan2");
                    focus("inputBox2");
                    hide("inputBox1");
                    show("inputSpan1");
                    hide("trevellersDropdown");
                  }}
                >
                  <div className="flex-1 h-full flex flex-col justify-center px-15 py-10 ">
                    <div className="flex items-center ">
                      <div className="flex flex-col">
                        <p className="body-xs text-neutral-400">To</p>
                        <span
                          id="inputSpan2"
                          className=" hidden text-sm xl:text-lg   font-semibold outlin bg-transparent "
                        >
                          {to && `${to.iata_code} - ${to.city}`}
                        </span>
                        <input
                          id="inputBox2"
                          type="text"
                          className=" hidden text-lg  w-[100%] font-semibold outline-none bg-transparent "
                          autoComplete="off"
                          value={to.city}
                          onClick={() => {
                            show("list2");
                          }}
                          onChange={(e) => {
                            setTo(e.target.value);
                          }}
                          onFocus={(e) => {
                            e.target.select();
                            show("list2");
                            hide("inputSpan2");
                            hide("list1");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* INPUT TAG TO */}

                {/* INPUT LIST TO */}
                <div
                  id="list2"
                  className=" hidden overflow-y-scroll absolute top-[61px] right-0 bg-white w-[200%] lg:w-[375px] min-h-[150px] max-h-[450px] shadow-500 z-20 rounded-20 !animate-none no-scrollbar  Autocompleter_animate__zqRDe"
                >
                  <div>
                    <p className="h6 px-20 pt-15 pb-5 font-medium">
                      Select Airport
                    </p>
                  </div>
                  {toCities.map((city, index) => {
                    const cityCode = city.iata_code;
                    const cityName = city.city;
                    const country = city.country;
                    const airportName = city.name;

                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setTo(city);
                          show("inputSpan2");
                          hide("list2");
                          hide("inputBox2");
                          document.getElementById("datePicker").focus();
                        }}
                      >
                        <li className="flex items-center relative hover:bg-primary-over px-20  gap-4 group list-sm max-w-screen-sm py-2 px-20 ">
                          <div className="inline-flex shrink-0 group-[.list-lg]:h-[60px] group-[.list-lg]:w-[60px] h-[30px] w-[30px] items-center justify-center border border-neutral-100 bg-neutral-40 rounded">
                            <span className="text-primary text-xs">
                              {cityCode}
                            </span>
                          </div>
                          <div className="flex flex-col flex-auto pt-1 pb-5 group-[.list-sm]:py-[1px] p-0 gap-[3px] block truncate">
                            <p className="body-md flex group-[.list-lg]:body-lg text-primary">
                              <span className="block truncate text-sm">
                                {cityName}, {country}
                              </span>
                              <span className="body-xs ml-auto group-[.list-lg]:body-sm text-secondary" />
                            </p>
                            <p className="text-sm text-secondary">
                              {airportName}
                            </p>
                          </div>
                        </li>
                        <div className="border-b border-neutral-100 mx-20" />
                      </div>
                    );
                  })}
                </div>
                {/* INPUT LIST TO */}
              </div>

              <div
                id="swapBtn"
                className="SWAP BUTTON absolute w-30 h-30 bg-white text-center rounded-full top-[calc(50%-15px)] left-[calc(50%-15px)] rotate-0 border-none shadow-100 flex justify-center items-center transition duration-400 "
                onClick={(e) => {
                  let x = from;
                  setFrom(to);
                  setTo(x);
                  e.currentTarget.classList.toggle("rotate-180");
                  hide("list1");
                  hide("list2");
                  hide("inputBox1");
                  hide("inputBox2");
                  show("inputSpan1");
                  show("inputSpan2");
                }}
              >
                <svg
                  width="1em"
                  height="1em"
                  fontSize="1.5rem"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-testid="SwapIcon"
                  className="text-subbrand-900 transition-all duration-300 transform rotate-0"
                  style={{
                    userSelect: "none",
                    display: "inline-block",
                    transform: "rotate(0deg)",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M14.6403 5.2477a.7483.7483 0 0 1 1.0612.0084l4.0871 4.1684a.7555.7555 0 0 1 .1573.8195.7502.7502 0 0 1-.6921.4623H6.8305c-.4145 0-.7504-.3373-.7504-.7533 0-.4161.336-.7534.7504-.7534h10.6317L14.632 6.3131a.7556.7556 0 0 1 .0083-1.0654ZM9.368 18.8148a.7483.7483 0 0 1-1.0611-.0084l-4.087-4.1684a.7555.7555 0 0 1-.1574-.8195.7503.7503 0 0 1 .6921-.4623H17.178c.4144 0 .7503.3373.7503.7533 0 .4161-.3359.7534-.7503.7534H6.5463l2.8301 2.8865a.7555.7555 0 0 1-.0083 1.0654Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className=" DATE PICKER AND RETURN flex items-center justify-between rounded-10 xl:rounded-none relative w-full xl:w-[320px] xl:h-[60px] gap-0.5 overflow-visible calendarInput ">
              {/* DATE PICKER */}
              <div
                className=" DATE PICKER bg-charcoal-40 hover:bg-neutral-subtle-over w-full rounded-10 xl:rounded-none"
                onClick={() => {
                  focus("datePicker");
                  hide("list1");
                  hide("list2");
                  hide("inputBox1");
                  hide("inputBox2");
                  show("inputSpan1");
                  show("inputSpan2");
                }}
              >
                <div className="flex justify-between items-center relative w-full h-[60px] justify-center border-b-4 lg:min-h-[60px] border-transparent">
                  <div className="flex-1 h-full flex flex-col justify-center px-15 py-10 ">
                    <div className="flex items-center ">
                      <div className="flex flex-col">
                        <p className="body-xs text-neutral-400">Departure</p>
                        <div id="datePickerDiv" className="">
                          <DatePicker
                            id="datePicker"
                            className="h6 max-w-[190px] truncate text-primary font-medium font-medium outline-none bg-transparent"
                            value={`${
                              weekDays[date.getDay()]
                            }, ${date.getDate()} ${month[date.getMonth()]}`}
                            selected={date}
                            onChange={(d) => {
                              setDate(d);
                              hide("datePicker");
                              show("trevellersDropdown");
                            }}
                            formatDate="DD/MM/YYY"
                            minDate={new Date()}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* DATE PICKER */}
            </div>

            {/* TRAVELLERS & CLASS */}
            <div className="relative overflow-visible">
              <div
                className="flex justify-between items-center relative rounded-10 xl:rounded-none xl:w-[220px] bg-charcoal-40 hover:bg-neutral-subtle-over border-b-4 py-0.5 flex justify-center md:h-full xl:h-[60px]  border-transparent "
                onClick={() => {
                  document
                    .getElementById("trevellersDropdown")
                    .classList.toggle("hidden");
                  hide("inputBox1");
                  hide("inputBox2");
                  hide("list1");
                  hide("list2");
                  show("inputSpan1");
                  show("inputSpan2");
                }}
              >
                <div className="flex-1 h-full flex flex-col justify-center px-15 py-10 ">
                  <div className="flex items-center !border-none">
                    <div className="flex flex-col">
                      <p className="body-xs text-neutral-400">
                        {" "}
                        Travellers &amp; Class{" "}
                      </p>
                      <p className="h6 max-w-[190px] truncate text-primary font-medium font-medium">
                        {" "}
                        {adults + childrens + infants} Traveller, {seatClass}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="trevellersDropdown"
                className="DROPDOWN hidden w-[100%] absolute xl:top-[61px] xl:right-[150px] bg-white rounded-20 xl:w-[450px] shadow-500 z-30"
              >
                <div className="xl:relative">
                  <h6 className="h6 pt-20 pb-10 px-20 font-medium">
                    Travellers
                  </h6>
                  <div className="TRAVELLERS AND CLASS flex flex-col border xl:h-[352px] overflow-y-scroll no-scrollbar">
                    <div className="ADULTS flex justify-between max-w-full px-20 py-10 ">
                      <div className="flex items-center justify-between xl:flex-col xl:items-start xl:justify-start xl:w-[95px]">
                        <p className="body-md text-primary font-normal">
                          Adults
                        </p>
                        <p className="body-xs text-secondary font-normal">
                          12 yrs or above
                        </p>
                      </div>
                      <div className="mt-10 xl:mt-0 xl:justify-start xl:items-start xl:flex-1">
                        <div className="">
                          {[1, 2, 3, 4].map((num, index) => {
                            return (
                              <button
                                key={index}
                                className={`py-1.5 px-2.5 rounded-10  min-w-[35px] ${
                                  index + 1 == adults
                                    ? "bg-selection-solid text-selection-solid"
                                    : ""
                                }`}
                                onClick={() => {
                                  setAdults(num);
                                }}
                              >
                                {" "}
                                {num}{" "}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="CHILDREN flex justify-between  max-w-full px-20 py-10">
                      <div className="flex items-center justify-between xl:flex-col xl:items-start xl:justify-start xl:w-[95px]">
                        <p className="body-md text-primary font-normal">
                          Children
                        </p>
                        <p className="body-xs text-secondary font-normal">
                          2 - 12 yrs
                        </p>
                      </div>
                      <div className="mt-10 xl:mt-0 xl:justify-start xl:items-start xl:flex-1">
                        <div className="">
                          {[0, 1, 2, 3].map((num, index) => {
                            return (
                              <button
                                key={index}
                                className={`py-1.5 px-2.5 rounded-10  min-w-[35px] ${
                                  index == childrens
                                    ? "bg-selection-solid text-selection-solid"
                                    : ""
                                }`}
                                onClick={() => {
                                  setChildrens(num);
                                }}
                              >
                                {" "}
                                {num}{" "}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="INFANTS flex justify-between  max-w-full px-20 py-10">
                      <div className="flex items-center justify-between xl:flex-col xl:items-start xl:justify-start xl:w-[95px]">
                        <p className="body-md text-primary font-normal">
                          Infants
                        </p>
                        <p className="body-xs text-secondary font-normal">
                          0 - 2 yrs
                        </p>
                      </div>
                      <div className="mt-10 xl:mt-0 xl:justify-start xl:items-start xl:flex-1">
                        <div className="">
                          {[0, 1, 2, 3].map((num, index) => {
                            return (
                              <button
                                key={index}
                                className={`py-1.5 px-2.5 rounded-10  min-w-[35px] ${
                                  index == infants
                                    ? "bg-selection-solid text-selection-solid"
                                    : ""
                                }`}
                                onClick={() => {
                                  setInfants(num);
                                }}
                              >
                                {" "}
                                {num}{" "}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="PLANNING A TRIP hidden xl:block px-20">
                      <div className="inline-alert flex h-auto w-full border-solid rounded-10 p-10 bg-neutral-moderate text-neutral-moderate">
                        <div className="left-content flex items-start pt-px">
                          <svg
                            width="1em"
                            height="1em"
                            fontSize="1.5rem"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            data-testid="GroupIcon"
                            className="h-20 w-20"
                            style={{
                              userSelect: "none",
                              display: "inline-block",
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.7143 7.9076c0 1.3077-1.0844 2.4077-2.4717 2.4077-1.3873 0-2.4717-1.1-2.4717-2.4077C7.771 6.6 8.8553 5.5 10.2426 5.5c1.3873 0 2.4717 1.1 2.4717 2.4076Zm1.5014 0c0 2.1582-1.7788 3.9077-3.9731 3.9077s-3.9731-1.7495-3.9731-3.9077C6.2695 5.7496 8.0483 4 10.2426 4s3.9731 1.7495 3.9731 3.9076Zm2.3735 7.2162c-3.6311-3.4101-9.0438-3.4071-12.6844-.0148C2.155 16.7396 3.12 20 5.4813 20h9.5154c2.3467 0 3.3407-3.2345 1.5925-4.8762ZM4.7819 16.2579c3.1349-2.9211 7.804-2.9211 10.9262.011.8236.7735.3174 2.2282-.7114 2.2282H5.4813c-1.021 0-1.535-1.4607-.6994-2.2392Zm11.5044-3.4757c.1301-.3933.5548-.6067.9484-.4767 1.3435.4438 3.7739 1.6945 3.7739 4.3569 0 1.3963-1.0214 2.1463-2.0675 2.1463-.9682 0-.9682-1.5 0-1.5 1.7717-.4337-.8558-3.3712-2.1777-3.579a.7498.7498 0 0 1-.4771-.9475Zm-.6702-7.1478c-.9624-.0925-1.1135 1.3999-.1484 1.4927 1.9914.1915 1.767 2.9102-.2699 2.7143-.9624-.0926-1.1134 1.3998-.1484 1.4926 3.8917.3743 4.4702-5.0527.5667-5.6996Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="right-content flex w-full pl-5">
                          <div className="grow">
                            <div className="body-sm text-primary">
                              <p className="body-sm">
                                Planning a trip for{" "}
                                <span className="body-sm font-medium">
                                  more than 9 travellers?
                                </span>
                              </p>
                            </div>
                            <div className="body-xs text-secondary">
                              <p className="body-sm underline text-brand font-medium">
                                Create Group Booking
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CLASS p-4 xl:p-20">
                      <p className="body-lg text-primary mb-10 font-normal">
                        Class
                      </p>
                      <div className="flex gap-10">
                        {["Economy", "Premium Economy", "Business"].map(
                          (e, index) => {
                            return (
                              <div
                                key={index}
                                className={`inline-flex items-center font-normal w-fit border cursor-pointer px-1 py-[3px] rounded-20 min-h-[30px] ${
                                  e === seatClass
                                    ? "bg-selection-solid text-selection-solid border-none"
                                    : ""
                                }`}
                                onClick={() => {
                                  setSeatClass(e);
                                }}
                              >
                                <p className="body-sm px-5">{e}</p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="BUTTON flex  bottom-0 gap-5 pt-[9px] pb-10 px-20 border-t border-neutral-100 w-full justify-end relative">
                    <button
                      className="inline-flex justify-center items-center bg-brand-solid text-brand-solid hover:bg-brand-solid-over gap-[3px] rounded-10 min-h-[40px] button-md py-2 px-10 xl:w-[81px]"
                      onClick={() => {
                        hide("trevellersDropdown");
                      }}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* TRAVELLERS & CLASS */}

            {/* SEARCH BUTTON */}
            <button
              id="searchBtn"
              className="inline-flex justify-center items-center bg-brand-solid text-brand-solid hover:bg-brand-solid-over gap-5 rounded-10 min-h-[50px] button-lg py-[13px] px-15 xl:rounded-none xl:rounded-r-[10px] text-2xl xl:w-[160px] pl-[25px] "
              onClick={() => {
                obj.from.city && obj.to.city != undefined
                  ? from.city === to.city
                    ? alert("Source and destination cannot be same")
                    : navigate("/FlightResults", { state: obj })
                  : alert("All fields are required");
              }}
            >
              Search
              <svg
                width="1em"
                height="1em"
                fontSize="1.5rem"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-testid="ChevronRightIcon"
                className="w-6 h-6 ml-10 SearchForm_animateSearchBtn__btzyf transition duration-700 translate-x-4 translate-x-0 searchButttonArrowAnimation"
                style={{ userSelect: "none", display: "inline-block" }}
              >
                <path
                  fillRule="evenodd"
                  d="M8.7125 6.2293c.2905-.2983.77-.3066 1.0708-.0187l5.4854 5.2494A.7474.7474 0 0 1 15.5 12a.7474.7474 0 0 1-.2313.54l-5.4854 5.2494c-.3009.2879-.7803.2796-1.0708-.0187a.7459.7459 0 0 1 .0188-1.0613L13.6524 12 8.7313 7.2906a.746.746 0 0 1-.0188-1.0614Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* SEARCH BUTTON */}
          </div>
          {/* SEARCHBAR END */}

          {/* SPECIAL FARE START */}
          <div className="border-none hidden xl:block pb-0 pl-0 h-40 pt-10 ">
            <div className="flex gap-10 !flex-row justify-start">
              <div className="flex gap-5 items-center relative">
                <p className="body-md flex text-primary gap-[3px] font-medium">
                  Special Fares{" "}
                  <span className="font-normal text-secondary">(Optional)</span>
                  <span className="block text-secondary">:</span>
                </p>
              </div>
              <div className="flex gap-10 overflow-x-scroll no-scrollbar xl:gap-15">
                <div className="inline-flex items-center font-normal w-fit text-primary hover:bg-neutral-outline-over border-neutral-outline cursor-pointer px-1 py-[3px] rounded-20 min-h-[30px] border border-solid shrink-0">
                  <p className="body-sm px-5">Student</p>
                </div>
                <div className="inline-flex items-center font-normal w-fit text-primary hover:bg-neutral-outline-over border-neutral-outline cursor-pointer px-1 py-[3px] rounded-20 min-h-[30px] border border-solid shrink-0">
                  <p className="body-sm px-5">Senior Citizen</p>
                </div>
                <div className="inline-flex items-center font-normal w-fit text-primary hover:bg-neutral-outline-over border-neutral-outline cursor-pointer px-1 py-[3px] rounded-20 min-h-[30px] border border-solid shrink-0">
                  <p className="body-sm px-5">Armed Forces</p>
                </div>
              </div>
            </div>
          </div>
          {/* SPECIAL FARE END */}
        </div>
      </div>
    </div>
  );
}

export default TestPanel;
