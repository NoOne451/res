import { AppDispatch } from '@/Store/store';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const navLinks = [
  {
    name: 'home',
    icon: 'home_icon.svg',
    route: '/',
    isEnd: true,
  },
  {
    name: 'menu',
    icon: 'menu_icon.svg',
    route: '/menu',
    isEnd: false,
  },
  // {
  //   name: 'cart',
  //   icon: 'mobile_cart.svg',
  //   CartModelBtn: true,
  //   route: '/cart',
  //   isEnd: false,
  // },
  {
    name: 'account',
    icon: 'user_icon.svg',
    route: '/account',
    isEnd: false,
  },
];

export function SideBar() {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="fixed  flex sm:right-[40px] sm:bottom-[30px] left-0 bottom-0 sm:p-0  w-dvw gap-5 justify-center p-6  sm:flex-col  z-[3]">
      {navLinks.map((link, index) => {
        return (
          <NavLink
            to={link.route}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img
              className={`w-[40px] h-[40px]  rounded-full bg-cover bg-customGreen border  border-customGreen border-solid border-spacing-[50px] p-[5px] hover:scale-125 duration-300`}
              src={link.icon}
              alt=""
            />
          </NavLink>
        );
      })}
    </div>
  );
}
