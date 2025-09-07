import Input from "../../components/Input";
import CheckoutLayout from "../../layouts/CheckoutLayout";

const InsuranceQuoteForm = () => {
  return (
    <CheckoutLayout>
      <div className="w-full h-dvh">
        <div className="w-full h-full flex justify-center items-center">
          <form
            className="bg-white/95 w-[70%] max-w-[600px] h-[80%] max-h-[500px] flex flex-col justify-around items-center rounded-sm"
            action=""
          >
            <h2 className="text-center font-semibold text-2xl w-[220px] sm:w-[280px] md:w-[310px] lg:w-[330px] xl:w-[500px]">
              TE COTIZAMOS TU SEGURO SIN COMPROMISO
            </h2>
            <div className="w-full h-[50%] flex flex-col justify-center items-center gap-3">
              <Input placeholder="Nombre Completo" type="text" />
              <Input placeholder="Celular" type="text" />
              <Input placeholder="Correo" type="text" />
              <Input placeholder="Placa del vehículo" type="text" />
            </div>
            <button
              className="bg-[#009C17] w-[115px] h-[45px] text-white rounded-sm font-semibold cursor-pointer flex justify-center items-center"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default InsuranceQuoteForm;
