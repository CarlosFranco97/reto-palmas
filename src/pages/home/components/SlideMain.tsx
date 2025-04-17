import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

interface contentSlider {
    image: string, 
    name: string
}

interface SlideMainProps {
    contentSlider: contentSlider[]
}

const SlideMain = ({contentSlider}: SlideMainProps) => {
    return (
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
            className='mySwiper w-full'
        >
            {contentSlider.map((contentSlider, index) => (
                <SwiperSlide 
                    key={index}>
                    <img src={contentSlider.image} alt={contentSlider.name} 
                    className='w-full h-full max-h-full max-w-full object-contain' />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SlideMain;