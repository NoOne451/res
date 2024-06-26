import React, { useState } from 'react';
import { cartItemType } from '../../../Utils/types';
import { AppDispatch } from '../../../Store/store';
import { useDispatch } from 'react-redux';
import {
  addItem,
  deleteItem,
  removeItem,
} from '../../../Store/Slices/cartSlice';

const CartItem = ({ item }: { item: cartItemType }) => {
  const dispatch: AppDispatch = useDispatch();
  function incrementQuantity() {
    const { quantity, ...cartItemWithoutQuantity } = item;
    dispatch(addItem(cartItemWithoutQuantity));
  }

  function decrementQuantity() {
    const { quantity, ...cartItemWithoutQuantity } = item;

    dispatch(removeItem(cartItemWithoutQuantity));
  }
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div
      className="flex gap-4 p-4 border-b border-black border-opacity-10 min-h-[120px] "
      key={item?.id}
    >
      <img
        src={item?.image_url}
        alt={item?.name}
        className="w-[80px] h-[60px] rounded object-cover self-center"
      />
      <div className="flex flex-col ">
        <div className="text-[15px] ">
          {item?.name} {item?.serves && ` - Serves  ${item?.serves} `}
        </div>
        <div className="text-[15px]">Rs. {item?.price}</div>

        <div className="flex gap-4 mt-2 ">
          <div className="flex gap-6 px-2 py-1 bg-black rounded-full bg-opacity-5 w-fit">
            <button onClick={decrementQuantity}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 512 512"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="black"
                width="10"
                height="10"
              >
                <path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"></path>
              </svg>
            </button>
            <span className="text-[12px]">{item?.quantity}</span>
            <button onClick={incrementQuantity}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                enableBackground="new 0 0 32 32"
                version="1.1"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                fill="black"
              >
                <path d="M28 14H18V4a2 2 0 00-4 0v10H4a2 2 0 000 4h10v10a2 2 0 004 0V18h10a2 2 0 000-4z"></path>
              </svg>
            </button>
          </div>

          <button
            className="text-sm underline"
            onClick={() => dispatch(deleteItem(item))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
