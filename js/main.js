window.addEventListener('scroll', function () {
    const elemento = document.getElementById('id-role-explore');
    const pixelsRolados = window.scrollY;
    const alturaMaxima = 500;

    let novaOpacidade = 1 - (pixelsRolados / alturaMaxima);

    if (novaOpacidade < 0) novaOpacidade = 0;
    if (novaOpacidade > 1) novaOpacidade = 1;

    elemento.style.opacity = novaOpacidade;
});