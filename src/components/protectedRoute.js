// components/ProtectedRoute.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux'
const ProtectedRoute = ({ children }) => {
  const router = useRouter();
    const currentUser=useSelector((state)=>state.user.currentUser)
  useEffect(() => {
    if (!currentUser) {
      router.push('/login'); // Redirect to the login page if not authenticated
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
