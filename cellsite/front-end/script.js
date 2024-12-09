fetch('http://localhost:3000/products')
.then(response => response.json())
.then(data => {
    const productList = document.getElementById('product-list');
    data.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Preço: R$${product.price}</p>
            <img src="${product.image}" alt="${product.name}" width="200">
        `;
        productList.appendChild(li);
    });
})
.catch(error => console.error('Erro ao buscar produtos:', error));