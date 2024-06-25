import React from 'react';
import { Outlet } from 'react-router-dom';
import CartModal from './Routes/components/CartModal';

const Layout = () => {
  return (
    <div>
      <Outlet />

      {/* <CartModal /> */}
    </div>
  );
};

export default Layout;
