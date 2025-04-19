import { formatCurrencyCOP } from '../../../helpers/cartHelper';
import ButtonAddToCart from './ButtonAddToCart';

interface contentProductItem {
    id: string, 
    price: number, 
    name: string, 
    image: string
}

interface ProductSectionProps {
    contentProduct: contentProductItem[]
}

const ProductSection = ({contentProduct}: ProductSectionProps) => {
    
    return (
        <div className='w-full h-full grid grid-cols-1 place-items-center gap-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                contentProduct.map(contentProduct => (
                    <div
                        key={contentProduct.id}
                        className='flex flex-col justify-center items-center gap-2'>
                        <section className='flex justify-center items-center bg-white rounded-2xl h-40 w-40'>
                            <img src={contentProduct.image} alt={contentProduct.name} />
                        </section>
                        <p className='text-white font-bold'>
                            {contentProduct.name}
                        </p>
                        <p className='text-white font-bold text-2xl'>
                            {formatCurrencyCOP(contentProduct.price)}
                        </p>
                       <ButtonAddToCart />
                    </div>
                ))
            }
        </div>
    )
}

export default ProductSection;