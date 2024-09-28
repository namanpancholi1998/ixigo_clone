import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/Auth/AuthProvider";
import Layout from "./layout/Layout";
import Flight from "./pages/Flights/Flight";
import Train from "./pages/Trains/Train";
import Buses from "./pages/Buses/Buses";
import Hotel from "./pages/Hotels/Hotel";

function App() {
  return (
    <Router>
      <Routes>
        <AuthProvider>
          <Route path="/" element={<Layout />}>
            <Route index element={<Flight />} />
            <Route path="/flight" element={<Flight />} />
            <Route path="trains" element={<Train />} />
            <Route path="buses" element={<Buses />} />
            <Route path="hotels" element={<Hotel />} />
          </Route>
        </AuthProvider>
      </Routes>
    </Router>
  );
}

export default App;
