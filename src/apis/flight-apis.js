// https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"add_any_of_the_above_type"}

import axiosInstance from "./axios-instance";

export const getFlightsOffers = async (type) => {
  console.log("type => ", type);

  try {
    const response = await axiosInstance.get(
      `/offers?filter={"type":"${type}"}`
    );
    console.log("response => ", response.data);

    return response.data.data.offers;
  } catch (error) {
    console.log("error => ", error);
    throw error;
  }
};

export const getFlightDetails = async (
  source,
  destination,
  day,
  sort = {},
  filter = {},
  limit = 10,
  page = 1
) => {
  try {
    const resData = await axiosInstance.get(`/flight`, {
      params: {
        search: JSON.stringify({ source, destination }),
        day: day,
        sort: JSON.stringify(sort),
        filter: JSON.stringify(filter),
        limit,
        page,
      },
    });
    console.log(`fetchFlightsDetails`, resData?.data);
    return resData?.data;
  } catch (err) {
    throw err;
  }
};
