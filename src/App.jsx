import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/Auth/AuthProvider";
import FlightContextProvider from "./context/FlightContextProvider/FlightContextProvider";
import Layout from "./layout/Layout";
import Flight from "./pages/Flights/Flight";
import Train from "./pages/Trains/Train";
import Buses from "./pages/Buses/Buses";
import Hotel from "./pages/Hotels/Hotel";
import SearchPage from "./pages/Flights/FlightSearchPage/SearchPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <FlightContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Flight />} />
              <Route path="/flight" element={<Flight />} />
              <Route path="/flight/:searchQuery" element={<SearchPage />} />
              <Route path="trains" element={<Train />} />
              <Route path="buses" element={<Buses />} />
              <Route path="hotels" element={<Hotel />} />
            </Route>
          </Routes>
        </FlightContextProvider>
      </AuthProvider>
      <ToastContainer />
    </Router>
  );
}

export default App;
