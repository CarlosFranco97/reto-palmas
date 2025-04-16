import lucesLedInterior from '../../assets/image/luces-led-interior.webp';
import Layout from '../../layouts/Layout';
import ServiceSection from './components/ServiceSection';

const LedLights = () => {

    const serviceContent = {
        title: 'LUCES LED INTERIOR',
        img: lucesLedInterior,
        info: 'Dale un ambiente único a tu vehículo con nuestro toque de confort y modernismo, ¡No lo pienses más!'
    }

    return (
       
       <Layout>
            <div className='w-full max-h-screen'>
                <section className='w-full h-[700px] py-5'>
                    <ServiceSection
                        title={serviceContent.title}
                        image={serviceContent.img}
                        info={serviceContent.info}
                    />
                </section>
            </div>
        </Layout>

    )
}

export default LedLights;