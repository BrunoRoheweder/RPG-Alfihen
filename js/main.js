window.addEventListener('scroll', function () {
    const elemento = document.getElementById('id-role-explore');
    const pixelsRolados = window.scrollY;
    const alturaMaxima = 500;

    let novaOpacidade = 1 - (pixelsRolados / alturaMaxima);

    if (novaOpacidade < 0) novaOpacidade = 0;
    if (novaOpacidade > 1) novaOpacidade = 1;

    elemento.style.opacity = novaOpacidade;
});


// ==========================================
// CONFIGURAÇÃO ULTRA SUAVE (LENIS REFINADO)
// ==========================================
const lenis = new Lenis({
    duration: 1.5,           // Um pouco mais de tempo para o deslize aparecer
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: 'vertical',
    gestureDirection: 'vertical',
    smoothWithTouch: false,  // Deixe false para não travar em notebooks com touch ou mouses específicos
    infinite: false,
    lerp: 0.08               // O SEGREDO: Valores entre 0.05 e 0.1 deixam o efeito "manteiga" bem visível
});

// Sincronização de alta performance usando o carimbo de data/hora nativo
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);