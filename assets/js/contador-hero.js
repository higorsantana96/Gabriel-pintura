const contadores = document.querySelectorAll('.contador');
const tempoTotal = 2000;

function contarAte(numero) {
    const valorFinal = +numero.getAttribute('data-target');
    const inicio = performance.now();

    function animar(tempoAtual) {
        const tempoPassado = tempoAtual - inicio;
        const progresso = Math.min(tempoPassado / tempoTotal, 1);

        numero.innerText = Math.floor(progresso * valorFinal);

        if (progresso < 1) {
            requestAnimationFrame(animar);
        } else {
            numero.innerText = valorFinal;
        }
    }

    requestAnimationFrame(animar);
}

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            contadores.forEach(contarAte);
        }
    });
}, { threshold: 0.5 });

contadores.forEach(numero => observador.observe(numero));