import { Outlet } from 'react-router-dom';
import CartModal from './Routes/components/CartModal';
import { Header } from './Routes/components/Header';
import { SideBar } from './Routes/components/SideBar';
import { Footer } from './Routes/components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <SideBar />
      <CartModal />
      <Footer />
    </>
  );
};

export default Layout;
