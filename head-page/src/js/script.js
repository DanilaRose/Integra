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

// CATEGORY SLIDER 
$(document).ready(function () {
    $('.category-slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        
    });
});
// MAIN SLIDER

$(document).ready(function () {
    $('.main-item-slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        responsive: [{
            },
            {
                breakpoint: 993, // до 993px точки и стрелки не отображаются
                settings: {
                    arrows: false,
                    dots: false,
                }
            },
        ]
  });
});

// SEARCH INPUT
let search = document.querySelectorAll('.head-nav_item__search__img');

for (let i = 0; i < search.length; i++) {
    search[i].addEventListener('click', function () {
        let input = this.nextElementSibling;
        if (input.style.display) {
            input.style.display = null;
        } else {
            input.style.display = input.style.display = 'block';
        }
    });
}

// BURGER MENU
$(document).ready(function () {
    var link = $('.burgers-link');
    var link_active = $('.burgers-link_active');
    var burgers = $('.burgers');
    var nav_link = $('.burgers a');

    // link.click(function () {
    //     link.toggleClass('burgers-link_active');
    //     burgers.toggleClass('burgers_active');
    // });
    nav_link.click(function () {
        link.toggleClass('burgers-link_active');
        burgers.toggleClass('burgers_active');
    });
});

$('.burgers-link').click(function () {
    $(this).toggleClass('burgers-link_active');
    $('.burgers').toggleClass('burgers_active');
});

$('.collapsible').click(function () {
    $(this).find(".collapsible-arrow").toggleClass('down');
    // $(this).find(".collapsible-arrow").css("-webkit-transform", " ");
});

// $(function () {
//     $('.menu span').toggle(function () {
//         $(this).siblings(".collapsible-arrow").show();
//         $(this).addClass('down');
//     }, function () {
//             $(this).siblings(".collapsible-arrow").hide();
//         $(this).removeClass('down');
//     });
// });

// burgers-link burgers-link_active
// burgers burgers_active