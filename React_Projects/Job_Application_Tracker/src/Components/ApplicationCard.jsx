import React from "react";
import { useApplications } from "../Context/ApplicationContext";

export default function Card({ applications }) {
  const { deleteApplication } = useApplications();

  const formattedTime = new Date(applications.time).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="flex h-full min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md">
      {/* Header */}
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="min-w-0">
          <h5 className="truncate text-lg font-bold text-gray-900">
            {applications.company}
          </h5>

          <p className="mt-1 truncate text-sm font-medium text-gray-500">
            {applications.position}
          </p>
        </div>

        {/* Status */}
        <span className="shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold capitalize text-indigo-700">
          {applications.status}
        </span>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-4">
        {/* Applied On */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Applied On
          </p>

          <p className="mt-1 text-sm font-medium text-gray-600">
            {formattedTime}
          </p>
        </div>

        {/* Notes */}
        {applications.notes && (
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              Note
            </p>

            <p className="mt-1 line-clamp-3 wrap-break-words text-sm font-medium leading-5 text-gray-700">
              {applications.notes}
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="mt-auto border-t border-gray-100 pt-4">
        <button
          type="button"
          onClick={() => deleteApplication(applications.id)}
          className="w-full rounded-lg border border-red-100 px-3 py-2 text-sm font-semibold text-red-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
