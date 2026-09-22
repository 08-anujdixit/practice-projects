import { useState } from 'react'
import  {ApplicationForm, ApplicationList, Navbar, SearchFilter, Stats}  from './Components/index.js'

function App() {
  const [application, setApplications] = useState([]);

  const addApplication = (newApplication)=>{
    setApplications((prev)=>[...prev, newApplication]);
  };

  return (
    <>
    <Navbar application={application}/>
    <Stats application={application}/>
    <ApplicationForm onAdd={addApplication}/>
    <SearchFilter/>
    <ApplicationList application={application}/>
    </>
  )
}

export default App
