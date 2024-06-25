import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Layout/Routes/Home/Home';
import About from './Layout/Routes/About/About';
import Contact from './Layout/Routes/Contact/Contact';
import Menu from './Layout/Routes/Menu/Menu';
import { useEffect } from 'react';
import { fetchMenuItems } from '../backend/Actions/actions';
import { MenuItemType } from './Utils/types';
import { AppDispatch, RootState } from './Store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuItems } from './Store/Slices/menuSlice';
import ItemExpand from './Layout/Routes/Menu/Routes/ItemExpand';
// import { addItems } from '../backend/config';
function App() {
  const state = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    console.log(state);
  }, [state]);

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
          path: '/about',
          element: <About />,
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
      ],
    },
  ]);

  useEffect(() => {
    // addItems();

    async function fetch() {
      const menuItems: MenuItemType[] = await fetchMenuItems();
      dispatch(setMenuItems(menuItems));
    }

    fetch();
  }, []);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
