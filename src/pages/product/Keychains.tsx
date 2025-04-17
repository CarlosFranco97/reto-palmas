import Layout from "../../layouts/Layout";
import rcDriftPorsche from '../../assets/image/rc-drift-porsche.webp';
import carritoCompras from '../../assets/icon/carrito-compras.svg';
import { formatCurrencyCOP } from "../../helpers/cartHelper";

const Keychains = () => {

    const contentProductSection = [
        {
            id: '52200',
            price: 129900,
            name: 'RC DRIFT PORSCHE',
            image: rcDriftPorsche,
        }
    ]

    return (
        <Layout>
            <div className='w-full min-h-screen'>
                <section className='w-full h-screen flex flex-col items-center gap-20'>
                    <h2 className='text-white font-bold text-5xl mt-10'>
                        LLAVEROS
                    </h2>

                    <div>
                        {
                            contentProductSection.map(contentProduct => (
                                <div
                                    key={contentProduct.id}
                                    className='flex flex-col justify-center items-center gap-2'>
                                    <section className='flex justify-center items-center bg-white rounded-2xl h-40 w-40'>
                                        <img src={contentProduct.image} alt={contentProduct.name} />
                                    </section>
                                    <p className='text-white font-bold'>
                                        {contentProduct.name}
                                    </p>
                                    <p className='text-white font-bold text-2xl'>
                                        {formatCurrencyCOP(contentProduct.price)}
                                    </p>
                                    <button className='flex justify-center items-center gap-2 border border-white px-3 py-2'>
                                        <span className='font-bold text-white'>
                                            AÑADIR AL CARRITO
                                        </span>
                                        <img src={carritoCompras} alt="carrito-compras" />
                                    </button>
                                </div>
                            ))
                        }
                    </div>

                </section>
            </div>
        </Layout>
    )
}

export default Keychains;