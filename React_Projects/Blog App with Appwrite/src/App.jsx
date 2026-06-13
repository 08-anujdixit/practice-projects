import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {Header, Footer} from './components/index'
import useDispatch from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice.js'

export default function App() {

  const[loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser().then((userData) =>{
      if(userData){
        dispatch(login(userData));
      }else{
        dispatch(logout());
      }
    }).catch(error=> console.log("Session expired please login again", error) )
    .finally(()=>setLoading(false));
  }, []);

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer />
    </>
  );
}
