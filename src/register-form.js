import { Cliente } from './classes.js';

let nombreClienteVariable = document.getElementById('nombre-cliente')
let inputEmail = document.getElementById('email')
let inputDNI = document.getElementById('dni')
let passWord = document.getElementById('password')
let phoneNumber = document.getElementById('phone-number')
let grossIncome = document.getElementById('gross-income')

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit-btn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        const clienteTest = new Cliente(
            nombreClienteVariable.value,
            inputDNI.value,
            inputEmail.value,
            phoneNumber.value,
            passWord.value,
            grossIncome.value
        );
        // Convert the object to a JSON string
        const clienteTestJSON = JSON.stringify(clienteTest);
        // Save the JSON string in sessionStorage
        sessionStorage.setItem('clienteTest', clienteTestJSON);
    });
});
export { Cliente };

//PROGRESS BAR

$(document).ready(function () {

    let current_fs, next_fs, previous_fs; //fieldsets
    let opacity;
    let current = 1;
    let steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function () {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
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

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
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