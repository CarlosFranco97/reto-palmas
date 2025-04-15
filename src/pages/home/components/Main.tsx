import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import porsche from '../../../assets/image/porsche.webp';
import fundaCustom from '../../../assets/image/funda-custom.webp';
import modeloRopaHombre from '../../../assets/image/modelo-ropa-hombre-completa.webp';

const Main = () => {

    const contentSlider = [
        {
            image: porsche,
            name: 'porsche'
        },
        {
            image: fundaCustom,
            name: 'funda'
        },
        {
            image: modeloRopaHombre,
            name: 'modelo'
        }
    ]


    return (
        <main className='w-full min-h-screen'>
            <section className='w-full h-screen flex flex-col items-center mt-10 text-white font-bold gap-10 sm:gap-30 md:gap-5'>
                <h1 className='text-white block text-2xl w-80 font-bold text-center sm:hidden'>
                    LA TIENDA PARA LOS AMANTES DE LOS CARROS
                </h1>
                <button className='border border-[#DD0000] w-76 py-3 px-5 text-xl cursor-pointer sm:w-90 md:text-2xl md:w-auto'>
                    COMPRA TU SEGURO DE CARRO AQUÍ
                </button>
                <nav className='flex justify-center gap-2 w-full px-2 text-[1rem] sm:gap-15 md:text-2xl'>
                    <a href="">Llaveros</a>
                    <a href="">Termos</a>
                    <a href="">Ropa</a>
                    <a href="">Performances</a>
                    <a href="">Tunning</a>
                </nav>
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    coverflowEffect={{
                        rotate: 90,
                        stretch: 0,
                        depth: 50,
                        modifier: 1.5,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        stopOnLastSlide: false,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className='mySwiper'
                >
                    {contentSlider.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.image} alt={slide.name} className="w-full h-full max-h-full max-w-full object-contain" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='w-[80%] relative flex flex-col justify-center items-center'>
                    <button className='border bg-black py-2 px-5 z-2 cursor-pointer text-xl md:text-2xl'>
                        COMPRA AHORA
                    </button>
                    <hr className='bg-[#DD0000] h-[10px] w-full border-none absolute' />
                </div>
            </section>
        </main>
    )
}

export default Main; 