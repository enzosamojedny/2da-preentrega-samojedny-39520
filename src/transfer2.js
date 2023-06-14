import { CuentaCorriente } from './classes.js';
import { Cliente } from './classes.js';

const cuentaCliente = document.getElementsByClassName('cuenta-cliente')

export function userData() {
    const clienteTestJSON = sessionStorage.getItem('clienteTest');
    const clienteTest = JSON.parse(clienteTestJSON);
    const nombreCliente = clienteTest.nombreCliente;
    const dniUsuario = clienteTest.dniCliente
    const clienteUsuario = new Cliente(nombreCliente, dniUsuario)
    const cuentaDeCliente = new CuentaCorriente(clienteUsuario, "Starlight Financial", "Savings Account 212-23232/9", 10000)
    cuentaCliente.textContent = cuentaDeCliente.saldo + "  " + "Cliente" + " " + nombreCliente
    return { nombreCliente, dniUsuario, clienteUsuario, cuentaDeCliente };
}

function transfers() {
    try {
        userData()
    }
    catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="../index.html">You have to register to access this website!</a>'
        })
    }
}
transfers()
window.addEventListener('click', transfers);
