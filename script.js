const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function mostrarDiapositiva(numero) {

    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    slides[numero].classList.add("active");
}


document.addEventListener("keydown", function(event) {

    // FLECHA DERECHA
    if (event.key === "ArrowRight") {

        if (currentSlide < slides.length - 1) {
            currentSlide++;
            mostrarDiapositiva(currentSlide);
        }

    }


    // FLECHA IZQUIERDA
    if (event.key === "ArrowLeft") {

        if (currentSlide > 0) {
            currentSlide--;
            mostrarDiapositiva(currentSlide);
        }

    }

});