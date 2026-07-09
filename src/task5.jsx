import React, { useState, useEffect } from "react";

import "./Task5.css";

import {
  Sun,
  Moon,
  Box,
  UsersRound,
  Info,
  Clock8,
  DollarSign,
  Bell,
} from "lucide-react";

const cards = [
  {
    icon: <Box />,

    h3: "Total Products",

    h2: 6,
  },

  {
    icon: <UsersRound />,

    h3: "Total Stock Qty",

    h2: 267,
  },

  {
    icon: <Info />,

    h3: "Stock Alerts",

    h2: 3,

    icon2: "Action Needed",
  },

  {
    icon: <Clock8 />,

    h3: "Unread Notifications",

    h2: 0,
  },

  {
    icon: <DollarSign />,

    h3: "Total Sales",

    h2: 4221.14,
  },
];

const Task5 = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [search, setSearch] = useState("");

  const [debouncedValue, setDebouncedValue] = useState("");

  const [filteredCards, setFilteredCards] = useState(cards);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const filtered = cards.filter((card) =>
      card.h3.toLowerCase().includes(debouncedValue.toLowerCase()),
    );

    setFilteredCards(filtered);
  }, [debouncedValue]);

  return (
    <div
      className={` duration-500 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <header className="flex justify-between items-center p-3 fixed w-full z-10">
        <div className="bg-gray-100 rounded-xl w-[30vw]">
          <input
            type="text"
            placeholder="Search or type command"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-lg p-3 text-black"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9  border rounded-full flex justify-center items-center"
          >
            {theme === "light" ? <Sun color="black" /> : <Moon color="black" />}
          </button>

          <button className="w-9 h-9 border rounded-full  flex justify-center items-center">
            <Bell />
          </button>

          <div className="w-9 h-9  border rounded-full "></div>

          <select
            className={`text-lg font-semibold bg-transparent outline-none ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            <option>System Admin</option>

            <option>User</option>
          </select>
        </div>
      </header>

      <div className="grid grid-cols-2 pt-24 px-12">
        <div>
          <h1 className="text-4xl font-bold">Welcome back, System Admin</h1>

          <p className="mt-2">Here is a summary of your operations today.</p>
        </div>

        <div className="flex justify-end items-start">
          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">
            New Sales Order
          </button>
        </div>
      </div>

      <div className="p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredCards.map((item, index) => (
            <div
              key={index}
              className={`border rounded-3xl p-5 h-52 ${
                theme === "light"
                  ? "bg-white border-gray-400"
                  : "bg-gray-800 border-gray-700"
              }`}
            >
              <div className="text-3xl">{item.icon}</div>

              <p className="mt-4">{item.h3}</p>

              <h2 className="text-3xl font-bold mt-2">{item.h2}</h2>

              {item.icon2 && (
                <div className="flex justify-end mt-6">
                  <button className="bg-blue-700 text-white px-3 py-2 rounded">
                    {item.icon2}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Task5;