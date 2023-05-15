import { Cliente } from './register-form.js';

$(document).ready(function () {
    if (window.location.pathname === './index.html') {
        let welcomeDiv = document.createElement('div');
        alert('divLoaded')
        welcomeDiv.id = 'welcomeIndex';
        welcomeDiv.className = 'welcomeIndex';
        let h1Welcome = document.createElement('h1');

        // Retrieve the client data from sessionStorage
        const clienteTestJSON = sessionStorage.getItem('clienteTest');
        if (clienteTestJSON) {
            const clienteTest = JSON.parse(clienteTestJSON);
            h1Welcome.textContent = "Bienvenido, " + clienteTest;
        } else {
            h1Welcome.textContent = "Bienvenido";
        }
        welcomeDiv.appendChild(h1Welcome);
        let bodyIndex = document.querySelector('#body-index');
        bodyIndex.appendChild(welcomeDiv);
    }
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



