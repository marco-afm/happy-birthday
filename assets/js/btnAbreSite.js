const btnAbrir = document.querySelector(".btnAbrir");
const audioFundo = document.getElementById("audioFundo");

btnAbrir.addEventListener("click", function() {
    if (audioFundo.paused) {
        audioFundo.play();
    }
});