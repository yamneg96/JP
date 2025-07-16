import { useForm } from 'react-hook-form';
import { login } from '../services/api';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const res = await login(data);
      const token = res.data.access;
      localStorage.setItem('token', token);
      const decoded: any = jwtDecode(token);
  
      if (decoded.role === 'worker') {
        router.push('/dashboard/worker');
      } else {
        router.push('/dashboard/client');
      }
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} placeholder="Username" />
      <input type="password" {...register('password')} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
} 