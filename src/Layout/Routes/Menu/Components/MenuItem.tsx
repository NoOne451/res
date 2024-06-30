import { Link } from 'react-router-dom';
import { MenuItemType } from '../../../../Utils/types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../Store/store';
import { addItem, toggleCartModal } from '../../../../Store/Slices/cartSlice';
import { formatNumberWithCommas } from '../../../../Utils/utils';

const MenuItem = ({ item }: { item: MenuItemType }) => {
  const dispatch: AppDispatch = useDispatch();
  function addToCart(e: any) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addItem(item));
    // dispatch(toggleCartModal());
  }
  return (
    <div className="flex flex-col gap-3 group" key={item?.id}>
      <Link to={`/menu/${item?.name}`} className="relative ">
        <img src={item?.image_url} alt="" className=" rounded-xl" />
        <button
          onClick={(e) => addToCart(e)}
          className="absolute p-3 rounded bg-customGreen md:bottom-[-20px] bottom-[15px] left-[50%] opacity-100 translate-x-[-50%] text-[12px] md:opacity-0 md:group-hover:opacity-100 md:group-hover:bottom-[15px]  transitionBtn  "
        >
          ADD TO CART
        </button>
      </Link>
      <p className="">
        {item?.name} {item?.serves && ` - Serves  ${item?.serves} `}
      </p>
      <p className="text-white ">
        Rs. {formatNumberWithCommas(item?.price ?? 0)}
      </p>
    </div>
  );
};

export default MenuItem;
