// === Menu Hambúrguer ===
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')){
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

// === Envio do Formulário para WhatsApp ===
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos do formulário
    const fullName = document.querySelector("input[name='full_name']").value;
    const email = document.querySelector("input[name='email']").value;
    const phone = document.querySelector("input[name='phone']").value;
    const subject = document.querySelector("input[name='subject']").value;
    const message = document.querySelector("textarea[name='message']").value;

    // Monta a mensagem para o WhatsApp
    const whatsappMessage = `Nome: ${fullName}%0AEmail: ${email}%0ATelefone: ${phone}%0AAssunto: ${subject}%0AMensagem: ${message}`;

    // Número de telefone do WhatsApp (substitua pelo seu número com código do país)
    const whatsappNumber = "+55 (85) 999295091"; // Exemplo: 55 + código da cidade + número

    // Monta o link do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Redireciona para o WhatsApp
    window.open(whatsappUrl, "_blank");
});


