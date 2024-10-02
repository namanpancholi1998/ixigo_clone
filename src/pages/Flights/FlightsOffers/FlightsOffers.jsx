import React, { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import { getFlightsOffers } from "../../../apis/flight-apis";

function FlightsOffers() {
  const [data, setData] = useState([]);
  const [offers, setOffers] = useState([]);
  const [type, setType] = useState("FLIGHTS");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // console.log("Rendered Type : ", type);
    getFlightsOffers(type).then((res) => {
      console.log("Data Received : ", res);
      setOffers(res);
      setLoading(false);
    });
  }, [type]);
  return (
    <div className="bg-[#fff] py-[30px] mt-0 md:mt-5 ">
      <div>
        <Carousel data={offers} loading={loading} />
      </div>
    </div>
  );
}
export default FlightsOffers;
