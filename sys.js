document.addEventListener("wheel", function(event) {
    // Permite o zoom quando a tecla Ctrl está pressionada
    if (event.ctrlKey) return;

    event.preventDefault();
    window.scrollBy({
        left: event.deltaY * 2, // Multiplica para dar mais suavidade
        behavior: 'smooth'
    });
}, { passive: false });