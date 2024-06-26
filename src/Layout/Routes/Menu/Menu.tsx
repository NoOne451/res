import { useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/store';
import MenuItem from './Components/MenuItem';
import { Outlet } from 'react-router-dom';
const Menu = () => {
  const menuItems = useSelector((state: RootState) => state.menu.menuItems);
  const [selectedCategory, setSelectedCategory] = useState('combo');

  return (
    <>
      <section className="flex flex-col gap-5 px-5 py-10 overflow-y-auto text-white bg-black sm:py-15 w-dvw min-h-dvh">
        <h1 className="text-3xl text-center">ThooKu Biriyani Menu</h1>
        <div className="flex justify-center gap-5 uppercase">
          <button
            className={`px-4 py-2  rounded-full border-primary  ${
              selectedCategory === 'combo'
                ? 'border-2  border-solid text-primary'
                : ''
            }`}
            onClick={() => setSelectedCategory('combo')}
          >
            Combo's
          </button>
          <button
            className={`px-4 py-2  rounded-full border-primary  ${
              selectedCategory === 'add-on'
                ? ' border-2  border-solid text-primary'
                : ''
            }`}
            onClick={() => setSelectedCategory('add-on')}
          >
            Add On's
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 xl:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {menuItems &&
            menuItems
              .filter((item) => item.category === selectedCategory)
              .sort((a, b) => {
                return (
                  parseFloat(String(b?.price).replace(/,/g, '')) -
                  parseFloat(String(a?.price).replace(/,/g, ''))
                );
              })

              .map((item) => <MenuItem item={item} key={item?.id} />)}
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Menu;
