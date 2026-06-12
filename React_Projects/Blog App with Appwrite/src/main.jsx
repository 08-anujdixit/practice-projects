import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home, AboutUs, Blogs, BlogPage} from './components/Index.js';




const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element = {<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='about' element={<AboutUs/>} />
      <Route path='blogs' element={<BlogPage/>} />
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
