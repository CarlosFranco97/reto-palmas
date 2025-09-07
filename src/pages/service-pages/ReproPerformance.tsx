import reproPerformance from '../../assets/image/repro-performance.webp';
import ServiceSection from "./components/ServiceSection";
import MainLayout from "../../layouts/MainLayout";

const ReproPerformance = () => {

    const serviceContent = {
        title: 'PERFORMANCE',
        img: reproPerformance,
        info: 'Dale un ambiente único a tu vehículo con nuestro toque de confort y modernismo, ¡No lo pienses más!'
    }

    return (

        <MainLayout>
            <div className='w-full max-h-screen'>
                <section className='w-full h-[700px] py-5'>
                    <ServiceSection
                        title={serviceContent.title}
                        image={serviceContent.img}
                        info={serviceContent.info}
                    />
                </section>
            </div>
        </MainLayout>
    )
}

export default ReproPerformance;