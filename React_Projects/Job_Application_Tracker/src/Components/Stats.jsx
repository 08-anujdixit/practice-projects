import React from "react";

export default function Stats({ application }) {
  const offers = application.filter((app)=> app.status ==="offer").length;

  const applied = application.filter((app) => app.status === "applied").length;

  const interview = application.filter(
    (app) => app.status === "interview",
  ).length;

  const rejected = application.filter(
    (app) => app.status === "rejected",
  ).length;
  return (
    <>
      <div className="flex w-[70%] mx-auto flex-col">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-medium text-gray-500">Applied</p>
            <p className="mt-2 text-3xl font-bold text-blue-500">{applied}</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-medium text-gray-500">Interview</p>
            <p className="mt-2 text-3xl font-bold text-amber-400">{interview}</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-medium text-gray-500">Offers</p>
            <p className="mt-2 text-3xl font-bold text-green-400">{offers}</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-medium text-gray-500">Rejected</p>
            <p className="mt-2 text-3xl font-bold text-red-500">{rejected}</p>
          </div>
        </div>
      </div>
    </>
  );
}
