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
    </div>
  );
};

export default MainLayout;