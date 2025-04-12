const Main = () => {
    return (
        <main className='w-full min-h-screen'>
            <section className='w-full h-screen flex flex-col items-center mt-10 text-white font-bold gap-8'>
                <button className='border border-[#DD0000] w-70 py-3 px-5'>
                    COMPRA TU SEGURO DE CARRO AQUÍ
                </button>
                <nav className='bg-black flex gap-2 w-full px-2'>
                    <a href="">Llaveros</a>
                    <a href="">Termos</a>
                    <a href="">Ropa</a>
                    <a href="">Performances</a>
                    <a href="">Tunning</a>
                </nav>
                <div>
                    slider
                </div>
                <button className='border py-4 px-5'>
                    COMPRA AHORA
                </button>
            </section>
        </main>
    )
}

export default Main; 