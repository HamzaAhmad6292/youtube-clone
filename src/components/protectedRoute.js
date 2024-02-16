// components/ProtectedRoute.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux'
const ProtectedRoute = ({ children }) => {
  const router = useRouter();
    const currentUser=useSelector((state)=>state.user.currentUser)
  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
