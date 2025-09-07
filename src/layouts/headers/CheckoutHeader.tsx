import { Link } from "react-router-dom";
import HamburguerMenu from "../../ui/HamburguerMenu";
import { useState } from "react";
import logoRetoPalmas from "../../assets/icon/logo-reto-palmas.svg";
import hamburguerMenu from "../../assets/icon/menu-hamburguesa.svg";

const CheckoutHeader = () => {
  const [isOpenHamburguerMenu, setIsOpenHamburguerMenu] = useState(false);
  const handleOpenHamburguerMenu = () => {
    setIsOpenHamburguerMenu((prev) => !prev);
  };
  return (
    <header className="w-full h-[80px]">
      <section className="flex justify-between h-full items-center px-3 font-bold">
        <Link to={"/"}>
          <img src={logoRetoPalmas} alt="logo-reto-palmas" />
        </Link>
        <div className="flex justify-center items-center gap-5">
          <img
            src={hamburguerMenu}
            onClick={handleOpenHamburguerMenu}
            alt="menu-hamburguesa"
            className="cursor-pointer lg:w-[40px] lg:h-[40px]"
          />
        </div>
      </section>
      {isOpenHamburguerMenu && (
        <HamburguerMenu
          openHamburguerMenu={isOpenHamburguerMenu}
          onClose={handleOpenHamburguerMenu}
        />
      )}
    </header>
  );
};

export default CheckoutHeader;
