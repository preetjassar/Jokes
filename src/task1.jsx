
import React from "react";
import { useState } from "react";
import "./task1.css";
import { Sun, Moon, Box, UsersRound, Info, Clock8, DollarSign, Search } from "lucide-react";
const Task1 = () => {
  const [theme, setTheme] = useState("light");


  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  const [count, setCount] = useState(0);
  const countNumbers = () => {
    setCount(count + 1);
  };



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
      icon2: "action needed",
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

  return (
    <>
      <div className={["color", theme].join(" ")}>


        <header className="headerbar">


          <div className="searchbar">
            <input
              type="text"
              id="searchbar"
              placeholder="  Search or type command"
            ></input></div>

          <div className="loginsection">


            <button className="icon" onClick={toggleTheme}>
              {theme === "light" ? (
                <Sun color="black" />
              ) : (
                <Moon color="black" />
              )}
            </button>



            <button type="button" onClick={countNumbers} className="icon">
              🔔</button>
            <div className="icon"></div>
            <div className="dropdown">
              <select id="myDropdown" className="dropdown1">
                <option value="">System Admin</option>
                <option value="">User</option>
              </select>
            </div>
          </div>
        </header>



        <div className="headandbutton">
          <div className="heading">
            <h1>Welcome back, System Admin</h1>
            <p>Here is a summary of your operations today.</p>
          </div>
          <div className="button">
            <button className="new">New Sales Order </button>
          </div>
        </div>




        <div className="container">
          <div className="cards">
            {cards.map((item) => (
              <div className="card">
                <h1>{item.icon}</h1>
                <p>{item.h3}</p>
                <h1>{item.h2}</h1>
                {item.icon2 && <div className="btn"><button className="action">{item.icon2}
                </button></div>}
              </div>
            ))}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default Task1;