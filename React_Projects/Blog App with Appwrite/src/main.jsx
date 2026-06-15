import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import {Home, AboutUs, Blogs, BlogPage, Post, EditPost} from './components/index.js';
import store from './store/store.js'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx';
import AddBlog from './pages/AddBlog.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element = {<App/>}>
      <Route index element={<Home/>} />
      <Route path='about' element={<AboutUs/>} />
      {/* <Route path='blogs' element={<BlogPage/>} /> */}
      <Route path='login' element={<LoginPage/>} />
      <Route path='signup' element={<SignupPage/>} />
      <Route path='addblog' element={<AddBlog/>} />
      <Route path='/post/:postId' element={<Post/>} />
      <Route path='/edit-post/:postId' element={<EditPost/>} />
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router = {router}/>
    </Provider>
  </StrictMode>,
)
