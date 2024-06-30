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
  return (
    <div className="fixed  flex sm:right-[40px] sm:bottom-[30px] justify-center left-0 sm:left-auto bottom-0 sm:justify-start w-full sm:w-auto sm:flex-col gap-8 z-[3]">
      {navLinks.map((link, index) => {
        return (
          <NavLink
            to={link.route}
            className={({ isActive }) => (isActive ? 'active' : '')}
            key={index}
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
