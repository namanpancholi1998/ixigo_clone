import React from "react";

function DomesticAirline() {
  return (
    <div className="DOMESTIC-AIRLINES-CONTAINER  py-30  flex flex-col gap-2 px-20 xl:px-5">
      <h5 className="text-left text-xl font-bold pb-[10px]">
        Popular Domestic Airlines
      </h5>
      <div className="flex justify-between  xl:gap-15 xl:p-8 rounded-20 border overflow-x-auto no-scrollbar border-[#E4E4E7]">
        <a className="flex flex-col gap-5 min-w-28  items-center" href="">
          <img
            alt="IndiGo"
            loading="lazy"
            width={50}
            height={50}
            decoding="async"
            src="https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimg%2Fcommon-resources%2Fairline-new%2F6E.png&w=64&q=75"
            style={{ color: "transparent" }}
          />
          <p className="text-link text-xs xl:text-base">IndiGo</p>
        </a>

        <a className="flex flex-col gap-5 min-w-28  items-center" href="">
          <img
            alt="Air India"
            loading="lazy"
            width={50}
            height={50}
            decoding="async"
            src="https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimg%2Fcommon-resources%2Fairline-new%2FAI.png&w=64&q=75"
            style={{ color: "transparent" }}
          />
          <p className="text-link text-xs xl:text-base">Air India</p>
        </a>

        <a className="flex flex-col gap-5 min-w-28 items-center" href="">
          <img
            alt="Air India Express"
            loading="lazy"
            width={50}
            height={50}
            src="https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimg%2Fcommon-resources%2Fairline-new%2FIX.png&w=64&q=75"
            style={{ color: "transparent" }}
          />
          <p className="text-link text-xs xl:text-base">Air India Express</p>
        </a>

        <a className="flex flex-col gap-5 min-w-28 items-center" href="">
          <img
            alt="Akasa Air"
            loading="lazy"
            width={50}
            height={50}
            decoding="async"
            src="https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimg%2Fcommon-resources%2Fairline-new%2FQP.png&w=64&q=75"
            style={{ color: "transparent" }}
          />
          <p className="text-link text-xs xl:text-base">Akasa Air</p>
        </a>

        <a className="flex flex-col gap-5 min-w-28 items-center" href="">
          <img
            alt="Vistara"
            loading="lazy"
            width={50}
            height={50}
            decoding="async"
            src="https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimg%2Fcommon-resources%2Fairline-new%2FUK.png&w=64&q=75"
            style={{ color: "transparent" }}
          />
          <p className="text-link text-xs xl:text-base">Vistara</p>
        </a>

        <a className="flex flex-col gap-5 min-w-28 items-center" href="">
          <img
            alt="SpiceJet"
            loading="lazy"
            width={50}
            height={50}
            decoding="async"
            src="https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimg%2Fcommon-resources%2Fairline-new%2FSG.png&w=64&q=75"
            style={{ color: "transparent" }}
          />
          <p className="text-link text-xs xl:text-base">SpiceJet</p>
        </a>
      </div>
    </div>
  );
}

export default DomesticAirline;
