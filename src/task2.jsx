import React from "react";

import "./task2.css";

const Task2 = () => {
  const categories = [
    {
      id: 1,

      category: "Electronics",

      description: "Smartphones, computers, mouse, keyboard and tech gadgets.",

      products: 3,
    },

    {
      id: 2,

      category: "Furniture",

      description: "Office chairs, desks, drawers and studio equipment.",

      products: 1,
    },

    {
      id: 3,

      category: "Office Supplies",

      description: "Notebooks, pens, paper and organization products.",

      products: 1,
    },

    {
      id: 4,

      category: "Apparel",

      description: "Clothing items, uniforms, and corporate merch.",

      products: 1,
    },

    {
      id: 5,

      category: "Uncategorized",

      description: "Fallback bucket for items without a category.",

      products: 0,
    },
  ];

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" placeholder="Search Categories"></input>

        <p>Total: {categories.length}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>CATEGORY</th>

            <th>DESCRIPTION</th>

            <th>PRODUCTS</th>

            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((item) => (
            <tr className="row" key={item.id}>
              <td className="category">{item.category}</td>

              <td className="description">{item.description}</td>

              <td>
                <span className="badge">{item.products}</span>
              </td>

              <td>
                <button className="edit">Edit</button>

                <button className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task2;