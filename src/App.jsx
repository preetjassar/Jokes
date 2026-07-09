import React from 'react'
import { Link,Outlet } from "react-router-dom";

const App = () => {
  return (
    <div><nav className="w-64 min-h-screen bg-gray-900 text-white p-6 flex flex-col gap-4 shadow-xl">
  <h1 className="text-3xl font-bold text-center mb-6">
    📚 My Tasks
  </h1>

  <Link
    to="/"
    className="px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium"
  >
    🏠 HOME
  </Link>

  <Link
    to="/task1"
    className="px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium"
  >
    📄 TASK 1
  </Link>

  <Link
    to="/task2"
    className="px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium"
  >
    📄 TASK 2
  </Link>

  <Link
    to="/task3"
    className="px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium"
  >
    📄 TASK 3
  </Link>

  <Link
    to="/task4"
    className="px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium"
  >
    📄 TASK 4
  </Link>

  <Link
    to="/task5"
    className="px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium"
  >
    📄 TASK 5
  </Link>

  <Link
    to="/task6"
    className="px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium"
  >
    📄 TASK 6
  </Link>

  <Link
    to="/task7"
    className="px-4 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium"
  >
    📄 TASK 7
  </Link>
</nav>
      <Outlet/>
    </div>
  )
}

export default App