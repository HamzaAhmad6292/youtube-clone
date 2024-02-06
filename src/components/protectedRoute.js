// components/ProtectedRoute.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = checkAuthentication(); // Your authentication logic here
    if (!isAuthenticated) {
      router.push('/login'); // Redirect to the login page if not authenticated
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
