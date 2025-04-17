import videoRetoPalmas from '../../../assets/image/videos.webp';
const Videos = () => {
    return (
        <section className='w-full min-h-screen'>
        <div className='w-full h-full flex flex-col justify-center items-center gap-20 text-white font-bold'>
            <h2 className='text-6xl'>
                VIDEOS
            </h2>
            <div>
                <img
                className='object-contain'
                src={videoRetoPalmas} 
                alt="video-reto-palmas" />
            </div>
        </div>
    </section>
    )
}

export default Videos;