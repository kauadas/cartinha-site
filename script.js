// Elementos do DOM
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Verificar se está em dispositivo móvel
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth <= 800;
}

// Mostrar botão de fullscreen apenas em dispositivos móveis
if (isMobile()) {
    fullscreenBtn.style.display = 'block';
}

// Função para entrar em tela cheia
function enterFullscreen() {
    const element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { // Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE11
        element.msRequestFullscreen();
    }

    // Esconder o botão após entrar em fullscreen
    fullscreenBtn.style.display = 'none';
}

// Event listener para o botão de fullscreen
fullscreenBtn.addEventListener('click', enterFullscreen);

// Detectar quando sair do fullscreen para mostrar o botão novamente
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        if (isMobile()) {
            fullscreenBtn.style.display = 'block';
        }
    }
});

document.addEventListener('webkitfullscreenchange', () => {
    if (!document.webkitFullscreenElement) {
        if (isMobile()) {
            fullscreenBtn.style.display = 'block';
        }
    }
});

document.addEventListener('msfullscreenchange', () => {
    if (!document.msFullscreenElement) {
        if (isMobile()) {
            fullscreenBtn.style.display = 'block';
        }
    }
});

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
