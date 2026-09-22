import React from "react";
import Card from "./ApplicationCard";

export default function ApplicationList({ filteredApplications }) {
  return (
    <div className="mx-auto mt-10 w-[70%]">
      {/* Header */}
      <div className="mb-5">
        <h6 className="text-xl font-bold text-white">Applications</h6>
        <p className="mt-1 text-sm text-gray-300">
          Track and manage your job applications
        </p>
      </div>

      {/* Application Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredApplications?.length > 0 ? (
          filteredApplications.map((filteredApplications, index) => (
            <Card key={index} filteredApplications={filteredApplications} />
          ))
        ) : (
          <p>No applications added yet.</p>
        )}
      </div>
    </div>
  );
}
