import CheckoutLayout from "../../layouts/CheckoutLayout";
import BuyButton from "./components/BuyButton";
import ProductOrderInformation from "./components/ProductOrderInformation";

const OrderSummary = () => {
  const mockProducts = [
    {
      productId: 20,
      productName: "Nombre del producto",
      quantity: 5,
      productImage: "",
    },
    {
      productId: 1,
      productName: "Nombre del producto",
      quantity: 5,
      productImage: "",
    },
    {
      productId: 2,
      productName: "Nombre del producto",
      quantity: 5,
      productImage: "",
    },
    {
      productId: 3,
      productName: "Nombre del producto",
      quantity: 5,
      productImage: "",
    },
    {
      productId: 9,
      productName: "Nombre del producto",
      quantity: 5,
      productImage: "",
    },
    {
      productId: 11,
      productName: "Nombre del producto",
      quantity: 5,
      productImage: "",
    },
  ];

  return (
    <CheckoutLayout>
      <div className="w-full h-dvh">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-[70%] max-w-[700px] h-[80%] max-h-[600px] flex flex-col justify-start items-center rounded-sm border-1 border-black py-2">
            <h2 className="text-center font-semibold text-2xl">
              Resumen del pedido
            </h2>
            <section className="flex flex-col items-center gap-5 py-5 overflow-y-auto w-full">
              {mockProducts.map((product) => (
                <ProductOrderInformation
                  productId={product.productId}
                  productName={product.productName}
                  quantity={5}
                  productImage={""}
                />
              ))}
            </section>
            <BuyButton />
          </div>
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default OrderSummary;
