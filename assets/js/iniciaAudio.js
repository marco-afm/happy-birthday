document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audioFundo");

    document.body.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
        }
    });
});