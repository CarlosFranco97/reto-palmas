import QuoteButton from "./QuoteButton";

interface ServiceSectionProps {
    title: string, 
    image: string, 
    info: string
}

const ServiceSection = ({title, image, info}: ServiceSectionProps) => {

    return (
        <div className='h-[600px] px-5 flex flex-col justify-center items-center gap-5 sm:flex-row md:justify-around'>

            <img
                src={image}
                alt="repro-performance" />

            <section className='flex flex-col justify-around items-center gap-5'>
                <h4 className='text-white text-center font-bold text-4xl'>
                    {title}
                </h4>
                <p className='text-white text-center text-xl px-2'>
                    {info}
                </p>
                <QuoteButton />
            </section>
        </div>
    )

}

export default ServiceSection;