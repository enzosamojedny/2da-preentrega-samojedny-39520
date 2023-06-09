$(document).ready(function () {
    $('.loan-btn').click(function () {
        let menu = $(this).closest('.slider-menu');
        menu.toggleClass('show');
        menu.siblings('.slider-menu').removeClass('show');
    });
    $('.loan.slider-button').click(function () {
        $(this).next('.slider-menu').slideToggle();
    });
    $('.slider-menu').hide();
    $('#form').submit(function (event) {
        event.preventDefault();
        let amount = $('#inputAddress').val();
        sessionStorage.setItem('amount', amount);
        $('#form')[0].reset();
    });
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
