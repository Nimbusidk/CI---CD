import React from "react";
import { Link } from "react-router-dom";

export const Heading = () => {
  return (
    <div>
      <div className="flex items-center mb-10">
        <Link to="/">
          <h5 className="text-gray-100 font-bold text-2xl">Lista de tareas</h5>
        </Link>
        <div className="flex-grow text-right px-4 py-2 m-2">
          <Link to="/add">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <span className="pl-2">Agregar Tarea</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;
