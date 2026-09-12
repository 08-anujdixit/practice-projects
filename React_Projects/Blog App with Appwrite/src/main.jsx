import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import App from './App.jsx';
import {
  Home,
  AboutUs,
  NewsPage,
  Post,
  EditPost
} from './components/index.js';

import store from './store/store.js';

import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import AddBlog from './pages/AddBlog.jsx';
import MyBlogs from './pages/MyBlogs.jsx';
import NewsDetail from './pages/NewsDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="addblog" element={<AddBlog />} />
      <Route path="post/:postId" element={<Post />} />
      <Route path="edit-post/:postId" element={<EditPost />} />
      <Route path="myblogs" element={<MyBlogs />} />
      <Route path="news/:id" element={<NewsDetail />} />
    </Route>
  ),
  {
    basename: "/practice-projects"
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

