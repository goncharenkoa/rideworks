import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';

export function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
