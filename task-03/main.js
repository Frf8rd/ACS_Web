
import {
    addProduct,
    removeProduct,
    updateQuantity,
    calculateTotal,
    showCart
} from "./cart.js";

let cart = [
    {
        id: 1,
        name: "Laptop",
        price: 25000,
        quantity: 1
    },
    {
        id: 2,
        name: "Mouse",
        price: 500,
        quantity: 2
    },
    {
        id: 3,
        name: "Tastatura",
        price: 1000,
        quantity: 1
    }
];

console.log(" am creat coșul inițial");
showCart(cart);

console.log(` am calculat totalul: ${calculateTotal(cart)} lei`);

cart = addProduct(cart, {
    id: 4,
    name: "Căști",
    price: 1500,
    quantity: 1
});

console.log(" am adăugat un produs nou");
showCart(cart);

console.log(` am recalculat totalul: ${calculateTotal(cart)} lei`);

cart = updateQuantity(cart, 2, 5);

console.log(" am modificat cantitatea produsului");
showCart(cart);

console.log(` am recalculat totalul: ${calculateTotal(cart)} lei`);

cart = removeProduct(cart, 3);

console.log(" am șters un produs din coș");
showCart(cart);

console.log(`am calculat totalul final: ${calculateTotal(cart)} lei`);

try {
    cart = removeProduct(cart, 999);
} catch (error) {
    console.log(`am primit o eroare: ${error.message}`);
}
