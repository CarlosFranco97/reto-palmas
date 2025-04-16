import logoWhatsapp from '../../../assets/icon/logo-whatsapp.svg';

const QuoteButton = () => {
    return (
        <button className='flex justify-center items-center gap-5 border border-[#009C17]/40 text-white px-4 py-3 cursor-pointer hover:bg-[#009C17] transition-all duartion-300'>
            <span className='font-bold'>
                COTIZA AQUÍ
            </span>
            <img src={logoWhatsapp} alt='logo-whatsapp' />
        </button>
    )
}

export default QuoteButton;