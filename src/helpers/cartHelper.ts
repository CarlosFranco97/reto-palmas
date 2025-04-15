
export const calculateTotalPrice = (products: {price: number, quantity: number}[]):number => {
    return products.reduce(
        (total, product) => total + product.price * product.quantity, 0 
    )
};


export const formatCurrencyCOP = (value: number): string => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', 
        currency: 'COP', 
        minimumFractionDigits: 0
    }).format(value)
};


