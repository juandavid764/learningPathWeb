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
      icon: <UsersIcon className="h-8 w-8 text-white" />,
      bgColor: "bg-blue-400",
    },
    {
      name: "Jornada",
      value: "2",
      icon: <CheckCircleIcon className="h-8 w-8 text-white" />,
      bgColor: "bg-orange-300",
    },
    {
      name: "Grados",
      value: "10",
      icon: <ClipboardListIcon className="h-8 w-8 text-white" />,
      bgColor: "bg-red-300",
    },
  ];

  return (
    <div className="p-6">
      {/* Título del dashboard */}
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>

      {/* Contenedor de las tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} rounded-lg shadow-lg p-4 flex items-center justify-between`}
          >
            {/* Ícono */}
            <div>{stat.icon}</div>
            {/* Información de la tarjeta */}
            <div className="text-right">
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white">{stat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
