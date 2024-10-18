// Scroll suave já implementado via CSS

// Popup de confirmação ao enviar o formulário de cadastro
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio real do formulário

    // Cria e exibe o popup de confirmação
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <p>Obrigado por se cadastrar no Sigma!</p>
        <button id="closePopup">Fechar</button>
    `;

    document.body.appendChild(popup);
    popup.style.display = "block";

    // Fecha o popup ao clicar no botão
    document.getElementById("closePopup").addEventListener("click", function() {
        popup.style.display = "none";
        popup.remove(); // Remove o popup do DOM
    });
});

// Exemplo de código para o botão de WhatsApp já incluído no HTML
