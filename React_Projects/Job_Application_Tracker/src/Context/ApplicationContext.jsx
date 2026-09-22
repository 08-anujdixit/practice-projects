import { createContext, useContext, useState } from "react";

const ApplicationContext = createContext();

export function ApplicationProvider({ children }) {
  const [applications, setApplications] = useState([]);

  const addApplication = (newApplication) => {
    setApplications((prev) => [
      ...prev,
      {
        ...newApplication,
        id: Date.now(),
        time: new Date().toISOString()
      },
    ]);
  };

  const deleteApplication = (id) => {
    setApplications((prev) =>
      prev.filter((application) => application.id !== id)
    );
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
        deleteApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplications() {
  return useContext(ApplicationContext);
}