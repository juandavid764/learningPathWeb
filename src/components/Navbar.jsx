import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  ClipboardListIcon,
  UserIcon,
  ChatAltIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  const location = useLocation();

  const items = [
    { name: "Home", link: "/", icon: <HomeIcon className="h-6 w-6" /> },
    {
      name: "Alumnos",
      link: "/alumnos",
      icon: <UsersIcon className="h-6 w-6" />,
    },
    {
      name: "Evaluaciones",
      link: "/evaluaciones",
      icon: <ClipboardListIcon className="h-6 w-6" />,
    },
    { name: "Perfil", link: "/perfil", icon: <UserIcon className="h-6 w-6" /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white h-screen w-64 flex flex-col justify-between p-6 fixed top-0 left-0 border-r border-gray-200">
      {/* Logo y Título */}
      <div className="flex flex-col items-center mb-12">
        <img src="/path-to-your-logo.png" alt="Logo" className="h-16 mb-2" />
        <h1 className="text-xl font-bold">LEARNING</h1>
        <p className="text-sm text-gray-500">Path</p>
      </div>

      {/* Links */}
      <div className="flex-1 w-full">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`flex items-center w-full py-3 px-4 mb-2 rounded ${
              isActive(item.link) ? "bg-gray-200 text-black" : "text-gray-700"
            } hover:bg-gray-100 transition duration-300`}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Soporte */}
      <div className="w-full mt-8">
        <Link
          to="/soporte"
          className="flex items-center py-3 px-4 rounded text-gray-700 hover:bg-gray-100 transition duration-300"
        >
          <ChatAltIcon className="h-6 w-6" />
          <span className="ml-3">Soporte</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;