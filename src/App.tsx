import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Layout/Routes/Home/Home';
import Contact from './Layout/Routes/Contact/Contact';
import Menu from './Layout/Routes/Menu/Menu';
import { useEffect } from 'react';
import { fetchMenuItems } from '../backend/Actions/actions';
import { MenuItemType } from './Utils/types';
import { AppDispatch, RootState } from './Store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuItems } from './Store/Slices/menuSlice';
import ItemExpand from './Layout/Routes/Menu/Routes/ItemExpand';
import Cart from './Layout/Routes/Cart/Cart';
import { setCart } from './Store/Slices/cartSlice';
import Checkout from './Layout/Routes/Checkout/Checkout';
function App() {
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch: AppDispatch = useDispatch();
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/menu',
          element: <Menu />,
        },
        { path: '/menu/:name', element: <ItemExpand /> },
        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
    {
      path: '/checkout',
      element: <Checkout />,
    },
  ]);

  useEffect(() => {
    // addItems();

    async function fetch() {
      const menuItems: MenuItemType[] = await fetchMenuItems();
      dispatch(setMenuItems(menuItems));
    }

    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      dispatch(setCart(JSON.parse(storedCart)));
    }

    fetch();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
