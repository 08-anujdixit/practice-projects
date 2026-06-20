import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import {Hero, Categories, BestDeals} from './Components/index.js'

const router = createBrowserRouter(createRoutesFromElements(
<Route path='/' element = {<App/>}>
  <Route path='/' element={<Hero/>}/>
  <Route path='/' element={<Categories/>}/>
  <Route path='/' element={<BestDeals/>}/>

</Route>  
))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
