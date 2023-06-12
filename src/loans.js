$(document).ready(function () {
    $('.loan-btn').click(function () {
        let menu = $(this).closest('.slider-menu');
        menu.toggleClass('show');
        menu.siblings('.slider-menu').removeClass('show');
        let form = menu.find('.loan-form');
        let buttonId = $(this).attr('id');
        if (buttonId === '12') {
            handleButton12(form);
        } else if (buttonId === '24') {
            handleButton24(form);
        } else if (buttonId === '36') {
            handleButton36(form);
        } else if (buttonId === '48') {
            handleButton48(form);
        } else {
            form.hide();
        }
    });
    $('.loan.slider-button').click(function () {
        $(this).next('.slider-menu').slideToggle();
    });
    $('.slider-menu').hide();
    $('#form').hide();
    $('#form').submit(function (event) {
        event.preventDefault();
        let amount = $('#inputAddress').val();
        sessionStorage.setItem('amount', amount);
        $('#form')[0].reset();
    });
});
function handleButton12(form) {
    form.show();
}

function handleButton24(form) {
    form.show();
}

function handleButton36(form) {
    form.show();
}

function handleButton48(form) {
    form.show();
}
let btn12 = document.getElementById('12')
let btn24 = document.getElementById('24')
let btn36 = document.getElementById('36')
let btn48 = document.getElementById('48')
let loanSubmitBtn = document.getElementById('loan-submit-btn')

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
function LoanInputField() {
    let loanInput = document.getElementById('loan-input').value;
    let selectOption = document.getElementById('formControlSelect').value;
    if (isNaN(loanInput) || loanInput === '') {
        Swal.fire({
            icon: 'error',
            title: 'Please insert a valid number',
            text: ''
        });
        return;
    } else if (loanInput < 10000) {
        Swal.fire({
            icon: 'error',
            title: 'You need to request at least $10000',
            text: ''
        });
        return;
    } else {
        Swal.fire({
            title: 'You are about to ask a loan for $ ' + loanInput + ' for ' + selectOption.toLowerCase(),
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Proceed with transfer'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Loan added to your savings account',
                    '',
                    'success'
                );
                sessionStorage.setItem('loan', loanInput);
            }
            return;
        });
    }
}

let form = document.getElementById('form');

loanSubmitBtn.addEventListener('click', function () {
    LoanInputField()
})
