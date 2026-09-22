import React from "react";
import { useApplications } from "../Context/ApplicationContext";


export default function Navbar({application}) {
  const{applications} = useApplications();
  let total=applications.length;
  return (
    <>
      <div className="flex mt-10 mx-auto w-[70%] rounded-2xl overflow-hidden shadow-lg bg-white border-2 border-amber-500">
        <div className="p-6 bg-blend-soft-light flex-1 border-2 border-black rounded">
          <h2 className="text-2xl font-bold text-gray-900">
            Job Application Tracker
          </h2>

          <p className="mt-2 text-sm text-gray-700">
            Keep track of your interview progress & job offers...
          </p>
        </div>

        <div className="p-6 w-48 flex flex-col justify-center items-center bg-gray-50 border-l">
          <p className="text-3xl font-bold text-gray-900 mt-1">{total}</p>
          <p className="text-sm text-gray-500">Application Total</p>

        </div>
      </div>
    </>
  );
}
