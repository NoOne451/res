import { Link } from 'react-router-dom';

const MenuSection = () => {
  const content = {
    title: 'Discover',
    subtitle: 'Our Menu',
    desc: "Dive into a world of flavors with our exquisite Thooku Biryani combos! Whether you're craving succulent chicken, delectable prawns, or irresistible add-ons, our carefully curated menu has something to tantalize every taste bud. Perfect for family feasts or intimate meals, each dish is crafted with love and tradition. Discover your favorite today!",
  };
  return (
    <div
      id="menu"
      className="min-h-[100vh] flex flex-col md:flex-row gap-10 bg-black items-center py-[20px] md:p-20"
    >
      <div className="p-[15px] md:p-[50px] md:w-[50%]">
        <div className="flex flex-col text-right">
          <span className="text-2xl text-white md:text-3xl ">
            {content.title}
          </span>
          <span className="text-4xl md:text-5xl text-customGreen">
            {content.subtitle}
          </span>
        </div>

        <div className="md:text-[18px] text-[14px] text-justify pt-5 pb-3 text-gray">
          {content.desc}
        </div>
        <div className="text-right">
          <Link to="/menu">
            {' '}
            <button className="px-4 py-3 bg-transparent border border-solid text-customGreen border-customGreen hover:bg-customGreen hover:text-black hover:transition ">
              View Full Menu
            </button>
          </Link>
        </div>
      </div>
      <div className="width-[50%] md:flex gap-3 p-[15px]">
        <div>
          {/* <img
            className=" object-cover  h-[300px] w-[355px] md:h-[200px] md:w-[255px] rounded-lg"
            src="chicken_combo.jpg"
            alt="three"
          />
          <img
            className="object-cover hover:transform  mt-[25px] h-[300px] w-[355px] md:h-[200px] md:w-[255px] rounded-lg"
            src="prawn_combo.jpg"
            alt="four"
          />
        </div>
        <div>
          <img
            className="object-cover hover:transform hidden sm:block mt-[35px] h-[300px] w-[355px] md:h-[200px] md:w-[255px] rounded-lg"
            src="add_ons.jpg"
            alt="three"
          />
          <img
            className="object-cover hover:transform hidden sm:block  mt-[25px] h-[300px] w-[355px] md:h-[200px] md:w-[255px] rounded-lg"
            src="testimonialBG.jpg"
            alt="four"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
