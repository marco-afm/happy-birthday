document.addEventListener("DOMContentLoaded", function() {
    const audioFundo = document.getElementById("audioFundo");
    audioFundo.paused();
    
    audioFundo.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
        }
    });
});