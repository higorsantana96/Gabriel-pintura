const sectionObras = document.querySelector('section[name="obras"]');
const divItens = sectionObras.querySelector('.itens');

let ativado = false;
let coordenadaXInicial;
let rolagemParaEsquerda;

divItens.addEventListener('mousedown', (evento) => {
    ativado = true;
    divItens.classList.add('drag');
    coordenadaXInicial = evento.pageX - divItens.offsetLeft;
    rolagemParaEsquerda = divItens.scrollLeft;
    evento.preventDefault(); // evita seleção de imagens/textos
});

divItens.addEventListener('mouseleave', () => {
    ativado = false;
    divItens.classList.remove('drag');
});

divItens.addEventListener('mouseup', () => {
    ativado = false;
    divItens.classList.remove('drag');
});

divItens.addEventListener('mousemove', (evento) => {
    if (!ativado) return;
    evento.preventDefault();
    const coordenadaX = evento.pageX - divItens.offsetLeft;
    const distancia = (coordenadaX - coordenadaXInicial) * 2;
    divItens.scrollLeft = rolagemParaEsquerda - distancia;
});