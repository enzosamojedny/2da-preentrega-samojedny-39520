import { userData } from './transfer2.js';
const exportedVariables = userData()

export function moneyToUpdate() {
    let money = exportedVariables.cuentaDeCliente.verSaldo();
    sessionStorage.setItem('money', money);
    return money;
}
let check = parseFloat(sessionStorage.getItem('money'))

export function updatedMoney() {
    let updatedCash = parseFloat(sessionStorage.getItem('updatedAmount'));
    if (isNaN(updatedCash)) {
        let moneySession = moneyToUpdate();
        return moneySession;
    } else {
        return updatedCash;
    }
}
let clientLoan = sessionStorage.getItem('loan');
console.log(typeof clientLoan)

function moneyLoan() {
    if (clientLoan === null) {
        return 0;
    } else {
        let valueLoan = isNaN(clientLoan) ? 0 : parseFloat(clientLoan).toFixed(2);
        return valueLoan;
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
        let suma = parseFloat(check) + parseFloat(moneyLoan());
        if (updatedMoneyValue === null || updatedMoneyValue === undefined) {
            psaldo.textContent = "$ " + suma
        } else {
            let sum = parseFloat(updatedMoneyValue) + parseFloat(moneyLoan());
            psaldo.textContent = "$ " + sum
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



