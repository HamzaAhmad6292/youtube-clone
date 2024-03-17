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
        loginUser(state,action){
            state.isloading=false;
            state.currentUser=action.payload;
            state.error=null;
            localStorage.setItem('currentUser', JSON.stringify(action.payload));

        },
        logoutUser(state){
            state.currentUser=null;
            state.isloading=true;
            state.error=null;
            localStorage.removeItem('currentUser')
        }
    }
})


export const {
    loginUser,
    logoutUser,
}=userSlice.actions;


export default userSlice.reducer;