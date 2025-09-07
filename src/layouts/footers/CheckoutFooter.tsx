import logoRetoPalmas from "../../assets/icon/logo-reto-palmas.svg";

const CheckoutFooter = () => {
  return (
    <footer className="w-full px-10">
      <section className="w-full h-full flex flex-col justify-center items-center py-5">
        <h2 className="text-white text-3xl">
            <span className="flex">
                RET
                <img src={logoRetoPalmas} alt="reto-palmas" className="w-10"/> 
            </span>
            PALMAS
        </h2>
      </section>
    </footer>
  );
};

export default CheckoutFooter;
