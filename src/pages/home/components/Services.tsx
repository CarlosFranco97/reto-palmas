const Services = () => {
    return (
        <section className='w-full min-h-screen'>
        <div className='w-full h-auto flex flex-col justify-center items-center gap-20 text-white font-bold py-20'>
            <h2 className='text-5xl'>
                SERVICIOS
            </h2>
            <div className='flex flex-col justify-center items-center'>
                <div className='bg-[url("/img/techo-estrellado.webp")] w-96 h-[150px] bg-center bg-no-repeat flex items-center px-4 shadow-lg'>
                    <h4 className='text-2xl'> 
                        TECHO ESTRELLADO
                    </h4>
                </div>
                <div className='bg-[url("/img/luces-led-interior.webp")] w-96 h-[150px] bg-center bg-no-repeat flex justify-end items-center px-4 shadow-lg'>
                    <h4 className='text-2xl'> 
                        LUCES LED INTERIOR
                    </h4>
                </div>
                <div className='bg-[url("/img/repro-performance.webp")] w-96 h-[150px] bg-center bg-no-repeat flex justify-start items-center px-4 shadow-lg'>
                    <h4 className='text-2xl w-40'> 
                        REPRO Y PERFORMANCE
                    </h4>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services; 