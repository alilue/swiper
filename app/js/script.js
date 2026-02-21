const swiper = new Swiper('.swiper-without-image', {

    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.pag1',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.next1',
        prevEl: '.prev2',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});

const swiper2 = new Swiper('.swiper-with-image-pagination', {

    direction: 'horizontal',
    loop: true,

    thumbs: {
        swiper: {
            el: '.thumbs-slider',
            slidesPerView: 4,
            spaceBetween: 10,
        }
    },
    controller: {
        inverse: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.next2',
        prevEl: '.prev2',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});

const swiper3 = new Swiper('.swiper-with-image', {

    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.pag3',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.next3',
        prevEl: '.prev3',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});