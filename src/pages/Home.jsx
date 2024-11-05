import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import ComponentLineChart from "../components/ComponentLineChart";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="pl-6">
        <Dashboard></Dashboard>
        <ComponentLineChart></ComponentLineChart>
      </div>
    </div>
  );
};

export default Home;
