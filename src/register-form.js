import { Cliente } from './classes.js';

let nombreClienteVariable = document.getElementById('nombre-cliente')
let inputEmail = document.getElementById('email')
let inputDNI = document.getElementById('dni')
let passWord = document.getElementById('password')
let phoneNumber = document.getElementById('phone-number')
let grossIncome = document.getElementById('gross-income')

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit-btn').addEventListener('click', function (event) {
        event.preventDefault();
        const clienteTest = new Cliente(
            nombreClienteVariable.value,
            inputDNI.value,
            inputEmail.value,
            phoneNumber.value,
            passWord.value,
            grossIncome.value
        );
        const clienteTestJSON = JSON.stringify(clienteTest);
        sessionStorage.setItem('clienteTest', clienteTestJSON);
        window.location.href = '../frontend.html';


    });
});

//PROGRESS BAR
$(document).ready(function () {
    let current_fs, next_fs, previous_fs;
    let opacity;
    let current = 1;
    let steps = $("fieldset").length;
    setProgressBar(current);
    $(".next").click(function () {
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        next_fs.show();
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(++current);
    });
    $(".previous").click(function () {
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        previous_fs.show();
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        let percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").click(function () {
        return false;
    })

});