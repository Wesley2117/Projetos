document.addEventListener('DOMContentLoaded', () => {
    const detailsButton = document.getElementById('detailsButton');
    if (detailsButton) {
        detailsButton.addEventListener('click', () => {
            window.location.href = 'motos.html';
        });
    }
});
