import { Link } from "react-router-dom";

const SendButton = () => {
  return (
    <Link
      to={"/ordersummary"}
      className="bg-[#009C17] w-[115px] h-[45px] text-white rounded-sm font-semibold cursor-pointer flex justify-center items-center"
    >
      Enviar
    </Link>
  );
};

export default SendButton;
