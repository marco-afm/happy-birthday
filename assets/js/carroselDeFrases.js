const carroselContent = document.querySelector('.carrosel-content');
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

function updateCarrosel() {
    carroselContent.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarrosel();
});

prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarrosel();
});