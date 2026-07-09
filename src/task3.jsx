import React from "react";

import { useState } from "react";

import "./task3.css";

const Task3 = () => {
  const [data, setData] = useState({
    title: "Home Name",

    desc: "Home Category",

    value: "100",
  });

  const click = (initial_value) => {
    setData(initial_value);
  };

  return (
    <>
      <header className="header">
        <a>
          <h2>Logo</h2>
        </a>

        <nav className="navbar">
          <a
            href="#"
            onClick={() =>
              click({
                title: "Home Name",

                desc: "Home Category",

                value: "100",
              })
            }
          >
            HOME
          </a>

          <a
            href="#"
            onClick={() =>
              click({
                title: "ABOUT Name",

                desc: "ABOUT Category",

                value: "100",
              })
            }
          >
            ABOUT
          </a>

          <a
            href="#"
            onClick={() =>
              click({
                title: "SERVICE Name",

                desc: "SERVICE Category",

                value: "5000",
              })
            }
          >
            SERVICES
          </a>

          <a
            href="#"
            onClick={() =>
              click({
                title: "CONTACT Name",

                desc: "CONTACT Category",

                value: "100",
              })
            }
          >
            CONTACT
          </a>
        </nav>
      </header>

      <div className="container">
        <div className="section">
          <Card data={data} />
        </div>
      </div>
    </>
  );
};

const Card = ({ data }) => {
  return (
    <div className="card">
      <h2>{data.title}</h2>

      <p>{data.desc}</p>

      <p>{data.value}</p>
    </div>
  );
};

export default Task3;