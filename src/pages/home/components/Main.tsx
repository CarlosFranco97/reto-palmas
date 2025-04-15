const Main = () => {
    return (
        <main className='w-full min-h-screen'>
            <section className='w-full h-screen flex flex-col items-center mt-10 text-white font-bold gap-10 sm:gap-30 md:gap-5'>
                <h1 className='text-white block text-2xl w-80 font-bold text-center sm:hidden'>
                    LA TIENDA PARA LOS AMANTES DE LOS CARROS
                </h1>
                <button className='border border-[#DD0000] w-76 py-3 px-5 sm:w-90'>
                    COMPRA TU SEGURO DE CARRO AQUÍ
                </button>
                <nav className='flex justify-center gap-2 w-full px-2 sm:gap-15'>
                    <a href="">Llaveros</a>
                    <a href="">Termos</a>
                    <a href="">Ropa</a>
                    <a href="">Performances</a>
                    <a href="">Tunning</a>
                </nav>
                <div className='bg-white w-80 h-80'>
                    slider
                </div>
                <div className='w-[80%] relative flex flex-col justify-center items-center'>
                    <button className='border bg-black py-2 px-5 z-2'>
                        COMPRA AHORA
                    </button>
                    <hr className='bg-[#DD0000] h-[10px] w-full border-none absolute' />
                </div>
            </section>
        </main>
    )
}

export default Main; 