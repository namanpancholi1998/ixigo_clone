import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SearchPanel from "../SearchPanel/SearchPanel";
import Advertisement from "../Advertisement/Advertisement";
import flightLogo from "../../../assets/images/homePage/flight-booking.png";

import BannerImg1 from "../../../assets/images/homePage/banner-1.jpg";
import BannerImg2 from "../../../assets/images/homePage/banner-2.jpg";
import BannerImg3 from "../../../assets/images/homePage/banner-3.jpg";
import BannerImg4 from "../../../assets/images/homePage/banner-4.jpg";
import BannerImg5 from "../../../assets/images/homePage/banner-nature-7.jpg";
import BannerImg6 from "../../../assets/images/homePage/banner-jaipur-5.jpg";
import BannerImg7 from "../../../assets/images/homePage/banner-Mysore-6.jpg";

import "./style.css";

function FlightBanner() {
  const [background, setBackground] = useState("");
  const images = [
    BannerImg1,
    BannerImg2,
    BannerImg3,
    BannerImg4,
    BannerImg5,
    BannerImg6,
    BannerImg7,
  ];

  useEffect(() => {
    const randomImagePath = images[Math.floor(Math.random() * images.length)];
    setBackground(randomImagePath);
  }, []);

  return (
    <div
      style={{
        background: `url(${background}) no-repeat`,
      }}
      className="w-full relative h-[600px] md:h-[600px]  flex items-center bg-center bg-cover "
    >
      <div className="absolute w-full "></div>
      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent  flex flex-col items-center justify-center relative max-w-screen-xl mx-auto">
          <div className="text-center flex items-center justify-center gap-5">
            <img src={flightLogo} className="Flight-logo" />
            <span className="title flex items-center justify-center text-2xl text-white md:text-xl font-bold  gap-2">
              Search
              <span className="">.</span>
              Book
              <span className=" ">.</span>
              Go
            </span>
          </div>

          <SearchPanel />
        </div>
      </ContentWrapper>
    </div>
  );
}
export default FlightBanner;
