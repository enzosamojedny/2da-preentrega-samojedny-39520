import { CuentaCorriente, Cliente, Plazo_Fijo } from './classes.js';
import { userData } from './transfer2.js';
const exportedVariables = userData()
let saldoCuenta = exportedVariables.cuentaDeCliente.verSaldo()
let cuentaTransferenciaCliente = exportedVariables.cuentaDeCliente
const date = moment().format('LLL');
const cliente1 = new Cliente("Pablo Lescano", "38.112.194");
const cliente2 = new Cliente("Laura Gomez", "23.456.321");
const cuentaDePablo = new CuentaCorriente(cliente1, "Santander", "001", 0);
const cuentaDeLaura = new CuentaCorriente(cliente2, "Brubank", "002", 0);
const divTransferCheck = document.querySelector('.div-laurita')
const h6DisplayData = document.querySelector('.cuenta-cliente')
const mainSelect = document.getElementById('main-select')
const transferButton = document.querySelector('.transfer-button')
const saldoClienteBtn = document.getElementById('saldo-cliente-btn')
h6DisplayData.textContent = "Cuenta Cliente " + exportedVariables.nombreCliente

let transferFunction = saldoClienteBtn.addEventListener('click', function () {
    //el saldo no se actualiza porque siempre retoma los 10000 de saldo 
    let saldoClienteP = document.getElementById('saldo-cliente-p')
    let saldoCliente = exportedVariables.cuentaDeCliente.verSaldo()
    saldoClienteP.textContent = "Saldo: " + saldoCliente;
})
transferFunction



transferButton.addEventListener('click', function () {
    function randomize() {
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const arrOp = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        let password = '';
        for (let i = 0; i < 8; i++) {
            const combinedArr = arr.concat(arrOp);
            const randomIndex = Math.floor(Math.random() * combinedArr.length);
            const randomNum = combinedArr[randomIndex];
            password += randomNum;
        }
        return password;
    } let generatedPassword = randomize();
    if (mainSelect.value === 'Pablo Lescano') {
        transferButton.id = 'transferir-pablo-btn'
        let transferCustomer1 = document.querySelector('#transferir-pablo-btn')
        transferCustomer1.addEventListener("click", transferCustomer);
    } else if (mainSelect.value === 'Laura Gomez') {
        transferButton.id = 'transferir-laura-btn'
        let transferCustomer2 = document.querySelector('#transferir-laura-btn')
        transferCustomer2.addEventListener("click", transfLaura);
    }
    function transferCustomer() {
        let inputCustomer = document.getElementById('input-cliente-final').value;
        let transferirCant = parseFloat(inputCustomer)
        if (transferirCant <= saldoCuenta) {
            Swal.fire({
                title: 'You are about to send $' + inputCustomer + ' to ' + cliente1.nombreCliente,
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Proceed with transfer'
            }).then((result) => {
                if (result.isConfirmed) {
                    cuentaTransferenciaCliente.transferencia(transferirCant, cuentaDePablo);
                    Swal.fire(
                        'Transfer sent to recipient',
                        '',
                        'success'
                    )
                    let div = document.createElement('div')
                    div.id = 'resume';
                    div.className = 'resume-container';
                    let h2 = document.createElement('h2')
                    h2.textContent = "Resumen de Transferencia"
                    div.appendChild(h2)
                    let pnumerotransaccion = document.createElement('p')
                    pnumerotransaccion.textContent = "Destinatario: " + cliente1.nombreCliente
                    div.appendChild(pnumerotransaccion)
                    let p = document.createElement('p')
                    p.className = 'p-js'
                    p.textContent = "Origen: " + exportedVariables.clienteUsuario.nombreCliente
                    div.appendChild(p)
                    let ptimePablo = document.createElement('p')
                    ptimePablo.textContent = "Fecha de transferencia: " + date;
                    div.appendChild(ptimePablo)
                    let pdestiny = document.createElement('p')
                    pdestiny.textContent = "Número de operación: " + generatedPassword
                    div.appendChild(pdestiny)
                    let p3 = document.createElement('p')
                    p3.textContent = "Banco " + cuentaDeLaura.banco
                    div.appendChild(p3)
                    let p4 = document.createElement('p')
                    p4.textContent = "Cuenta " + cuentaDeLaura.numeroCuenta
                    div.appendChild(p4)
                    let p5 = document.createElement('p')
                    p5.textContent = "DNI " + cliente1.dniCliente
                    div.appendChild(p5)
                    let p6 = document.createElement('p')
                    div.appendChild(p6)
                    document.body.appendChild(div)
                    let p7 = document.querySelector('#resume p:last-child')
                    p7.textContent = "Monto: $" + transferirCant;
                    let resumeContainer = document.getElementById('resume');
                    resumeContainer.style.display = 'block';
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Insufficient funds in your savings account',
                text: '',
            })
        }
    }
    function transfLaura() {
        let inputLaura = document.getElementById('input-cliente-final').value;
        let transferirCantidad = parseFloat(inputLaura);
        if (transferirCantidad <= exportedVariables.cuentaDeCliente.verSaldo()) {
            Swal.fire({
                title: 'You will send $' + inputLaura + ' to ' + cliente2.nombreCliente,
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Proceed with transfer'
            }).then((result) => {
                if (result.isConfirmed) {
                    cuentaTransferenciaCliente.transferencia(transferirCantidad, cuentaDeLaura);
                    Swal.fire(
                        'Transfer sent to recipient',
                        '',
                        'success'
                    )
                    // LAURA resumen de transferencia
                    let divLaura = document.createElement('div');
                    divLaura.id = 'resumeLaura';
                    divLaura.className = 'resume-container';
                    let h2Laura = document.createElement('h2');
                    h2Laura.textContent = "Resumen de Transferencia";
                    divLaura.appendChild(h2Laura);
                    let pnumerotransaccionlaura = document.createElement('p');
                    pnumerotransaccionlaura.textContent = "Destinatario: " + cliente2.nombreCliente;
                    divLaura.appendChild(pnumerotransaccionlaura);
                    let pLaura = document.createElement('p');
                    pLaura.className = 'p-js-laura';
                    pLaura.textContent = "Origen: " + exportedVariables.clienteUsuario.nombreCliente;
                    divLaura.appendChild(pLaura);
                    let ptime = document.createElement('p')
                    ptime.textContent = "Fecha de transferencia: " + date;
                    divLaura.appendChild(ptime)
                    let pdestino = document.createElement('p');
                    pdestino.textContent = "Número de operación: " + generatedPassword;
                    divLaura.appendChild(pdestino);
                    let p3Laura = document.createElement('p');
                    divLaura.appendChild(p3Laura);
                    p3Laura.textContent = "Banco " + cuentaDeLaura.banco;
                    let p4Laura = document.createElement('p');
                    divLaura.appendChild(p4Laura);
                    p4Laura.textContent = "Cuenta " + cuentaDeLaura.numeroCuenta;
                    let p5Laura = document.createElement('p');
                    divLaura.appendChild(p5Laura);
                    p5Laura.textContent = "DNI " + cliente2.dniCliente;
                    let p6Laura = document.createElement('p');
                    divLaura.appendChild(p6Laura);
                    document.body.appendChild(divLaura);
                    pLaura = document.querySelector('#resumeLaura p:last-child');
                    pLaura.textContent = "Monto: $" + transferirCantidad;
                    let resumeContainerLaura = document.getElementById('resumeLaura');
                    resumeContainerLaura.style.display = 'block';
                }
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Insufficient funds in your savings account',
                text: '',
            })
        }
    }
    transferCustomer()
    transfLaura()
})



// function eliminarResumenTransferPablo() {
//     setTimeout(function () {
//         let resumePablo = document.getElementById('resume');
//         if (resumePablo) {
//             resumePablo.remove();
//         }
//     }, 15000);
// }
// eliminarResumenTransferPablo()

// function eliminarResumenTransferLaura() {
//     setTimeout(function () {
//         let resumeLaura = document.getElementById('resumeLaura');

//         if (resumeLaura) {
//             resumeLaura.remove();
//         }
//     }, 15000);
// }
// eliminarResumenTransferLaura()

// const pfPabloBtn = document.getElementById("pf-pablo");
// const pfLauraBtn = document.getElementById("pf-laura");
// pfPabloBtn.addEventListener("click", PF_P);
// pfLauraBtn.addEventListener("click", PF_L);

// function PF_P() {
//     let transferirCantidad = parseFloat(document.getElementById('input-pablo').value);
//     if (transferirCantidad <= cuentaDePablo.verSaldo()) {
//         cuentaDePablo.transferencia(transferirCantidad, cuentaDePlazoFijo);
//         let montoAObtener = transferirCantidad + (transferirCantidad * plazoFijoClassCall.interes);
//         const divPF = document.createElement("div");
//         divPF.id = "resume-pf";
//         divPF.className = "resume-pf";
//         const h2PF = document.createElement("h2");
//         h2PF.textContent = "Resumen de Cotización";
//         divPF.appendChild(h2PF);
//         // 0
//         const pf = document.createElement("p");
//         pf.textContent = "Cuenta " + pfCuentaCliente.nombreCliente;
//         divPF.appendChild(pf);
//         // 1
//         const pf1 = document.createElement("p");
//         divPF.appendChild(pf1);
//         pf1.textContent = cuentaDePlazoFijo.banco;
//         // 2
//         const pf2 = document.createElement("p");
//         divPF.appendChild(pf2);
//         pf2.textContent = "Cuenta número " + cuentaDePlazoFijo.numeroCuenta;
//         // 3
//         const pf3 = document.createElement("p");
//         divPF.appendChild(pf3);
//         pf3.textContent = "Interés: " + plazoFijoClassCall.interes;
//         // 4
//         const pf3_5 = document.createElement("p");
//         pf3_5.textContent = "Monto a obtener: $" + montoAObtener;
//         cuentaDePablo.depositoEnCuenta(montoAObtener);
//         divPF.appendChild(pf3_5);
//         document.body.appendChild(divPF);
//         divPF.style.display = 'block';
//     } else {
//         alert("Fondos insuficientes.");
//     }
//     document.getElementById('input-pablo').value = '';
//     document.getElementById('input-laura').value = '';
//     window.setTimeout(function () {
//         let resumePablo = document.getElementById('resume-pf');
//         if (resumePablo) {
//             resumePablo.remove();
//         }
//     }, 15000);
// }
// function PF_L() {
//     let transferirCantidad = parseFloat(document.getElementById('input-laura').value);
//     if (transferirCantidad <= cuentaDeLaura.verSaldo()) {
//         cuentaDeLaura.transferencia(transferirCantidad, cuentaDePlazoFijo);
//         let montoAObtener = transferirCantidad + (transferirCantidad * plazoFijoClassCall.interes);
//         const divPF = document.createElement("div");
//         divPF.id = "resume-pf-l";
//         divPF.className = "resume-pf-l";
//         const h2PF = document.createElement("h2");
//         h2PF.textContent = "Resumen de Cotización";
//         divPF.appendChild(h2PF);
//         // 0
//         const pf = document.createElement("p");
//         pf.textContent = "Cuenta " + pfCuentaCliente.nombreCliente;
//         divPF.appendChild(pf);
//         // 1
//         const pf1 = document.createElement("p");
//         divPF.appendChild(pf1);
//         pf1.textContent = cuentaDePlazoFijo.banco;
//         // 2
//         const pf2 = document.createElement("p");
//         divPF.appendChild(pf2);
//         pf2.textContent = "Cuenta número " + cuentaDePlazoFijo.numeroCuenta;
//         // 3
//         const pf3 = document.createElement("p");
//         divPF.appendChild(pf3);
//         pf3.textContent = "Interés: " + plazoFijoClassCall.interes;
//         // 4
//         const pf3_5 = document.createElement("p");
//         pf3_5.textContent = "Monto a obtener: $" + montoAObtener;
//         cuentaDeLaura.depositoEnCuenta(montoAObtener);
//         divPF.appendChild(pf3_5);
//         document.body.appendChild(divPF);
//         divPF.style.display = 'block';
//     } else {
//         alert("Fondos insuficientes.");
//     }
//     window.setTimeout(function () {
//         let resumeLaura = document.getElementById('resume-pf-l');
//         if (resumeLaura) {
//             resumeLaura.remove();
//         }
//     }, 15000);
//     document.getElementById('input-pablo').value = '';
//     document.getElementById('input-laura').value = '';
// }
