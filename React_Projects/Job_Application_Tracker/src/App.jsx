import { useState } from "react";
import {
  ApplicationForm,
  ApplicationList,
  Navbar,
  SearchFilter,
  Stats,
} from "./Components/index.js";

function App() {
  const [application, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const addApplication = (newApplication) => {
    setApplications((prev) => [...prev, newApplication]);
  };

  const deleteApplication = (id) => {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  };

  const filteredApplications = application.filter((app) => {
    const matchesSearch =
      app.company.toLowerCase().includes(search.toLowerCase()) ||
      app.position.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "all" || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <Navbar application={application} />
      <Stats application={application} />
      <ApplicationForm onAdd={addApplication} />
      <SearchFilter
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <ApplicationList
        filteredApplications={filteredApplications}
        onDelete={deleteApplication}
      />
    </>
  );
}

export default App;
