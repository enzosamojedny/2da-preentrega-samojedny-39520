$(document).ready(function () {
    $('.loan-btn').click(function () {
        $(this).parent().parent('.slider-menu').animate({ left: '-100%' }, 300);
    });

    $('.loan.slider-button').click(function () {
        $(this).next('.slider-menu').slideToggle();
    });

    $('.slider-menu').hide(); // Hide all menus by default
});