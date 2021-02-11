﻿"use strict";

$(document).ready(function () {
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: false,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });  

});

