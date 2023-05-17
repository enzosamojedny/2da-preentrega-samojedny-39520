import { CuentaCorriente } from './classes.js';
import { Cliente } from './register-form.js';

$(document).ready(function () {
    let welcomeDiv = document.createElement('div');
    welcomeDiv.id = 'welcomeIndex';
    welcomeDiv.className = 'welcomeIndex';
    let h1Welcome = document.createElement('h1');

    //NOMBRE USUARIO
    const clienteTestJSON = sessionStorage.getItem('clienteTest');
    const clienteTest = JSON.parse(clienteTestJSON);
    const nombreCliente = clienteTest.nombreCliente;
    h1Welcome.textContent = "Bienvenido, " + nombreCliente;
    welcomeDiv.appendChild(h1Welcome);
    let bodyIndex = document.querySelector('#body-index');
    bodyIndex.appendChild(welcomeDiv);
    //DNI
    const dniUsuario = clienteTest.dniCliente
    const clienteUsuario = new Cliente(nombreCliente, dniUsuario)
    const cuentaDeCliente = new CuentaCorriente(clienteUsuario, "Starlight Financial", "Cuenta Única 212-23232/9", 10000)
    const saldoFrontend = document.getElementById('saldo-frontend');
    saldoFrontend.className = 'row form-control'
    let pCuenta = document.createElement('p')
    pCuenta.textContent = cuentaDeCliente.saldo
    saldoFrontend.appendChild(pCuenta)
    let psaldo = document.createElement('p')
    psaldo.textContent = "$ " + cuentaDeCliente.numeroCuenta
    saldoFrontend.appendChild(psaldo)
})

//NAVBAR ANIMATION
$(window).scroll(function () {
    let navbar = $('.navbar');
    if (window.scrollY > 0) {
        navbar.addClass('transparent');
    } else {
        navbar.removeClass('transparent');
    }
});



