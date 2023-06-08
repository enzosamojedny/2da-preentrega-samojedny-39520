$(document).ready(function () {
    $('.loan-btn').click(function () {
        $(this).parent().parent('.slider-menu').animate({ left: '-100%' }, 300);
    });

    $('.loan.slider-button').click(function () {
        $(this).next('.slider-menu').slideToggle();
    });

    $('.slider-menu').hide(); // Hide all menus by default
});
let btn12 = document.getElementById('12')
let btn24 = document.getElementById('24')
let btn36 = document.getElementById('36')
let btn48 = document.getElementById('48')



btn12.addEventListener('click', () => {
    const form = document.getElementById('form')

    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});
btn24.addEventListener('click', () => {
    const form = document.getElementById('form')

    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});
btn36.addEventListener('click', () => {
    const form = document.getElementById('form')

    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});
btn48.addEventListener('click', () => {
    const form = document.getElementById('form')

    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});






function firstChoice() {
    btn12.addEventListener('click')
}

function secondChoice() {

}
function thirdChoice() {

}
function fourthChoice() {

}