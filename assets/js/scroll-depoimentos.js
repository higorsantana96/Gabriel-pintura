const sectionDepoimentos = document.querySelector('section[name="depoimentos"]');
const divQuadros = sectionDepoimentos.querySelector('.container-depoimentos');

let ativadoDepoimentos = false;
let coordenadaXInicialDepoimentos;
let rolagemParaEsquerdaDepoimentos;

divQuadros.addEventListener('mousedown', (evento) => {
    ativadoDepoimentos = true;
    divQuadros.classList.add('drag');
    coordenadaXInicialDepoimentos = evento.pageX - divQuadros.offsetLeft;
    rolagemParaEsquerdaDepoimentos = divQuadros.scrollLeft;
    evento.preventDefault(); // evita seleção de imagens/textos
});

divQuadros.addEventListener('mouseleave', () => {
    ativadoDepoimentos = false;
    divQuadros.classList.remove('drag');
});

divQuadros.addEventListener('mouseup', () => {
    ativadoDepoimentos = false;
    divQuadros.classList.remove('drag');
});

divQuadros.addEventListener('mousemove', (evento) => {
    if (!ativadoDepoimentos) return;
    evento.preventDefault();
    const coordenadaX = evento.pageX - divQuadros.offsetLeft;
    const distancia = (coordenadaX - coordenadaXInicialDepoimentos) * 2;
    divQuadros.scrollLeft = rolagemParaEsquerdaDepoimentos - distancia;
});