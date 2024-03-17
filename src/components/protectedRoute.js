// components/ProtectedRoute.js
"use client"
import { loginUser } from '@/redux/slices/userSlices';
import Cookies from 'js-cookie'; 
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux'
const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const dispatch=useDispatch()
  const currentUser=useSelector((state)=>state.user.currentUser)

  useEffect(() => {
    const storedData = localStorage.getItem('currentUser');

    try{

      console.log(storedData)
     if(!currentUser){ 
      if(storedData?.success==="true"){
        dispatch(loginUser(storedData))
      }
      else{
        console.log("hamza the great")
        router.push("/login")
      }
    }
    

  }
  catch(error){
    console.log(error)

  }
  }, );

  return <>{children}</>;
};

export default ProtectedRoute;
