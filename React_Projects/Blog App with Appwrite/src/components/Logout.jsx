import React from "react";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { logout } from "../store/authSlice"; 
import { useNavigate } from "react-router-dom";

function LogoutBtn(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
            navigate('/');
        })
    }
    return(
        <button
        onClick={logoutHandler}
         className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5 hover:text-white"
        >
            Logout
        </button>
    )
}

export default LogoutBtn
