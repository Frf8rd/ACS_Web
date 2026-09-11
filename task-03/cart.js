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


export function removeProduct(cart, productId) {
    const productExists = cart.find(item => item.id === productId);

    if (!productExists) {
        throw new Error(
            `Produsul cu ID-ul ${productId} nu există în coș.`
        );
    }

    return cart.filter(item => item.id !== productId);
}


export function updateQuantity(cart, productId, quantity) {
    return cart.map(item =>
        item.id === productId
            ? { ...item, quantity }
            : item
    );
}


export function calculateTotal(cart) {
    return cart.reduce(
        (total, { price, quantity }) =>
            total + price * quantity,
        0
    );
}


export function showCart(cart) {
    cart.forEach(({ name, price, quantity }) => {
        console.log(
            `${name} - ${price} lei x ${quantity}`
        );
    });
}