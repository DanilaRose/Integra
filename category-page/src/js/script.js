// КАТАЛОГ ТОВАРОВ

let coll = document.querySelectorAll('.head-nav_item__collapsible');

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        let content = this.nextElementSibling;
        if (content.style.display) {
            content.style.display = null;
        } else {
            content.style.display = content.style.display = 'flex';
        }
    });
}

// CATEGORY

let collap = document.querySelectorAll('.collapsible');

for (let i = 0; i < collap.length; i++) {
    collap[i].addEventListener('click', function () {
        let item = this.nextElementSibling;
        if (item.style.display) {
            item.style.display = null;
        } else {
            item.style.display = item.style.display = 'block';
        }
    });
}