import { createSlice } from '@reduxjs/toolkit';


const initialState={
    currentUser:null,
    isloading:true,
    error:null,
}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        loginUser
    }
})