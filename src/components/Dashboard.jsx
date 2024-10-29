import React from "react";
import {
  UsersIcon,
  CheckCircleIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";

const Dashboard = () => {
  // Datos del dashboard
  const stats = [
    {
      name: "Alumnos",
      value: "150",
      icon: <UsersIcon className="h-12 w-12 text-white" />,
      bgColor: "bg-blue-400",
    },
    {
      name: "Jornada",
      value: "2",
      icon: <CheckCircleIcon className="h-12 w-12 text-white" />,
      bgColor: "bg-orange-300",
    },
    {
      name: "Grados",
      value: "10",
      icon: <ClipboardListIcon className="h-12 w-12 text-white" />,
      bgColor: "bg-red-300",
    },
  ];

  return (
    <div className="pb-4 pt-7">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} rounded-lg shadow-lg p-5 flex items-center justify-between`}
          >
            <div className="pr-8">{stat.icon}</div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-lg text-white">{stat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
