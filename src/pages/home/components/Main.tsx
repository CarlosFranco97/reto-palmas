import "swiper/swiper-bundle.css";

import SecurePurchaseButton from "./SecurePurchaseButton";
import SlideMain from "./SlideMain";
import BuyNowButton from "./BuyNowButton";
import { contentSlider } from "../helpers/contentSlider";

const Main = () => {
  return (
    <main className="w-full min-h-screen">
      <section className="w-full h-screen flex flex-col items-center mt-10 text-white font-bold gap-10 sm:gap-30 md:gap-5">
        <h1 className="text-white block text-2xl w-80 font-bold text-center sm:hidden">
          LA TIENDA PARA LOS AMANTES DE LOS CARROS
        </h1>
        <SecurePurchaseButton />
        <nav className="flex justify-center gap-2 w-full px-2 text-[1rem] sm:gap-15 md:text-2xl">
          <a href="">Llaveros</a>
          <a href="">Termos</a>
          <a href="">Ropa</a>
          <a href="">Performances</a>
          <a href="">Tunning</a>
        </nav>
        <SlideMain contentSlider={contentSlider} />
        <div className="w-[80%] relative flex flex-col justify-center items-center">
          <BuyNowButton />
          <hr className="bg-[#DD0000] h-[10px] w-full border-none absolute" />
        </div>
      </section>
    </main>
  );
};

export default Main;
