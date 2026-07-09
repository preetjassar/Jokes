import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import Task1 from './task1.jsx'
import Task2 from './task2.jsx'
import Task3 from './task3.jsx'
import Task4 from './task4.jsx'
import Task5 from './task5.jsx'
import Task6 from './task6.jsx'
import Task7 from './task7.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "task1",
    element: <Task1/>,
  },
  {
    path: "task2",
    element: <Task2 />,
  },
  {
    path: "task3",
    element: <Task3 />,
  },
  {
    path: "task4",
    element: <Task4 />,
  },
  {
    path: "task5",
    element: <Task5 />,
  },
  {
    path: "task6",
    element: <Task6 />,
  },
  {
    path: "task7",
    element: <Task7 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);