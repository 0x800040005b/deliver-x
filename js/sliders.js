`use strict`;
// import Swiper JS
import {Swiper} from 'swiper';
import {Autoplay} from "swiper/modules";
// import Swiper styles
import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {

    const direction = 'vertical',
          slidesPerView = 3,
          modules = [Autoplay],
          speed = 5000;

    const sliderLeftOptions = {
        spaceBetween: 30,
        speed: 6000,
        slidesPerView: slidesPerView,
        direction: direction,
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        modules: modules,
    },
        sliderRightOptions = {
            spaceBetween: 30,
            speed: 5000,
            slidesPerView: slidesPerView,
            direction: direction,

            loop: true,
            breakpoints: {
                576: {
                    autoplay: {
                        delay: 1,
                        disableOnInteraction: false,
                    },

                }
            },
            autoplay: {
                delay: 1,
                reverseDirection: false,
                disableOnInteraction: false,
            },
            modules: modules,
    }
    const sliderLeft = new Swiper('.swiper__left', sliderLeftOptions);
    const sliderRight = new Swiper('.swiper__right', sliderRightOptions);
})