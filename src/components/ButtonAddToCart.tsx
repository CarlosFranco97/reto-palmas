import carritoCompras from '../../../assets/icon/carrito-compras.svg';


interface ButtonAddToCartProps {
    text: string,
    variant?: '#DD0000' | 'white'
} 

const ButtonAddToCart = ({variant, text}: ButtonAddToCartProps) => {
    return (
        <button className={`flex justify-center items-center gap-2 border border-${variant} px-3 py-2`}>
            <span className='font-bold text-white'>
                {text}
            </span>
            <img src={carritoCompras} alt='carrito-compras' />
        </button>
    )
}

export default ButtonAddToCart;