import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Layout/Routes/Home/Home';
import About from './Layout/Routes/About/About';
import Contact from './Layout/Routes/Contact/Contact';
import Menu from './Layout/Routes/Menu/Menu';
import MenuItem from './Layout/Routes/Menu/MenuItem/MenuItem';

function App() {
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
          children: [{ path: '/:id', element: <MenuItem /> }],
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
