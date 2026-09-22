import { useState } from "react";
import { useApplications } from "../Context/ApplicationContext";

export default function ApplicationForm() {
  const { addApplication } = useApplications();

  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "applied",
    notes: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log("Application:", formData);
    addApplication(formData);

    setFormData({
      company: "",
      position: "",
      status: "applied",
      time: "",
      notes: "",
    });
  };
  
  return (
    <>
      <div className="mx-auto mt-8 w-[70%]">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Application Form
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Add a new job application to your tracker.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Company Name */}
            <div>
              <label
                htmlFor="cname"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Company Name *
              </label>

              <input
                required
                type="text"
                id="cname"
                name="company"
                placeholder="e.g. Google"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition  focus:border-amber-500 focus:ring-2 focus:ring-indigo-100 text-black"
              />
            </div>

            {/* Position */}
            <div>
              <label
                htmlFor="position"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Position *
              </label>

              <input
                required
                type="text"
                id="position"
                name="position"
                placeholder="e.g. Frontend Developer"
                value={formData.position}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition  focus:border-amber-500 focus:ring-2 focus:ring-indigo-100 text-black"
              />
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Status
              </label>

              <select
                name="status"
                id="status"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-indigo-100 text-black"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="notes"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Notes <span className="text-gray-400">(optional)</span>
              </label>

              <input
                type="text"
                id="notes"
                name="notes"
                placeholder="Add any notes..."
                value={formData.notes}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition  focus:border-amber-500 focus:ring-2 focus:ring-indigo-100 text-black"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-400 active:scale-95"
            >
              + Add Application
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
