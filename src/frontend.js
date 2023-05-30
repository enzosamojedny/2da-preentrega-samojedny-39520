import { userData } from './transfer2.js';
const exportedVariables = userData()

export function moneyToUpdate() {
    sessionStorage.setItem('money', exportedVariables.cuentaDeCliente.verSaldo())
}
export function updatedMoney() {
    let updatedCash = sessionStorage.getItem('updatedAmount');
    if (updatedCash === null || updatedCash === '' || isNaN(parseFloat(updatedCash))) {
        let moneySession = moneyToUpdate();
        return moneySession;
    } else {
        return updatedCash;
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
        //DNI
        const dniUsuario = exportedVariables.dniCliente
        const cuentaVisible = exportedVariables.cuentaDeCliente;
        const saldoFrontend = document.getElementById('saldo-frontend');
        saldoFrontend.className = 'row form-control'
        let pCuenta = document.createElement('p')
        pCuenta.textContent = cuentaVisible.numeroCuenta
        saldoFrontend.appendChild(pCuenta)
        let psaldo = document.createElement('p')
        psaldo.textContent = "$ " + updatedMoney()
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



