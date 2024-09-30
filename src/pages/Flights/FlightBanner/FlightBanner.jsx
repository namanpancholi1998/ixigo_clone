import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SearchPanel from "../SearchPanel/SearchPanel";
import Advertisement from "../Advertisement/Advertisement";
import BannerImg1 from "../../../assets/images/homePage/banner-agra-con.webp";
import BannerImg2 from "../../../assets/images/homePage/banner-agra-org.webp";
import BannerImg3 from "../../../assets/images/homePage/banner-bali-indonesia-con.webp";
import BannerImg4 from "../../../assets/images/homePage/banner-bali-indonesia-org.webp";
import BannerImg5 from "../../../assets/images/homePage/banner-kochi-con.webp";
import BannerImg6 from "../../../assets/images/homePage/banner-kochi-org.webp";
import BannerImg7 from "../../../assets/images/homePage/banner-london-unitedKingdom-con.webp";
import BannerImg8 from "../../../assets/images/homePage/banner-london-unitedKingdom-org.webp";
import BannerImg9 from "../../../assets/images/homePage/banner-udaipur-india-con.webp";
import BannerImg10 from "../../../assets/images/homePage/banner-udaipur-india-org.webp";

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
    BannerImg8,
    BannerImg9,
    BannerImg10,
  ];

  useEffect(() => {
    const randomImagePath = images[Math.floor(Math.random() * images.length)];
    setBackground(randomImagePath);
  }, []);

  return (
    <div
      style={{ background: `url(${background}) no-repeat` }}
      className="w-full relative h-[600px] md:h-[600px] flex items-center bg-center bg-cover "
    >
      <div className="absolute w-full "></div>
      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent text-black flex flex-col items-center justify-center relative max-w-screen-xl mx-auto">
          <span className="title text-3xl md:text-6xl font-bold mb-2 md:mb-0">
            Search . Book . Go
          </span>
          <SearchPanel />
        </div>
      </ContentWrapper>
    </div>
  );
}
export default FlightBanner;
