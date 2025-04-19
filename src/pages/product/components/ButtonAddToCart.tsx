import carritoCompras from '../../../assets/icon/carrito-compras.svg';

const ButtonAddToCart = () => {
    return (
        <button className='flex justify-center items-center gap-2 border border-white px-3 py-2'>
            <span className='font-bold text-white'>
                AÑADIR AL CARRITO
            </span>
            <img src={carritoCompras} alt="carrito-compras" />
        </button>
    )
}

export default ButtonAddToCart;