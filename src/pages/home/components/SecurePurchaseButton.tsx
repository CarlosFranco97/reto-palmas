import { Link } from "react-router-dom";

const SecurePurchaseButton = () => {
    return (
        <Link 
        to={"/insurancequoteform"}
        className='border border-[#DD0000] w-76 py-3 px-5 text-xl cursor-pointer hover:bg-[#DD0000] transition duration-500 sm:w-90 md:text-2xl md:w-auto'>
            COMPRA TU SEGURO DE CARRO AQUÍ
        </Link>
    )
}

export default SecurePurchaseButton;