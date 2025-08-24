//import { useState } from 'react';
import { memo } from 'react';
import iconoCerrar from '../../assets/icon/icono-cerrar-negra.svg';
import busoCustom from '../../assets/image/buso-custom.webp';
import fundaCustom from '../../assets/image/funda-custom.webp';
import rcDriftPorsche from '../../assets/image/rc-drift-porsche.webp';
import { calculateTotalPrice, formatCurrencyCOP } from '../../helpers/cartHelper';
import { Link } from 'react-router-dom';

interface ShoppingCartMenuProps {
    openShoppingCartMenu: boolean,
    onClose: () => void
}

const ShoppingCartMenu = ({ openShoppingCartMenu, onClose }: ShoppingCartMenuProps) => {

    //para skeleton
    //const [loading, setLoading] = useState<boolean>(true);

    interface Product {
        id: string,
        name: string,
        price: number,
        quantity: number,
        image: string,
    }

    type ShoppingCartProducts = Product[];

    const ShoppingCart: ShoppingCartProducts = [
        {
            id: "5050",
            name: "art 1",
            price: 15000,
            quantity: 2,
            image: busoCustom
        },
        {
            id: "3030",
            name: "art 2",
            price: 20000,
            quantity: 3,
            image: fundaCustom
        },
        {
            id: "52030",
            name: "art 3",
            price: 20000,
            quantity: 3,
            image: rcDriftPorsche
        },
        {
            id: "5205033",
            name: "art 4",
            price: 20000,
            quantity: 3,
            image: rcDriftPorsche
        },
        {
            id: "5205022",
            name: "art 5",
            price: 20000,
            quantity: 3,
            image: rcDriftPorsche
        }
    ]


    const totalPrice = calculateTotalPrice(ShoppingCart);



    return (
        <>
            <div
                className='w-full h-screen fixed top-0 backdrop-blur-xs bg-black/50 z-10 transition opacity duration-300'
                style={{ opacity: openShoppingCartMenu ? 1 : 0, pointerEvents: openShoppingCartMenu ? 'auto' : 'none' }}
                onClick={onClose}
            >

            </div>
            <section className={`${openShoppingCartMenu ? 'block' : 'hidden'} w-[90%] h-full overflow-auto bg-white fixed top-0 right-0 z-20 py-5 shadow-lg  flex flex-col gap-10 md:w-[50%] lg:w-[30%] `}>
                <div>
                    <div className='flex justify-between items-center px-5'>
                        <h4 className='font-bold text-black/50 text-3xl'>
                            Mi carrito
                        </h4>
                        <img
                            onClick={onClose}
                            src={iconoCerrar}
                            className='cursor-pointer md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]'
                            alt='icono-cerrar' />
                    </div>
                </div>
                <section className='w-full flex flex-col justify-center items-center gap-10'>
                    {
                        ShoppingCart.map(
                            ((productsCart) => (
                                <div
                                    key={productsCart.id}
                                    className='h-auto w-full flex justify-around items-center'
                                >

                                    <div className='flex justify-center items-center w-24 h-32 p-3 rounded-2xl bg-black/10 shadow-lg'>
                                        <img
                                            className='object-contain'
                                            src={productsCart.image}
                                            alt={productsCart.name} />
                                    </div>

                                    <div className='flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-10'>
                                        <p className='font-bold text-black/50'>
                                            {productsCart.name}
                                        </p>
                                        <p>
                                            {formatCurrencyCOP(productsCart.price)}
                                        </p>
                                        <p>
                                            {productsCart.quantity}
                                        </p>
                                        <button className='border border-[#DD0000] py-1 px-2 cursor-pointer'>
                                            Eliminar
                                        </button>

                                    </div>
                                </div>

                            ))
                        )
                    }
                    <hr className='h-[2px] bg-[#DD0000] w-[70%] mt-5' />
                    <div className='flex justify-around items-center w-full '>
                        <h5 className='font-bold text-black/50 text-3xl'>
                            TOTAL
                        </h5>
                        <p className='font-bold text-black/50 text-3xl'>
                            {
                                formatCurrencyCOP(totalPrice)
                            }
                        </p>
                    </div>

                    <Link 
                    to={'/cartShippingInformation'} 
                    className='border border-[#DD0000] px-3 py-2 cursor-pointer'>
                        Comprar
                    </Link>

                </section>
            </section>

        </>
    )
}

export default memo(ShoppingCartMenu); 