import Layout from "../../layouts/Layout";
import SliderClothing from "./components/SliderClothing";
import modeloBusoBlanco from '../../assets/image/modelo-buso-blanco.png';
import modeloBusoNegro from '../../assets/image/modelo-buso-negro.webp';
import modeloBusoRojo from '../../assets/image/modelo-buso-rojo.webp';
const WomenClothing = () => {
    
    const title = 'ROPA MUJER'; 

    const contentSlider = [
        {
            image: modeloBusoBlanco,
            name: 'BUSO BLANCO',
            price: 129000
        },
        {
            image: modeloBusoNegro,
            name: 'BUSO NEGRO',
            price: 129000

        },
        {
            image: modeloBusoRojo,
            name: 'BUSO ROJO',
            price: 129000
        }

    ]

    return (
        <Layout>
            <div className='w-full min-h-screen'>
                <SliderClothing
                    contentSlider={contentSlider}
                    title={title} />
            </div>
        </Layout>
    )
}

export default WomenClothing;