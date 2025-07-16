import jwtDecode from 'jwt-decode';

interface DecodedToken {
  username: string;
  user_id: number;
  role: 'client' | 'worker';
  exp: number;
}

export const getUserFromToken = (): DecodedToken | null => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded = jwtDecode(token) as DecodedToken;
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem('token');
      return null;
    }
    return decoded;
  } catch {
    return null;
  }
};
