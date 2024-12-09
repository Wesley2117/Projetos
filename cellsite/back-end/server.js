const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Produtos simulados (dados estáticos)
const products = [
    {
        id: 1,
        name: 'Galaxy S23 5G',
        description: 'Smartphone Samsung Galaxy S23 5G 256GB 8GB de RAM Tela 6,1"',
        price: 2969.10,
        image: './assets/celular01.png',
    },
    {
        id: 2,
        name: 'Galaxy S23 Ultra',
        description: 'Samsung Galaxy S23 Ultra 5G 256GB Tela 6.8" 12GB RAM',
        price: 5190.00,
        image: './assets/celular02.jpg',
    },
];

// Rota para obter os produtos
app.get('/products', (req, res) => {
    res.json(products);
});

// Rota inicial
app.get('/', (req, res) => {
    res.send('Servidor Backend está funcionando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
