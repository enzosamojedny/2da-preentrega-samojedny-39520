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
        let pCuenta = document.createElement('h6')
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

    try {
        let ibmIsInSessionStorage = parseFloat(sessionStorage.getItem('ibmBought')).toFixed(2);
        let msftIsInSessionStorage = parseFloat(sessionStorage.getItem('msftBought')).toFixed(2);
        let nvdaIsInSessionStorage = parseFloat(sessionStorage.getItem('nvdaBought')).toFixed(2);
        let wmtIsInSessionStorage = parseFloat(sessionStorage.getItem('wmtBought')).toFixed(2);
        let googlIsInSessionStorage = parseFloat(sessionStorage.getItem('googlBought')).toFixed(2);
        let msftData = parseFloat(sessionStorage.getItem('msft-data')).toFixed(2);
        let nvdaData = parseFloat(sessionStorage.getItem('nvda-data')).toFixed(2);
        let wmtData = parseFloat(sessionStorage.getItem('wmt-data')).toFixed(2);
        let ibmData = parseFloat(sessionStorage.getItem('ibm-data')).toFixed(2);
        let googlData = parseFloat(sessionStorage.getItem('googl-data')).toFixed(2);
        //Stocks
        let stockDiv = document.getElementById('stock-frontend');
        let titleStock = document.createElement('h6');
        titleStock.textContent = "Financial holdings assessment";
        stockDiv.appendChild(titleStock);

        let ibmTotal = isNaN(ibmIsInSessionStorage) ? 0 : (parseFloat(ibmIsInSessionStorage) * parseFloat(ibmData)).toFixed(2);
        let ibmStock = document.createElement('p');
        ibmStock.textContent = "IBM $" + ibmTotal;
        stockDiv.appendChild(ibmStock);

        let msftTotal = isNaN(msftIsInSessionStorage) ? 0 : (parseFloat(msftIsInSessionStorage) * parseFloat(msftData)).toFixed(2);
        let msftStock = document.createElement('p');
        msftStock.textContent = "MSFT $" + msftTotal;
        stockDiv.appendChild(msftStock);

        let googlTotal = isNaN(googlIsInSessionStorage) ? 0 : (parseFloat(googlIsInSessionStorage) * parseFloat(googlData)).toFixed(2);
        let googlStock = document.createElement('p');
        googlStock.textContent = "GOOGL $" + googlTotal;
        stockDiv.appendChild(googlStock);

        let nvdaTotal = isNaN(nvdaIsInSessionStorage) ? 0 : (parseFloat(nvdaIsInSessionStorage) * parseFloat(nvdaData)).toFixed(2);
        let nvdaStock = document.createElement('p');
        nvdaStock.textContent = "NVDA $" + nvdaTotal;
        stockDiv.appendChild(nvdaStock);

        let wmtTotal = isNaN(wmtIsInSessionStorage) ? 0 : (parseFloat(wmtIsInSessionStorage) * parseFloat(wmtData)).toFixed(2);
        let wmtStock = document.createElement('p');
        wmtStock.textContent = "WMT $" + wmtTotal;
        stockDiv.appendChild(wmtStock);

        let totalValue = parseFloat(ibmTotal) + parseFloat(msftTotal) + parseFloat(googlTotal) + parseFloat(nvdaTotal) + parseFloat(wmtTotal);
        let finalStock = document.createElement('h6');
        finalStock.textContent = "Total: $" + totalValue.toFixed(2);
        stockDiv.appendChild(finalStock);

        if (parseFloat(ibmTotal) === 0) {
            stockDiv.removeChild(ibmStock);
        }
        if (parseFloat(msftTotal) === 0) {
            stockDiv.removeChild(msftStock);
        }
        if (parseFloat(googlTotal) === 0) {
            stockDiv.removeChild(googlStock);
        }
        if (parseFloat(nvdaTotal) === 0) {
            stockDiv.removeChild(nvdaStock);
        }
        if (parseFloat(wmtTotal) === 0) {
            stockDiv.removeChild(wmtStock);
        }
    } catch (error) { }

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



