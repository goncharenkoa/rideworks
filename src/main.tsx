import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { BikesPricing } from './pages/BikesPricing';
import { HowItWorks } from './pages/HowItWorks';
import { CheckAvailability } from './pages/CheckAvailability';

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/bikes-pricing', element: <BikesPricing /> },
      { path: '/how-it-works', element: <HowItWorks /> },
      { path: '/check-availability', element: <CheckAvailability /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
