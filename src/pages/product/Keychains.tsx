import Layout from "../../layouts/Layout";
import rcDriftPorsche from '../../assets/image/rc-drift-porsche.webp';
import ProductSection from "./components/ProductSection";

const Keychains = () => {

    const contentProductSection = [
        {
            id: '52200',
            price: 129900,
            name: 'RC DRIFT PORSCHE',
            image: rcDriftPorsche,
        },
        {
            id: '522001',
            price: 129900,
            name: 'RC DRIFT PORSCHE',
            image: rcDriftPorsche,
        },
        {
            id: '522002',
            price: 129900,
            name: 'RC DRIFT PORSCHE',
            image: rcDriftPorsche,
        },
        {
            id: '522003',
            price: 129900,
            name: 'RC DRIFT PORSCHE',
            image: rcDriftPorsche,
        },
        {
            id: '5220035',
            price: 129900,
            name: 'RC DRIFT PORSCHE',
            image: rcDriftPorsche,
        },
        {
            id: '5220031',
            price: 129900,
            name: 'RC DRIFT PORSCHE',
            image: rcDriftPorsche,
        },
        {
            id: '5220032',
            price: 129900,
            name: 'RC DRIFT PORSCHE',
            image: rcDriftPorsche,
        },
        {
            id: '5220036',
            price: 129900,
            name: 'RC DRIFT PORSCHE',
            image: rcDriftPorsche,
        },
    ]

    return (
        <Layout>
            <div className='w-full min-h-screen'>
                <section className='w-full h-full flex flex-col items-center gap-20'>
                    <h2 className='text-white font-bold text-5xl mt-10'>
                        LLAVEROS
                    </h2>

                    <ProductSection 
                        contentProduct={contentProductSection}
                    />

                </section>
            </div>
        </Layout>
    )
}

export default Keychains;