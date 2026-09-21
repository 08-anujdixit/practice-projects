import { useState } from 'react'
import  {ApplicationForm, ApplicationList, Navbar, SearchFilter, Stats}  from './Components/index.js'

function App() {


  return (
    <>
    <Navbar/>
    <Stats/>
    <ApplicationForm/>
    <SearchFilter/>
    <ApplicationList/>
    </>
  )
}

export default App
