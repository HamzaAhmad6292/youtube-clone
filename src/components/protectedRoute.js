// components/ProtectedRoute.js
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
    const authToken = Cookies.get('response');
    const userData=Cookies.get("userName")
    console.log(authToken)
    if(authToken)[
      dispatch(loginUser())
    ]
    
    if (!currentUser) {
      router.push('/login');
    }
  }, );

  return <>{children}</>;
};

export default ProtectedRoute;
