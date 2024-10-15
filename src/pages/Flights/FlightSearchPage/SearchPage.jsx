import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFlightsContext } from "../../../context/FlightContextProvider/FlightContextProvider";
import { getFlightDetails } from "../../../apis/flight-apis";
import dayjs from "dayjs";
import UpdatedSearchPanel from "./UpdatedSearchPanel/UpdatedSearchPanel";
import FilterPanel from "./Filter/FilterPanel";
import FlightsListing from "./FlightList/FlightList";
import { Pagination, Select } from "antd";

function FlightSearchPage() {
  const { searchQuery } = useParams();
  const encodedString = searchQuery ?? "";
  const extractedEncodedPath = encodedString.replace("air-", "");
  const decodedPath = atob(extractedEncodedPath);
  const [location, date, counts] = decodedPath?.split("--");
  const [source, destination] = location.split("-");
  const day = dayjs(date).format("ddd");
  const [adult, child, infant] = counts?.split("-");
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState({});
  const [filter, setFilter] = useState({});
  const [results, setResults] = useState(0);
  const [filterChange, setFilterChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { flightsDetails, dispatchFlightsDetails } = useFlightsContext();
  const [flightsListingResult, setFlightsListingResult] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    getFlightDetails(source, destination, day, sort, filter, 10, page).then(
      (resData) => {
        setIsLoading(false);
        setFlightsListingResult(resData?.data.flights);
        setResults(resData?.results);
        setTotal(resData?.totalResults);
      }
    );
  }, [source, destination, day, sort, page, filter, filterChange]);

  useEffect(() => {
    dispatchFlightsDetails({
      type: "set_source_location",
      payload: { value: source },
    });

    dispatchFlightsDetails({
      type: "set_destination_location",
      payload: { value: destination },
    });

    dispatchFlightsDetails({
      type: "set_date_of_journey",
      payload: { value: date },
    });
    dispatchFlightsDetails({
      type: "set_travel_details_numbers",
      payload: { value: { adult, child, infant } },
    });
  }, []);

  const { source_location, destination_location, date_of_journey } =
    flightsDetails;

  const handleFilter = (type, value) => {
    setFilterChange((prev) => !prev);

    if (type == "stops") {
      setFilter((prev) => {
        if (value.length > 0) {
          prev["stops"] = value;
        } else {
          delete prev["stops"];
        }
        return prev;
      });
    }

    if (type == "duration") {
      setFilter((prev) => {
        if (value.length > 0) {
          prev["duration"] = value;
        } else {
          delete prev["duration"];
        }
        return prev;
      });
    }

    if (type == "price") {
      setFilter((prev) => {
        if (value.length > 0) {
          prev["ticketPrice"] = {
            $gte: parseInt(value[0]),
            $lte: parseInt(value[1]),
          };
        }
        return prev;
      });
    }

    setPage(1);
  };

  return (
    <div className=" mt-32 md:mt-16">
      <UpdatedSearchPanel
        flightsDetails={flightsDetails}
        dispatchFlightsDetails={dispatchFlightsDetails}
        flightsListingResult={flightsListingResult}
        setFlightsListingResult={setFlightsListingResult}
      />
      <FilterPanel
        flightsListingResult={flightsListingResult}
        setFlightsListingResult={setFlightsListingResult}
        handleFilter={handleFilter}
        filter={filter}
        results={results}
        total={total}
        setSortValue={(value) => {
          // console.log({ value });
          setSort(JSON.parse(value));
        }}
      />
      <FlightsListing
        flightsListingResult={flightsListingResult}
        isLoading={isLoading}
      />
      <Pagination
        className="my-4 flex items-center justify-center"
        total={total}
        onChange={(page) => {
          setPage(page);
          window.scrollBy(0, -window.innerHeight);
          document.getElementById("flightsListContainer").scrollTop = 0;
        }}
      />
    </div>
  );
}

export default FlightSearchPage;
