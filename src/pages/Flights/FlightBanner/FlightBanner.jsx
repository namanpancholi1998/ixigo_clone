import React from "react";
import "./style.css";

import SearchPanel from "../SearchPanel/SearchPanel";
function FlightBanner() {
  const [background, setBackground] = useState("");

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
