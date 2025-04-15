import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { formatCurrencyCOP } from '../../../helpers/cartHelper';
import carritoCompras from '../../../assets/icon/carrito-compras.svg';

interface SliderItem {
    image: string, 
    name: string, 
    price: number
}

interface SliderClothingProps {
    title: string, 
    contentSlider: SliderItem[]
}

const SliderClothing = ({title, contentSlider}: SliderClothingProps) => {

    return (

        <section className='container-unique-slider relative w-full h-screen py-5 flex flex-col justify-around items-center gap-10 mt-5'>
            
            <h2 className='font-bold text-white text-4xl border-b-4 border-[#DD0000]'>
                {title}
            </h2>

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
                    delay: 4500,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Autoplay, Navigation]}
                className='mySwiper w-full h-[500px]'
            >
                {contentSlider.map((slide, index) => (
                    <SwiperSlide
                        className='relative h-full'
                        key={index}>
                        <img
                            src={slide.image}
                            alt={slide.name}
                            className='w-80 h-80 max-h-full max-w-full object-contain absolute left-[50%] transform -translate-x-[50%]' />
                        <p className='text-white text-xl font-bold absolute bottom-30 left-[50%] transform -translate-x-[50%]'>
                            {slide.name}
                        </p>
                        <p
                            className='font-bold text-[#009C17]/80 text-2xl absolute bottom-15 left-[50%] transform -translate-x-[50%] border border-[#009C17]/40 px-3 py-2'>
                            {formatCurrencyCOP(slide.price)}
                        </p>
                        <button className='flex justify-center items-center gap-5 font-bold text-white border border-[#DD0000] absolute bottom-0 left-1/2 transform -translate-x-1/2 px-3 py-2 cursor-pointer'>
                            <span>
                                AÑADIR
                            </span>
                            <img src={carritoCompras} alt='carrito-compras' />
                        </button>
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl cursor-pointer">

            </div>
            <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl cursor-pointer">

            </div>


        </section>

    )


}

export default SliderClothing;