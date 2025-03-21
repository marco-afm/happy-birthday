// document.addEventListener("DOMContentLoaded", function() {
//     const audio = document.getElementById("audioFundo");

//     document.body.addEventListener("click", function() {
//         if (audio.paused) {
//             audio.play();
//         }
//     });
// });

const btnAbrir = document.querySelector(".btnAbrir");
const audioFundo = document.querySelector(".audioFundo");

btnAbrir.addEventListener("click", function() {
    audioFundo.play();
});
