import { useEffect, useState } from 'react';
import { getServices } from '../../services/api';
import ProtectedRoute from '@/components/ProtectedRoute';
import Layout from '@/components/Layout';

export default function WorkerDashboard() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(res => setServices(res.data));
  }, []);

  return (
    <Layout>
      <ProtectedRoute role='worker'>
        <h1>Your Posted Services</h1>
        {services.filter((srv: any) => srv.worker === 2).map((srv: any) => (
          <div key={srv.id}>
            <h2>{srv.title}</h2>
            <p>{srv.description}</p>
          </div>
        ))}
      </ProtectedRoute>
    </Layout>
  );
}