import { useState } from "react";
import { useApplications } from "./Context/ApplicationContext";
import {
  ApplicationForm,
  ApplicationList,
  Navbar,
  SearchFilter,
  Stats,
} from "./Components";

function App() {
  const { applications } = useApplications();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  // console.log("Applications:", applications);
  // console.log("Search:", search);
const filteredApplications = applications.filter((app) => {
  const matchesSearch =
    app.company.toLowerCase().includes(search.toLowerCase()) ||
    app.position.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "all" || app.status === statusFilter;

  // console.log({
  //   company: app.company,
  //   position: app.position,
  //   status: app.status,
  //   search,
  //   statusFilter,
  //   matchesSearch,
  //   matchesStatus,
  //   finalMatch: matchesSearch && matchesStatus,
  // });

  return matchesSearch && matchesStatus;
});

  return (
    <>
      <Navbar  />

      <Stats />

      <ApplicationForm />

      <SearchFilter
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <ApplicationList applications={filteredApplications} />
    </>
  );
}

export default App;