import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getUserFromToken } from '../utils/auth';

export default function ProtectedRoute({ children, role }: { children: any; role?: string }) {
  const router = useRouter();

  useEffect(() => {
    const user = getUserFromToken();
    if (!user || (role && user.role !== role)) {
      router.push('/login');
    }
  }, []);

  return <>{children}</>;
}
