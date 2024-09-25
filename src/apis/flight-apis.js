// https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"add_any_of_the_above_type"}

import axios from "./axios-instance";

export const getFlightsOffers = async (type) => {
  console.log("type => ", type);

  try {
    const response = await axios.get(`/offers?filter={"type":"${type}"}`);
    console.log("response => ", response.data);

    return response.data.data.offers;
  } catch (error) {
    console.log("error => ", error);
    throw error;
  }
};
