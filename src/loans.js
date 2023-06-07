$(document).ready(function () {
    $('.slider-button').click(function () {
        $(this).next('.slider-menu').slideToggle();
    });
});