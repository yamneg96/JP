import { useForm } from 'react-hook-form';
import { register as registerUser } from '../services/api';
import { useRouter } from 'next/router';

export default function Register() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await registerUser(data);
      router.push('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} placeholder="Username" />
      <input {...register('email')} placeholder="Email" />
      <input type="password" {...register('password')} placeholder="Password" />
      <select {...register('role')}>
        <option value="client">Client</option>
        <option value="worker">Worker</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}