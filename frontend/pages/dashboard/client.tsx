import { useEffect, useState } from 'react';
import { getServices, bookService } from '../../services/api';
import ProtectedRoute from '@/components/ProtectedRoute';
import Layout from '@/components/Layout';

export default function ClientDashboard() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(res => setServices(res.data));
  }, []);

  const handleBook = async (serviceId: number) => {
    const token = localStorage.getItem('token');
    const payload = {
      service: serviceId,
      client: 1, // ideally get from token decode
      worker: 2, // from service data
    };
    await bookService(payload);
    alert('Service booked!');
  };

  return (
    <Layout>
      <ProtectedRoute role='client'>
        <h1>Available Services</h1>
        {services.map((srv: any) => (
          <div key={srv.id}>
            <h2>{srv.title}</h2>
            <p>{srv.description}</p>
            <button onClick={() => handleBook(srv.id)}>Book</button>
          </div>
        ))}
        <form onSubmit={e => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const rating = form.rating.value;
          const comment = form.comment.value;
          postReview({ booking: bookingId, rating, comment });
          }}>
          <input name="rating" type="number" min="1" max="5" placeholder="Rating" className="border p-1" />
          <input name="comment" placeholder="Comment" className="border p-1" />
          <button type="submit" className="bg-green-600 text-white px-2 py-1 rounded">Submit Review</button>
        </form>
      </ProtectedRoute>
    </Layout>
  );
}
