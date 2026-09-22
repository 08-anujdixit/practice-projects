import React from "react";

export default function SearchFilter({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <>
      <div className="mx-auto mt-8 flex w-[70%] flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative w-full sm:w-[60%]">
          <input
            type="search"
            placeholder="Search by company or role..."
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter */}
        <div className="flex w-full items-center gap-3 sm:w-auto">
          <p className="whitespace-nowrap text-sm font-medium text-gray-600">
            Filter By:
          </p>

          <select
            name="fstatus"
            id="fstatus"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-indigo-100 sm:w-40"
          >
            <option value="all">All Status</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offers</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>
    </>
  );
}
