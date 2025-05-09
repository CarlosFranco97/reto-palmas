import { Link } from "react-router-dom";

const Services = () => {
    return (
        <section className='w-full min-h-screen'>
        <div className='w-full h-full flex flex-col justify-center items-center gap-20 text-white font-bold py-20'>
            <h2 className='text-6xl'>
                SERVICIOS
            </h2>
            <div className='flex flex-col justify-center items-center'>
                <Link to={'/services/starceiling'} className='bg-[url("/image/techo-estrellado.webp")] bg-center bg-no-repeat w-96 h-[180px] flex items-center px-4 shadow-lg'>
                    <h4 className='text-2xl'> 
                        TECHO ESTRELLADO
                    </h4>
                </Link>
                <Link to={'/services/ledlights'} className='bg-[url("/image/luces-led-interior.webp")] w-[400px] h-[200px] bg-center bg-no-repeat flex justify-end items-center px-4 shadow-lg'>
                    <h4 className='text-2xl'> 
                        LUCES LED INTERIOR
                    </h4>
                </Link >
                <Link to={'/services/reproperformance'} className='bg-[url("/image/repro-performance.webp")] w-96 h-[150px] bg-center bg-no-repeat flex justify-start items-center px-4 shadow-lg'>
                    <h4 className='text-2xl w-40'> 
                        REPRO Y PERFORMANCE
                    </h4>
                </Link>
            </div>
        </div>
    </section>
    )
}

export default Services; 