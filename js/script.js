let button = document.getElementById('menu-btn');

let navigation = document.getElementById('menu');

let box = document.getElementById('box');

button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
    box.classList.toggle('display-block');
});