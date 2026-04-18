// Redirecionar para páginas das criaturas
document.querySelectorAll('.criatura').forEach(criatura => {
    criatura.addEventListener('click', (e) => {
        e.stopPropagation();
        const arquivo = criatura.dataset.arquivo;
        if (arquivo) {
            window.location.href = arquivo;
        }
    });
});

// Efeito ao passar o mouse
document.querySelectorAll('.criatura').forEach(criatura => {
    criatura.addEventListener('mouseenter', () => {
        criatura.style.filter = 'drop-shadow(0 0 20px rgba(135, 206, 250, 0.8))';
    });

    criatura.addEventListener('mouseleave', () => {
        criatura.style.filter = 'none';
    });
});

console.log('🌊 Bem-vindo ao Aquário Interativo! Clique em qualquer criatura para explorar.');
