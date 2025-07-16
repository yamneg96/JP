import { useForm } from 'react-hook-form';
import { getUserFromToken } from '../utils/auth';
import { API } from '../services/api';

export default function ServiceForm() {
  const { register, handleSubmit } = useForm();
  const user = getUserFromToken();

  const onSubmit = async (data: any) => {
    try {
      await API.post('/services/', { ...data, worker: user?.user_id });
      alert('Service posted!');
    } catch (err) {
      console.error(err);
      alert('Failed to post service');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('title')} placeholder="Title" className="border p-2 w-full" />
      <textarea {...register('description')} placeholder="Description" className="border p-2 w-full" />
      <input type="number" step="0.01" {...register('price')} placeholder="Price" className="border p-2 w-full" />
      <input {...register('location')} placeholder="Location" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Post Service</button>
    </form>
  );
}
