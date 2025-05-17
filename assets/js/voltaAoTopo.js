const caixaBtnVoltaAoTopo = document.querySelector(".caixaBtnVoltaAoTopo");
const elementoMonitorado = window;
const posicaoExibicao = 1280;

elementoMonitorado.addEventListener("scroll", function() {
    if (window.pageYOffset > posicaoExibicao) {
        caixaBtnVoltaAoTopo.classList.add("visivel");
    } else {
        caixaBtnVoltaAoTopo.classList.remove("visivel");
    }
});
