import { Link } from "react-router-dom";

const CartShippingInformation = () => {
    return (
        <div className="bg-white/35 w-full h-screen">
            <div className="w-full h-full flex justify-center items-center">
                <form 
                className="bg-white w-[70%] max-w-[600px] h-[80%] max-h-[500px] flex flex-col justify-around items-center rounded-sm" 
                action="">
                    <h2 className="text-center font-semibold text-2xl w-[220px]">Datos para el envío de tu pedido</h2>
                    <div className="w-full h-[50%] flex flex-col justify-center items-center gap-3">
                        <input 
                        className="bg-[#D9D9D9]/45 w-[85%] h-[50px] max-w-[420px] rounded-sm pl-3 focus:outline-green-200 font-semibold placeholder:text-[#000000]/40"
                        placeholder="Nombre completo"
                        type="text" />
                        <input 
                        className="bg-[#D9D9D9]/45 w-[85%] h-[50px] max-w-[420px] rounded-sm pl-3 focus:outline-green-200 font-semibold placeholder:text-[#000000]/40"
                        placeholder="Celular"
                        type="text" />
                        <input 
                        className="bg-[#D9D9D9]/45 w-[85%] h-[50px] max-w-[420px] rounded-sm pl-3 focus:outline-green-200 font-semibold placeholder:text-[#000000]/40"
                        placeholder="Correo"
                        type="text" />
                        <input 
                        className="bg-[#D9D9D9]/45 w-[85%] h-[50px] max-w-[420px] rounded-sm pl-3 focus:outline-green-200 font-semibold placeholder:text-[#000000]/40"
                        placeholder="Dirección" 
                        type="text" />
                    </div>
                    <Link 
                    to={"/orderSummary"}
                    className="bg-[#009C17] w-[115px] h-[45px] text-white rounded-sm font-semibold cursor-pointer flex justify-center items-center">
                        Enviar
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default CartShippingInformation;