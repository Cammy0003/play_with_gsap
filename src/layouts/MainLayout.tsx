import { Outlet } from 'react-router-dom';
import Header from '../global_components/Header/Header';

const MainLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        {/* This is where Home, About, or Learn pages will appear */}
        <Outlet />
      </main>
      <footer>© 2026 Cameron Physics</footer>
    </div>
  );
};

export default MainLayout;