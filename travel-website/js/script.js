// Muda a cor da navbar quando estiver sobre a div booking //
window.addEventListener('scroll', alterarCorNavBar);

function alterarCorNavBar() {
    const navbar = document.querySelector('nav');
    const booking = document.querySelector('.booking');
    const bookingRect = booking.getBoundingClientRect();

    if (bookingRect.top < 50) {
        navbar.classList.add('navbar-solida');
    } else {
        navbar.classList.remove('navbar-solida');
    }
}

// Carrossel //
const clientes = document.querySelectorAll('.clientes');
let clienteAtual = 0;

function mostrarSlide(index) {
    clientes.forEach((cliente, i) => {
        if (i === index) {
            cliente.style.display = 'block';
        } else {
            cliente.style.display = 'none';
        }
    });
}

function proximo() {
    clienteAtual = (clienteAtual + 1) % clientes.length;
    mostrarSlide(clienteAtual);
}

function anterior() {
    clienteAtual = (clienteAtual - 1 + clientes.length) % clientes.length;
    mostrarSlide(clienteAtual);
}

document.querySelector('.anterior').addEventListener('click', anterior);
document.querySelector('.proximo').addEventListener('click', proximo);

// Mostra o primeiro cliente ao carregar a página //
mostrarSlide(clienteAtual);
