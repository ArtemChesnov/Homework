// Бургер-меню

let button = document.getElementById('menu-btn');

let navigation = document.getElementById('menu');

button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
});



// Слайды продуктов
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("colection__slides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}




let arrowColor = document.getElementById('arrow1');

let navi = document.getElementById('color');

arrowColor.addEventListener('click', function () {
    navi.classList.toggle('display-block');
});



let arrowSize = document.getElementById('size');

let navig = document.getElementById('arrow2');

arrowSize.addEventListener('click', function () {
    navig.classList.toggle('display-block');
});


let arrowQuantity = document.getElementById('arrow3');

let naviga = document.getElementById('quantity');

arrowQuantity.addEventListener('click', function () {
    naviga.classList.toggle('display-block');
});