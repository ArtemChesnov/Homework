let button = document.getElementById('menu-btn');

let navigation = document.getElementById('menu');

button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
});