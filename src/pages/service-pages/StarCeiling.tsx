import Layout from "../../layouts/Layout";
import ServiceSection from "./components/ServiceSection";
import techoEstrellado from '../../assets/image/techo-estrellado.webp';
const StarCeiling = () => {
    
    const serviceContent = {
        title: 'TECHO ESTRELLADO',
        img: techoEstrellado,
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

export default StarCeiling;