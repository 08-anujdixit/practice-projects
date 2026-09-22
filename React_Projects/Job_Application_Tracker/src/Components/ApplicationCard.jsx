import React from "react";

export default function Card({ onDelete  ,filteredApplications }) {
   const formattedTime = new Date(
    filteredApplications.time
  ).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="w-full min-w-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md mb-10">
      {/* Top */}
      <div className="flex min-w-0 items-start justify-between gap-3">
        <h5 className="min-w-0 truncate text-lg font-bold text-gray-900">
          {filteredApplications.company}
        </h5>

        <span className="shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-blue-900">
          {filteredApplications.status}
        </span>
      </div>

      {/* Position */}
      <div className="mt-7">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
          Position
        </p>

        <p className="mt-1 wrap-break-words text-base font-semibold text-gray-700">
          {filteredApplications.position}
        </p>
      </div>

      {/* Date */}
      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
          Applied On
        </p>

        <p className="mt-1 text-sm text-gray-500">{formattedTime}</p>
      </div>
      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-950">
          Note:
        </p>
        <p className="text-gray-700 font-semibold">{filteredApplications.notes}</p>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-2 border-t border-gray-100 pt-4">
        <button
          type="button"
          className="min-w-0 flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600"
        >
          Edit
        </button>

        <button
          type="button"
          className="min-w-0 flex-1 rounded-lg border border-red-100 px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
          onClick={() => onDelete(filteredApplications.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
