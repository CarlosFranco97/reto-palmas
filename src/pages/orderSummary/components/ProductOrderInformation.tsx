import { ProductOrderInformationProps } from "../types/ProductOderInformationTypes";

const ProductOrderInformation = ({
  productId,
  productName,
  quantity,
  productImage,
}: ProductOrderInformationProps) => {
  return (
    <div className="flex items-center gap-5" key={productId}>
      <img className="w-[80px] h-[80px]" src={productImage} alt={productName} />
      <p className="font-semibold">{productName}</p>
      <div className="flex gap-2">
        <span>CANTIDAD</span>
        <span>{quantity}</span>
      </div>
    </div>
  );
};

export default ProductOrderInformation;
