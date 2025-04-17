import modeloRopaMujerCompleta from '../../../assets/image/modelo-ropa-mujer-completa.webp';
import modeloRopaMujer from '../../../assets/image/modelo-ropa-mujer.webp';
import modeloRopaHombreCompleta from '../../../assets/image/modelo-ropa-hombre-completa.webp';
import modeloRopaHombre from '../../../assets/image/modelo-ropa-hombre.webp';
import { Link } from 'react-router-dom';
const Clothes = () => {
    return (
        <section className='w-full h-full'>
            <div className='w-full h-auto font-bold text-white flex flex-col justify-center items-center gap-20 py-20'>
                <h2 className='text-6xl'>
                    ROPA
                </h2>
                <section className='flex flex-col gap-30 lg:flex-row'>

                    <div className='flex flex-col justify-center items-center gap-5'>
                        <Link
                            to={'/clothing/menclothing'}
                            className='bg-white h-64 w-96 relative'>
                            <img
                                src={modeloRopaHombreCompleta}
                                className='w-64 h-64 absolute bottom-0 left-0 object-contain'
                                alt="modelo-ropa-hombre" />
                            <img
                                src={modeloRopaHombre}
                                className='w-64 h-64 absolute bottom-0 right-0 object-contain'
                                alt="modelo-ropa-hombre" />
                        </Link >
                        <Link
                            to={'/clothing/menclothing'}
                            className='border-b-4 border-[#DD0000] text-center text-4xl cursor-pointer'>
                            HOMBRE
                        </Link>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-5'>
                        <Link
                            to={'/clothing/womenclothing'}
                            className='bg-white h-64 w-96 relative'>
                            <img
                                src={modeloRopaMujerCompleta}
                                className='w-64 h-64 absolute bottom-0 right-0 object-contain'
                                alt="modelo-ropa-mujer" />
                            <img
                                src={modeloRopaMujer}
                                className='w-64 h-64 absolute bottom-0 left-0 object-contain'
                                alt="modelo-ropa-mujer" />
                        </Link>
                        <Link
                            to={'/clothing/womenclothing'}
                            className='border-b-4 border-[#DD0000] text-center text-4xl'>
                            MUJER
                        </Link>
                    </div>

                </section>
            </div>
        </section>
    )
}

export default Clothes;