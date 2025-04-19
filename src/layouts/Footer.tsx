import logoRetoPalmas from '../assets/icon/logo-reto-palmas.svg';
const Footer = () => {
    return (
        <footer className='w-full h-[180px]'>
            <section className='w-full h-full flex flex-col justify-center items-center py-5'>
                <h2 className='text-white font-bold text-3xl'>
                    SÍGUENOS EN REDES
                </h2>
                <div className=''>
                    <img src={logoRetoPalmas} alt="logo-reto-palmas" />
                </div>
            </section>
        </footer>
    )
}

export default Footer;