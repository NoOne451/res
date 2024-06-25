import { Link, useParams } from 'react-router-dom';
import { MenuItemType } from '../../../../Utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../Store/store';
import { addItem } from '../../../../Store/Slices/cartSlice';
import { useState } from 'react';

const ItemExpand = () => {
  const itemName = useParams().name;
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch: AppDispatch = useDispatch();

  const item = useSelector((state: RootState) =>
    state.menu.menuItems.find((item: MenuItemType) => item?.name === itemName)
  );

  function addToCart() {
    dispatch(
      addItem({
        ...item,
        quantity,
      })
    );
  }

  function incrementQuantity() {
    setQuantity((quantity) => {
      if (quantity < 10) {
        return quantity + 1;
      }
      return quantity;
    });
  }

  function decrementQuantity() {
    setQuantity((quantity) => {
      if (quantity > 1) {
        return quantity - 1;
      }
      return quantity;
    });
  }
  return (
    <section className="flex flex-col gap-6 px-5 py-10 text-white bg-black md:px-16 md:py-15 min-h-dvh">
      <div className="flex items-center gap-2">
        <Link to="/">Home</Link>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            fill="white"
            className="w-3 h-3"
          >
            <path d="M69.844 43.388L33.842 13.386a6.003 6.003 0 00-7.688 9.223L56.624 48l-30.47 25.39a6.003 6.003 0 007.688 9.223l36.002-30.001a6.01 6.01 0 000-9.223z"></path>
          </svg>
        </span>
        <span>{itemName}</span>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:gap-12">
        <img src={item?.image_url} alt="" className="rounded-xl md:w-[50%]" />

        <div className="flex flex-col gap-6 md:w-[50%] md:gap-8">
          <h1 className="text-2xl">
            {item?.name} {item?.serves && ` - Serves  ${item?.serves} `}
          </h1>
          <h1 className="text-2xl">Rs. {item?.price}</h1>

          <div className="flex gap-8">
            <button onClick={decrementQuantity}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 512 512"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="white"
                width="20"
                height="20"
              >
                <path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"></path>
              </svg>
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                enableBackground="new 0 0 32 32"
                version="1.1"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                fill="white"
              >
                <path d="M28 14H18V4a2 2 0 00-4 0v10H4a2 2 0 000 4h10v10a2 2 0 004 0V18h10a2 2 0 000-4z"></path>
              </svg>
            </button>
          </div>
          <button
            type="button"
            onClick={addToCart}
            className="w-full py-3 rounded-full bg-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <h1 className="text-2xl underline underline-offset-4">Description</h1>
      <div>
        Decadent pieces of tender lamb marinated in a special blend of spice and
        cooked in fra grant basmati rice to a delicious perfection.
      </div>
      <div>
        {item?.items?.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <p> Serves {item?.serves} people.</p>
    </section>
  );
};

export default ItemExpand;
