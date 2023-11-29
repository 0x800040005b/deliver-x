`use strict`;
// import Swiper JS
import {Swiper} from 'swiper';
import {Autoplay} from "swiper/modules";
// import Swiper styles
import 'swiper/css';
document.addEventListener('DOMContentLoaded',function (){
    const sliderLeftOptions = {
        spaceBetween: 30,
        speed: 5000,
        slidesPerView: 3,
        direction: 'vertical',
        loop: true,
        autoplay: {
            enabled: true,
            delay: 1,
            disableOnInteraction: false,
        },
        modules: [Autoplay],
    }
    const sliderRightOptions = {
        spaceBetween: 30,
        speed: 5000,
        slidesPerView: 3,
        direction: 'vertical',
        loop: true,
        autoplay: {
            enabled: true,
            delay: 1,
            reverseDirection: true,
            disableOnInteraction: false,

        },
        modules: [Autoplay],
    }
    const sliderLeft = new Swiper('.swiper__left', sliderLeftOptions);
    const sliderRight = new Swiper('.swiper__right', sliderRightOptions);
})