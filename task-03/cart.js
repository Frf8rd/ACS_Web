export function addProduct(cart, product) {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        return cart.map(item =>
            item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + product.quantity
                }
                : item
        );
    }

    return [...cart, product];
}
