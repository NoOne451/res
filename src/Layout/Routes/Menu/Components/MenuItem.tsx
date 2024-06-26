import { Link } from 'react-router-dom';
import { MenuItemType } from '../../../../Utils/types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../Store/store';
import { addItem } from '../../../../Store/Slices/cartSlice';

const MenuItem = ({ item }: { item: MenuItemType }) => {
  const dispatch: AppDispatch = useDispatch();
  function addToCart(e: any) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addItem(item));
  }
  return (
    <div className="flex flex-col gap-3" key={item?.id}>
      <Link to={`/menu/${item?.name}`} className="relative ">
        <img src={item?.image_url} alt="" className=" rounded-xl" />
        <button
          onClick={(e) => addToCart(e)}
          className="absolute p-3 rounded bg-primary bottom-[10px] left-[50%] translate-x-[-50%] z-0"
        >
          ADD TO CART
        </button>
      </Link>
      <p>
        {item?.name} {item?.serves && ` - Serves  ${item?.serves} `}
      </p>
      <p>Rs. {item?.price}</p>
    </div>
  );
};

export default MenuItem;
