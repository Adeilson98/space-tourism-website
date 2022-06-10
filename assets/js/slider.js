let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let i;

    let slides = document.getElementsByClassName('item');

    let dots = document.getElementsByClassName('counter');

    if(n > slides.length) {
        slideIndex - 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex -1].className += " active";
}