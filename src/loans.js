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
$(document).ready(function () {
    $('#12, #24, #36, #48').click(function () {
        const form = document.getElementById('form');
        if (form.style.display === 'none') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    });
});



//NOW LOANS NEED TO BE SAVED IN A DIFFERENT KEY EVERY TIME THEY ARE CLICKED,             
//BECAUSE RIGHT NOW LOANS GET OVERWRITTEN WHEN YOU TAKE A NEW ONE                        
//AND THEY NEED TO CONSIDER WHICH BUTTON WAS CLICKED, SUM THEM ALL AND UPDATE THE VALUE  
//RIGHT NOW MONEY IS ONLY DISPLAYD IN FRONTEND.JS
//BUT LOAN MONEY SHOULD BE ADDED TO ALL PAGES
//one way to do this is to sum loan + updatedAmount


export function LoanInputField() {
    let loanInput = document.getElementById('loan-input').value;
    var loanAmount = parseFloat(loanInput);
    let selectOption = document.getElementById('formControlSelect').value;
    const clienteTestString = sessionStorage.getItem('clienteTest');
    const clienteValue = JSON.parse(clienteTestString);
    const incomeCliente = clienteValue.incomeCliente;
    if (isNaN(loanAmount) || loanAmount === '') {
        Swal.fire({
            icon: 'error',
            title: 'Please insert a valid number',
            text: ''
        });
        return;
    } else if (loanAmount < 10000) {
        Swal.fire({
            icon: 'error',
            title: 'You need to request at least $10000',
            text: ''
        });
        return;
    } else if (loanAmount >= parseFloat(incomeCliente)) {
        Swal.fire({
            icon: 'error',
            title: 'You can not request a loan greater than your gross income',
            text: 'Your gross income registered is $' + incomeCliente
        });
        return;
    } else {
        Swal.fire({
            title: 'You are about to ask a loan for $ ' + loanAmount + ' for ' + selectOption.toLowerCase(),
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
                sessionStorage.setItem('loan', parseFloat(loanAmount));
            }
            return;
        });
    }
}
$(document).ready(function () {
    $('#loan-submit-btn').click(function () {
        LoanInputField();
    });
});