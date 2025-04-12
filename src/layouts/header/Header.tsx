import logoRetoPalmas from '../../assets/icon/logo-reto-palmas.svg';
import shoppingCartIcon from '../../assets/icon/carrito-compras.svg';
import hamburguerMenu from '../../assets/icon/menu-hamburguesa.svg';
const Header = () => {
    return ( 
        <header className='w-full h-[80px]'>
            <section className='flex justify-between h-full items-center px-3 font-bold'>
                <img src={logoRetoPalmas} alt="" />
                <h1 className='text-white hidden text-2xl font-bold text-center sm:block sm:w-96'>
                    LA TIENDA PARA LOS AMANTES DE LOS CARROS
                </h1>
                <div className='flex justify-center items-center gap-5'>
                    <img src={shoppingCartIcon} alt="" />
                    <img src={hamburguerMenu} alt="" />
                </div>
            </section>
        </header>
    )
}

export default Header;