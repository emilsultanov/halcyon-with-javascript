
//  nav-menu
function openClose() {
    let navMenu = document.getElementsByClassName('nav-menu')[0];
    if (!navMenu.classList.contains('active')) {
        navMenu.classList.add('active');
        navMenu.classList.remove('deactive');
        document.getElementById('header').style.height = '1180px';
        document.getElementById('header').style.transition = 'all .9s ease'
    }
    else {
        navMenu.classList.add('deactive');
        navMenu.classList.remove('active');
        document.getElementById('header').style.height = '800px';
    }
}

// slider
let nextItem = 0;
let prevItem = 0;

let slideItems = document.getElementsByClassName('items').length;
let total = document.querySelector('.items').offsetWidth;

let nextSlide = `translateX(${-total}px)`;
let prevSlide = `translateX(${total}px)`;

document.getElementsByTagName('input')[1].addEventListener('click', function (e) {
    if (nextItem <= slideItems - 2) {
        document.querySelector('.slider').style.transform += nextSlide;
        document.querySelector('.slider').style.transition = 'all 1s ease';
        nextItem++;
    }
})

document.getElementsByTagName('input')[0].addEventListener('click', function (e) {
    if (prevItem <= nextItem - 1) {
        // document.querySelector('.slider').style.transform += prevSlide;
        document.querySelector('.slider').style.transform = 'translateX(0%)';
        document.querySelector('.slider').style.transition = 'all 1s ease';
        nextItem--;
    }
})






// carousel
let nextt = 0;
let prev = 0;

let carouselLength = document.getElementsByClassName('slider-items').length;
let containerWidth = document.querySelector('.container').offsetWidth;
let nextslide = `translateX(${-containerWidth}px)`;

document.getElementsByName('carousel')[1].addEventListener('click', function () {
    if (nextt <= carouselLength - 6) {
        document.querySelector('.cslider').style.transform += nextslide;
        document.querySelector('.cslider').style.transition = 'all 1s ease';
        nextt++;
        console.log('right')
    }
});

document.getElementsByName('carousel')[0].addEventListener('click', function () {
    if (prev <= carouselLength - 5) {
        document.querySelector('.cslider').style.transform = 'translateX(0%)';
        document.querySelector('.cslider').style.transition = 'all 1s ease';
        prev--;
        console.log('left')
    }
})







