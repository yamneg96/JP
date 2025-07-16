import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getUserFromToken } from '../utils/auth';

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const decoded = getUserFromToken();
    setUser(decoded);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav className="p-4 bg-gray-100 flex justify-between items-center">
      <div className="space-x-4">
        <Link href="/">Home</Link>
        {!user && (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
        {user?.role === 'client' && <Link href="/dashboard/client">Client Dashboard</Link>}
        {user?.role === 'worker' && <Link href="/dashboard/worker">Worker Dashboard</Link>}
      </div>
      {user && <button onClick={logout} className="bg-red-600 text-white px-3 py-1 rounded">Logout</button>}
    </nav>
  );
}
