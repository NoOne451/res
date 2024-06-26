import { Outlet } from 'react-router-dom';
import CartModal from './Routes/components/CartModal';
import Header from './Routes/components/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />

      <CartModal />
    </div>
  );
};

export default Layout;
