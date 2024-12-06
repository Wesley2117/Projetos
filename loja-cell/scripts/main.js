const cart = [];
const cartSection = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const buyNowButton = document.getElementById('buy-now');

document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        const itemName = button.parentNode.querySelector('h3').innerText;
        const itemPrice = button.parentNode.querySelector('p.text-red-700').innerText;

        cart.push({ name: itemName, price: itemPrice });
        updateCart();
    });
});

function updateCart() {
    cartSection.classList.remove('hidden');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <li class="flex justify-between py-2 border-b">
                <span>${item.name}</span>
                <span>${item.price}</span>
            </li>
        `;
    });
}

buyNowButton.addEventListener('click', () => {
    const message = cart.map(item => `${item.name} - ${item.price}`).join('\n');
    const whatsappUrl = `https://wa.me/SEU_NUMERO?text=${encodeURIComponent(`Pedido Dev Burguer:\n${message}`)}`;
    window.open(whatsappUrl, '_blank');
});
