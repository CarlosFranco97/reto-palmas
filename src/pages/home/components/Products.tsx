import rcDriftPorsche from '../../../assets/image/rc-drift-porsche.webp';
import rcDriftSkyline from '../../../assets/image/rc-drift-skyline.webp';

const Products = () => {
    return (
        <section className='w-full min-h-screen'>
            <div className='w-full h-auto flex flex-col justify-center items-center gap-20 text-white font-bold py-20'>
                <h2 className='text-5xl sm:text-6xl'>
                    PRODUCTOS
                </h2>
                <div className='flex flex-col items-center gap-10 md:flex-row lg:flex-row lg:gap-20'>
                    <section className='flex flex-col justify-around items-center h-96 w-80 md:w-40 lg:w-48'>
                        <h4 className='text-3xl'>
                            TERMOS
                        </h4>
                        <img
                        className='object-contain w-64 h-64' 
                            src={rcDriftPorsche}
                            alt="rc-drift-porsche" />
                        <button className='border border-[#DD0000] px-3 py-2'>
                            VER MÁS
                        </button>
                    </section>
                    <section className='flex flex-col justify-around items-center h-96 w-80 md:w-40 lg:w-48'>
                        <h4 className='text-3xl'>
                            LLAVEROS
                        </h4>
                        <img
                        className='object-contain w-64 h-64'
                            src={rcDriftPorsche}
                            alt="rc-drift-porsche" />
                        <button className='border border-[#DD0000] px-3 py-2'>
                            VER MÁS
                        </button>
                    </section>
                    <section className='flex flex-col justify-around items-center h-96 w-80 md:w-40 lg:w-48'>
                        <h4 className='text-3xl'>
                            PERFORMANCE
                        </h4>
                        <img
                        className='object-contain w-64 h-64'
                            src={rcDriftSkyline}
                            alt="rc-drift-porsche" />
                        <button className='border border-[#DD0000] px-3 py-2'>
                            VER MÁS
                        </button>
                    </section>
                    <section className='flex flex-col justify-around items-center h-96 w-80 md:w-40 lg:w-48'>
                        <h4 className='text-3xl'>
                            TUNNING
                        </h4>
                        <img
                        className='object-contain w-64 h-64'
                            src={rcDriftSkyline}
                            alt="rc-drift-porsche" />
                        <button className='border border-[#DD0000] px-3 py-2'>
                            VER MÁS
                        </button>
                    </section>
                </div>
                <h3 className='text-6xl text-center'>¿DE QUÉ TE ANTOJAS HOY?</h3>
            </div>
        </section>
    )
}

export default Products;