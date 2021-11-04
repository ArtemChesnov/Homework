let arrowNow = document.getElementById('now');

let navigationNow = document.getElementById('subNow');

arrowNow.addEventListener('click', function () {
    navigationNow.classList.toggle('display-block');
});



let arrowSizes = document.getElementById('sizes');

let navigationSizes = document.getElementById('subSize');

arrowSizes.addEventListener('click', function () {
    navigationSizes.classList.toggle('display-block');
});


let arrowPrice = document.getElementById('price');

let navigationPrice = document.getElementById('subPrice');

arrowPrice.addEventListener('click', function () {
    navigationPrice.classList.toggle('display-block');
});