
import SliderClothing from './components/SliderClothing';
import busoBlanco from '../../assets/image/buso-blanco.webp';
import busoNegro from '../../assets/image/buso-negro.webp';
import busoCustom from '../../assets/image/buso-custom.webp';
import MainLayout from '../../layouts/MainLayout';

const MenClothing = () => {
    
    const title = 'ROPA HOMBRE'; 

    const contentSlider = [
        {
            image: busoBlanco,
            name: 'BUSO BLANCO',
            price: 129000
        },
        {
            image: busoNegro,
            name: 'BUSO NEGRO',
            price: 129000

        },
        {
            image: busoCustom,
            name: 'BUSO RPM',
            price: 129000
        }

    ]

    return (
        <MainLayout>
            <div className='w-full min-h-screen'>
                <SliderClothing
                    contentSlider={contentSlider} 
                    title={title}/>
            </div>
        </MainLayout>
    )

}

export default MenClothing;