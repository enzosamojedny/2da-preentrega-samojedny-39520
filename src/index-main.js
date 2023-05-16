import { Cliente } from './register-form.js';

$(document).ready(function () {
    let welcomeDiv = document.createElement('div');
    welcomeDiv.id = 'welcomeIndex';
    welcomeDiv.className = 'welcomeIndex';
    let h1Welcome = document.createElement('h1');

    //Traer datos desde sessionStorage
    const clienteTestJSON = sessionStorage.getItem('clienteTest');
    const clienteTest = JSON.parse(clienteTestJSON);
    const nombreCliente = clienteTest.nombreCliente;
    h1Welcome.textContent = "Bienvenido, " + nombreCliente;

    welcomeDiv.appendChild(h1Welcome);
    let bodyIndex = document.querySelector('#body-index');
    bodyIndex.appendChild(welcomeDiv);
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



