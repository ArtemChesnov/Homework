let filter = document.getElementById('filter-button');

let filterList = document.getElementById('filter-list');

filter.addEventListener('click', function () {
    filterList.classList.toggle('display-block');
});

let filterSub = document.getElementById('filter-heading');

let sublistOpen = document.getElementById('filter-sublist');

filterSub.addEventListener('click', function () {
    sublistOpen.classList.toggle('display-block');
});