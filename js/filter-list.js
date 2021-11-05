let filter = document.getElementById('filter-button');

let filterList = document.getElementById('filter-list');

filter.addEventListener('click', function () {
    filterList.classList.toggle('display-block');
});



let category = document.getElementById('category');

let categorySublist = document.getElementById('category-sublist');

category.addEventListener('click', function () {
    categorySublist.classList.toggle('display-block');
});



let brand = document.getElementById('brand');

let brandSublist = document.getElementById('brand-sublist');

brand.addEventListener('click', function () {
    brandSublist.classList.toggle('display-block');
});



let designer = document.getElementById('designer');

let designerSublist = document.getElementById('designer-sublist');

designer.addEventListener('click', function () {
    designerSublist.classList.toggle('display-block');
});