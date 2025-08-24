import { useCallback, useState } from 'react';
import logoRetoPalmas from '../../assets/icon/logo-reto-palmas.svg';
import shoppingCartIcon from '../../assets/icon/carrito-compras.svg';
import hamburguerMenu from '../../assets/icon/menu-hamburguesa.svg';
import HamburguerMenu from './HamburguerMenu';
import ShoppingCartMenu from './ShoppingCartMenu';
import { Link } from 'react-router-dom';

const Header = () => {

    const [isOpenHamburguerMenu, setIsOpenHamburguerMenu] = useState<boolean>(false);

    const [isOpenShoppingCartMenu, setIsOpenShoppingCartMenu] = useState<boolean>(false);

    const handleToggleHamburguerMenu = useCallback(() => {
        setIsOpenHamburguerMenu((prev) => !prev);
    }, []);

    const handleToggleShoppingCartMenu = useCallback(() => {
        setIsOpenShoppingCartMenu((prev) => !prev);
    }, []);

    const cantidad: number = 5;

    return (
        <header className='w-full h-[80px]'>
            <section className='flex justify-between h-full items-center px-3 font-bold'>
                <Link
                    to={'/'}>
                    <img
                        src={logoRetoPalmas}
                        alt="logo-reto-palmas" />
                </Link>
                <h1 className='text-white hidden text-2xl font-bold text-center sm:block sm:w-96'>
                    LA TIENDA PARA LOS AMANTES DE LOS CARROS
                </h1>
                <div className='flex justify-center items-center gap-5'>

                    <div className='relative'>
                        <p className='flex justify-center items-center text-white text-[0.6rem] bg-[#DD0000] absolute top-0 right-0 transform -translate-y-2 translate-x-2 w-auto h-auto px-1 rounded-full shadow-lg lg:text-[0.8rem]'>
                            {cantidad}
                        </p>
                        <img
                            src={shoppingCartIcon}
                            onClick={handleToggleShoppingCartMenu}
                            alt="carrito-compras"
                            className='cursor-pointer lg:w-[40px] lg:h-[40px]' />
                    </div>

                    <img src={hamburguerMenu}
                        onClick={handleToggleHamburguerMenu}
                        alt="menu-hamburguesa"
                        className='cursor-pointer lg:w-[40px] lg:h-[40px]' />
                </div>
            </section>
            {
                isOpenHamburguerMenu && (
                    <HamburguerMenu
                        openHamburguerMenu={isOpenHamburguerMenu}
                        onClose={handleToggleHamburguerMenu} />
                )
            }

            {
                isOpenShoppingCartMenu && (
                    <ShoppingCartMenu
                        openShoppingCartMenu={isOpenShoppingCartMenu}
                        onClose={handleToggleShoppingCartMenu}
                    />
                )
            }
        </header>
    )
}

export default Header;