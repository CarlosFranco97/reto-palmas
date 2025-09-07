import Input from "../../components/Input";
import CheckoutLayout from "../../layouts/CheckoutLayout";
import SendButton from "./components/SendButton";

const AddressForm = () => {
  return (
    <CheckoutLayout>
      <div className="w-full h-screen">
        <div className="w-full h-full flex justify-center items-center">
          <form
            className="bg-white/95 w-[70%] max-w-[600px] h-[80%] max-h-[500px] flex flex-col justify-around items-center rounded-sm"
            action=""
          >
            <h2 className="text-center font-semibold text-2xl w-[220px] max-w-[500px]">
              Datos para el envío de tu pedido
            </h2>
            <div className="w-full h-[50%] flex flex-col justify-center items-center gap-3">
              <Input placeholder="Nombre Completo" type="text" />
              <Input placeholder="Celular" type="text" />
              <Input placeholder="Correo" type="text" />
              <Input placeholder="Direccion" type="text" />
            </div>
            <SendButton />
          </form>
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default AddressForm;
