import { userData } from './transfer2.js';
const exportedVariables = userData();

export function moneyLoan() {
    let clientLoan = sessionStorage.getItem('loan');
    if (clientLoan === null) {
        return 0;
    } else {
        let valueLoan = isNaN(clientLoan) ? 0 : parseFloat(clientLoan).toFixed(2);
        let sum = exportedVariables.cuentaDeCliente.depositoEnCuenta(parseFloat(valueLoan));
        sessionStorage.removeItem('loan')
        return sum;
    }
}

export function moneyToUpdate() {
    let money = exportedVariables.cuentaDeCliente.verSaldo();
    sessionStorage.setItem('money', money);
    return money;
}

let check = parseFloat(sessionStorage.getItem('money'));

export function updatedMoney() {
    let updatedCash = parseFloat(sessionStorage.getItem('updatedAmount'));
    let loanValue = sessionStorage.getItem('loan');
    let parsedLoanValue = parseFloat(loanValue);
    if (isNaN(updatedCash)) {
        let moneySession = moneyToUpdate();
        return moneySession;
    } else {
        if (!isNaN(parsedLoanValue) && !isNaN(updatedCash)) {
            let newAmount = updatedCash + parsedLoanValue;
            sessionStorage.setItem('updatedAmount', newAmount);
            sessionStorage.removeItem('loan')
            return newAmount;
        } else {
            return updatedCash
        }
    }
}
function tbE() {
    try {
        let welcomeDiv = document.createElement('div');
        welcomeDiv.id = 'welcomeIndex';
        welcomeDiv.className = 'welcomeIndex';
        let h1Welcome = document.createElement('h1');
        h1Welcome.textContent = "Bienvenido, " + exportedVariables.nombreCliente;
        welcomeDiv.appendChild(h1Welcome);
        let bodyIndex = document.querySelector('#body-index');
        bodyIndex.appendChild(welcomeDiv);
        const cuentaVisible = exportedVariables.cuentaDeCliente;
        const saldoFrontend = document.getElementById('saldo-frontend');
        saldoFrontend.className = 'row form-control'
        let pCuenta = document.createElement('p')
        pCuenta.textContent = cuentaVisible.numeroCuenta
        saldoFrontend.appendChild(pCuenta)
        let psaldo = document.createElement('p')
        let updatedMoneyValue = isNaN(updatedMoney()) ? 0 : parseFloat(updatedMoney()).toFixed(2);
        if (updatedMoneyValue === null || updatedMoneyValue === undefined) {
            psaldo.textContent = "$ " + check
        } else {
            psaldo.textContent = "$ " + updatedMoneyValue
        }
        saldoFrontend.appendChild(psaldo)
    } catch (error) {
    }
}
tbE()


//NAVBAR ANIMATION
$(window).scroll(function () {
    let navbar = $('.navbar');
    if (window.scrollY > 0) {
        navbar.addClass('transparent');
    } else {
        navbar.removeClass('transparent');
    }
});



