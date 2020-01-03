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

$('.slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider2'
});
$('.slider2').slick({
    slidesToShow: 3.84,
    slidesToScroll: 1,
    asNavFor: '.slider1',
    dots: false,
    centerMode: true,
    arrows: true,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    focusOnSelect: true,
    // centerPadding: '25px',
    vertical: true,
    verticalSwiping: true,
});

let prev = document.querySelectorAll('.prev')[0],
    slider2 = document.querySelectorAll('.slider2')[0];

prev.style.display = 'none';
slider2.style.height = 470 + 'px';
