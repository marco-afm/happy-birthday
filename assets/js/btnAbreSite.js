// ========== Botão abre presente ========== //
const btnAbrir = document.querySelector(".btnAbrir");
const modalAbrir = document.querySelector(".modalAbrir");
const audioFundo = document.getElementById("audioFundo");

btnAbrir.addEventListener("click", function() {
    modalAbrir.style.display = "none";
    if (audioFundo.paused) {
        audioFundo.play();
    }
});
