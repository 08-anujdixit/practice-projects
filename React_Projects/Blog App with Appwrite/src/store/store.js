import {configuration, configureStore} from "@reduxjs/toolkit";
import {authSlice} from './authSlice'


const store = configureStore({
    reducer:{
        auth: autSlice,
    }
})

export default store;