import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../Store/store';
import { toggleCartModal } from '../../../Store/Slices/cartSlice';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <header className="flex justify-end p-5 bg-black border-b border-white ">
      <button
        className="text-white"
        onClick={() => dispatch(toggleCartModal())}
      >
        Cart
      </button>
    </header>
  );
};

export default Header;
