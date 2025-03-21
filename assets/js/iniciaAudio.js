// document.addEventListener("DOMContentLoaded", function() {
    const audioFundo = document.getElementById("audioFundo");
    const btnAbrir = document.getElementById("btnAbrir");
    
    btnAbrir.addEventListener("click", function() {
        if (audioFundo.paused) {
            audioFundo.play();
        }
    });
// });