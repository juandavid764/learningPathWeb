import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import ComponentLineChart from "../components/ComponentLineChart";

const Home = () => {
  return (
    <div className="flex">
      <div className="pl-6">
        <Dashboard></Dashboard>
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <ComponentLineChart></ComponentLineChart>
      </div>
    </div>
  );
};

export default Home;
