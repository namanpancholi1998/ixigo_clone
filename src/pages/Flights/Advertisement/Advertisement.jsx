import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

function Advertisement() {
  return (
    <ContentWrapper>
      <div className="max-w-[1280px] rounded-2xl overflow-hidden shadow-lg mx-2 h-[64px] md:h-fit md:mx-10 my-10">
        <img
          src={
            "https://images.ixigo.com/image/upload/a/5a1ada722ed472c9192c3637d9624303-suxez.png"
          }
          className="w-full h-full object-fit object-center"
          alt="advertisement"
        />
      </div>
    </ContentWrapper>
  );
}
export default Advertisement;
