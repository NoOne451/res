import AboutSection from "./components/AboutSection";
import EmblaCarousel from "./components/EmblaCarousel";
import MenuSection from "./components/MenuSection";
import { Testimony } from "./components/Testimony/Testimony";

const Home = () => {
  const slides = [
    {
      imageUrl: "chicken_combo.jpg",
      text: "Spice Up Your Meal with Our Chicken Biryani Combo!",
      desc: "Indulge in our Chicken Thooku Biryani Family Combo, featuring tender chicken biryani, crispy Chicken 65, and an array of delightful sides. Perfect for creating unforgettable family moments.",
    },
    {
      imageUrl: "prawn_combo.jpg",
      text: "A Seafood Delight - Prawn Biryani Combo Awaits You",
      desc: "Treat your taste buds to our Prawn Thooku Biryani Family Combo. Juicy prawns, flavorful biryani, and delicious sides make this the perfect seafood indulgence for your family.",
    },
    {
      imageUrl: "add_ons.jpg",
      text: "Add a Little Extra Magic to Your Meal with Our Add-Ons",
      desc: "Enhance your meal with our irresistible add-ons. From crispy Chicken 65 to creamy Onion Raitha, these extras will elevate your Thooku Biryani experience to new heights.",
    },
  ];
  const about = [
    {
      title: "About",
      subtitle: "Thooku Biryani",
      desc: " In a bustling coastal town, there was a beloved eatery called Thooku Biryani. Owned by the warm-hearted Rajan, this place was famous for its delicious biryani served in traditional steel thookus. Rajan's mission was to make his flavorful biryani affordable for everyone, so he created a variety of combos to suit families, couples, and individuals.The Chicken Thooku Biryani Family Combo, filled with tender chicken pieces, spicy chicken 65, and rich gravies, was a hit among locals. For seafood lovers, the Prawn Thooku Biryani Family Combo, available from Monday to Saturday, was an irresistible treat. Rajan also offered smaller combos for couples and individuals, ensuring no one missed out on the delicious experience. People from all around came to Thooku Biryani, drawn by the tantalizing aromas and the warmth of Rajan's hospitality. His eatery became a cherished part of the town, a place where tradition met affordability, and every meal was a celebration. Rajan’s Thooku Biryani wasn’t just about food; it was about bringing people together, one flavorful bite at a time.",
    },
  ];
  return (
    <>
      <EmblaCarousel slides={slides} />
      <AboutSection about={about} />
      <MenuSection />
      <Testimony />
    </>
  );
};

export default Home;
