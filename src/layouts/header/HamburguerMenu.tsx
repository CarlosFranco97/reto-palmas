import logoRetoPalmas from '../../assets/icon/logo-reto-palmas.svg';
import iconoCerrar from '../../assets/icon/icono-cerrar.svg';

interface HamburguerMenuProps {
    openHamburguerMenu: boolean,
    onClose: () => void
}
const HamburguerMenu = ({ openHamburguerMenu, onClose }: HamburguerMenuProps) => {

    return (
        <>
            <div
                className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-10 transition-opacity duration-300"
                style={{ opacity: openHamburguerMenu ? 1 : 0, pointerEvents: openHamburguerMenu ? 'auto' : 'none' }}
                onClick={onClose}
            ></div>

            <section className={`top-0 right-0 w-[80%] h-full z-20 bg-[url("https://www.transparenttextures.com/patterns/white-wall-3-2.png")] bg-black shadow-xl sm:w-[50%] 
        ${(openHamburguerMenu) ? 'fixed' : 'hidden'}`}>
                <div className='flex flex-col h-screen'>
                    <div className='flex justify-between items-center px-5'>
                        <img
                            src={logoRetoPalmas}
                            alt="logo-reto-palmas" />
                        <img
                            src={iconoCerrar}
                            onClick={() => onClose()}
                            alt="icono-cerrar"
                            className='cursor-pointer'
                        />
                    </div>
                    <nav className='flex flex-col justify-evenly items-center h-screen font-bold text-white text-center'>
                        <a className='border-b-4 border-[#DD0000]' href="">
                            EVENTOS
                        </a>
                        <a className='border-b-4 border-[#DD0000] w-50 sm:w-80' href="">
                            ¿TIENES PRODUCTOS PARA VENDER?
                        </a>
                        <a className='border-b-4 border-[#DD0000]' href="">
                            PAUTA CON RETO PALMAS
                        </a>
                        <a className='border-b-4 border-[#DD0000]' href="">
                            PREGUNTAS FRECUENTES
                        </a>
                        <a className='border-b-4 border-[#DD0000]' href="">
                            AYUDA
                        </a>
                    </nav>

                </div>

            </section>

        </>
    )
}

export default HamburguerMenu;