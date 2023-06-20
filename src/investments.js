
const urlIBM = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=0Y9J544VII9BYP7K';
const urlMSFT = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=0Y9J544VII9BYP7K';
const urlGOOGL = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=GOOGL&apikey=0Y9J544VII9BYP7K';
const urlNVDA = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=NVDA&apikey=0Y9J544VII9BYP7K';
const urlWMT = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=WMT&apikey=0Y9J544VII9BYP7K';
import { moneyToUpdate, updatedMoney } from './frontend.js';


let saldoInversionActualizado = updatedMoney()
let saldoInicial = moneyToUpdate()

async function IBM_FUNCTION() {
    try {
        let response = await fetch(urlIBM);
        let ibmAsync = await response.json();
        const timeSeries = ibmAsync['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        const sessionIBM = sessionStorage.setItem('ibm-data', lastPrice);
        const IBMID = document.getElementById('IBM-OPEN');
        let IBMp = document.createElement('p');
        IBMp.className = 'IBMp-JS';
        IBMp.textContent = lastPrice || sessionIBM;
        IBMID.appendChild(IBMp);
    } catch (error) {
        const IBMID = document.getElementById('IBM-OPEN');
        let IBMp = document.createElement('p');
        IBMp.className = 'IBMp-JS';
        IBMp.textContent = sessionStorage.getItem('ibm-data');
        IBMID.appendChild(IBMp);
    }
}
async function MSFT_FUNCTION() {
    try {
        let response = await fetch(urlMSFT);
        let data = await response.json();
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        const sessionMSFT = sessionStorage.setItem('msft-data', lastPrice);
        const MSFTID = document.getElementById('MSFT-OPEN');
        let MSFTp = document.createElement('p');
        MSFTp.className = 'MSFTp-JS';
        MSFTp.textContent = lastPrice || sessionMSFT;
        MSFTID.appendChild(MSFTp);
    } catch (error) {
        const MSFTID = document.getElementById('MSFT-OPEN');
        let MSFTp = document.createElement('p');
        MSFTp.className = 'MSFTp-JS';
        MSFTp.textContent = sessionStorage.getItem('msft-data');
        MSFTID.appendChild(MSFTp);
    }
}
async function GOOGL_FUNCTION() {
    try {
        let response = await fetch(urlGOOGL);
        let data = await response.json();
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        const sessionGOOGL = sessionStorage.setItem('googl-data', lastPrice);
        const GOOGLID = document.getElementById('GOOGL-OPEN');
        let GOOGLp = document.createElement('p');
        GOOGLp.className = 'GOOGLp-JS';
        GOOGLp.textContent = lastPrice || sessionGOOGL;
        GOOGLID.appendChild(GOOGLp);
    } catch (error) {
        const GOOGLID = document.getElementById('GOOGL-OPEN');
        let GOOGLp = document.createElement('p');
        GOOGLp.className = 'GOOGLp-JS';
        GOOGLp.textContent = sessionStorage.getItem('googl-data');
        GOOGLID.appendChild(GOOGLp);
    }
}
async function WMT_FUNCTION() {
    try {
        let response = await fetch(urlWMT);
        let data = await response.json();
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        const sessionWMT = sessionStorage.setItem('wmt-data', lastPrice);
        const WMTID = document.getElementById('WMT-OPEN');
        let WMTp = document.createElement('p');
        WMTp.className = 'WMTp-JS';
        WMTp.textContent = lastPrice || sessionWMT;
        WMTID.appendChild(WMTp);
    } catch (error) {
        const WMTID = document.getElementById('WMT-OPEN');
        let WMTp = document.createElement('p');
        WMTp.className = 'WMTp-JS';
        WMTp.textContent = sessionStorage.getItem('wmt-data');
        WMTID.appendChild(WMTp);
    }
}
async function NVDA_FUNCTION() {
    try {
        let response = await fetch(urlNVDA);
        let data = await response.json();
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        const sessionNVDA = sessionStorage.setItem('nvda-data', lastPrice);
        const NVDAID = document.getElementById('NVDA-OPEN');
        let NVDAp = document.createElement('p');
        NVDAp.className = 'NVDAp-JS';
        NVDAp.textContent = lastPrice || sessionNVDA;
        NVDAID.appendChild(NVDAp);
    } catch (error) {
        const NVDAID = document.getElementById('NVDA-OPEN');
        let NVDAp = document.createElement('p');
        NVDAp.className = 'NVDAp-JS';
        NVDAp.textContent = sessionStorage.getItem('nvda-data');
        NVDAID.appendChild(NVDAp);
    }
}
IBM_FUNCTION()
MSFT_FUNCTION()
GOOGL_FUNCTION()
NVDA_FUNCTION()
WMT_FUNCTION()

const ibm_buy_button = document.getElementById('buy-ibm')
const msft_buy_button = document.getElementById('buy-msft')
const googl_buy_button = document.getElementById('buy-googl')
const nvda_buy_button = document.getElementById('buy-nvda')
const wmt_buy_button = document.getElementById('buy-wmt')
const ibm_sell_button = document.getElementById('sell-ibm')
const msft_sell_button = document.getElementById('sell-msft')
const googl_sell_button = document.getElementById('sell-googl')
const nvda_sell_button = document.getElementById('sell-nvda')
const wmt_sell_button = document.getElementById('sell-wmt')


function ibmBuy() {
    const ibmData = sessionStorage.getItem('ibm-data');
    Swal.fire({
        title: "You are about to buy IBM in $" + ibmData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'ibm-quantity'
        },
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            let ibmQuantity = document.getElementById('ibm-quantity').value;
            if (isNaN(ibmQuantity) || ibmQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            ibmQuantity = parseInt(ibmQuantity);
            if (ibmQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let ibmValue = ibmQuantity * ibmData;
            if (saldoInversionActualizado >= ibmValue ?? saldoInicial >= ibmValue) {
                Swal.fire({
                    icon: 'success',
                    title: ibmQuantity + ' IBM class "A" shares bought in $' + parseFloat(ibmData).toFixed(2) + ' for a total of $' + parseFloat(ibmValue).toFixed(2),
                    text: 'Your balance is $ ' + (saldoInversionActualizado - ibmValue),
                });
                let isIbmInSessionStorage = sessionStorage.getItem('ibmBought')
                if (isIbmInSessionStorage === null || isIbmInSessionStorage === undefined) {
                    sessionStorage.setItem('ibmBought', ibmQuantity)
                } else {
                    let existingQuantity = parseFloat(isIbmInSessionStorage);
                    let newQuantity = existingQuantity + ibmQuantity;
                    sessionStorage.setItem('ibmBought', newQuantity);
                }
                sessionStorage.setItem('updatedAmount', saldoInversionActualizado - ibmValue);
                saldoInversionActualizado = parseInt(sessionStorage.getItem('updatedAmount'));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Insufficient funds in your savings account',
                    text: '',
                });
            }
        } else {
            return;
        }
    });
}
function ibmBuyButton() {
    ibm_buy_button.removeEventListener('click', ibmBuy);
    ibm_buy_button.addEventListener('click', ibmBuy)
}
ibmBuyButton()

function msftBuy() {
    const msftData = sessionStorage.getItem('msft-data');
    Swal.fire({
        title: "You are about to buy MSFT in $" + msftData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'msft-quantity'
        },
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            let msftQuantity = document.getElementById('msft-quantity').value;
            if (isNaN(msftQuantity) || msftQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            msftQuantity = parseInt(msftQuantity);
            if (msftQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let msftValue = msftQuantity * msftData;
            if (saldoInversionActualizado >= msftValue ?? saldoInicial >= msftValue) {
                Swal.fire({
                    icon: 'success',
                    title: msftQuantity + ' MSFT class "A" shares bought in $' + msftData + ' for a total of $' + msftValue,
                    text: 'Your balance is $ ' + (saldoInversionActualizado - msftValue),
                });
                let isMsftInSessionStorage = sessionStorage.getItem('msftBought')
                if (isMsftInSessionStorage === null || isMsftInSessionStorage === undefined) {
                    sessionStorage.setItem('msftBought', msftQuantity)
                } else {
                    let existingQuantity = parseFloat(isMsftInSessionStorage);
                    let newQuantity = existingQuantity + msftQuantity;
                    sessionStorage.setItem('msftBought', newQuantity);
                }
                sessionStorage.setItem('updatedAmount', saldoInversionActualizado - msftValue);
                saldoInversionActualizado = parseInt(sessionStorage.getItem('updatedAmount'));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Insufficient funds in your savings account',
                    text: '',
                })
            }
        } else {
            return;
        }
    });
}
msft_buy_button.addEventListener('click', msftBuy)

function googlBuy() {
    const googlData = sessionStorage.getItem('googl-data');
    Swal.fire({
        title: "You are about to buy GOOGL in $" + googlData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'googl-quantity'
        },
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            let googlQuantity = document.getElementById('googl-quantity').value;
            if (isNaN(googlQuantity) || googlQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            googlQuantity = parseInt(googlQuantity);
            if (googlQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let googlValue = googlQuantity * googlData;
            if (saldoInversionActualizado >= googlValue ?? saldoInicial >= googlValue) {
                Swal.fire({
                    icon: 'success',
                    title: googlQuantity + ' GOOGL class "A" shares bought in $' + googlData + ' for a total of $' + googlValue,
                    text: 'Your balance is $ ' + (saldoInversionActualizado - googlValue),
                });

                let isGooglInSessionStorage = sessionStorage.getItem('googlBought')
                if (isGooglInSessionStorage === null || isGooglInSessionStorage === undefined) {
                    sessionStorage.setItem('googlBought', googlQuantity)
                } else {
                    let existingQuantity = parseFloat(isGooglInSessionStorage);
                    let newQuantity = existingQuantity + googlQuantity;
                    sessionStorage.setItem('googlBought', newQuantity);
                }
                sessionStorage.setItem('updatedAmount', saldoInversionActualizado - googlValue);
                saldoInversionActualizado = parseInt(sessionStorage.getItem('updatedAmount'));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Insufficient funds in your savings account',
                    text: '',
                })
            }
        } else {
            return;
        }
    });
}
googl_buy_button.addEventListener('click', googlBuy)

function wmtBuy() {
    const wmtData = sessionStorage.getItem('wmt-data');
    Swal.fire({
        title: "You are about to buy WMT in $" + wmtData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'wmt-quantity'
        },
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            let wmtQuantity = document.getElementById('wmt-quantity').value;
            if (isNaN(wmtQuantity) || wmtQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            wmtQuantity = parseInt(wmtQuantity);
            if (wmtQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let wmtValue = wmtQuantity * wmtData;
            if (saldoInversionActualizado >= wmtValue ?? saldoInicial >= wmtValue) {
                Swal.fire({
                    icon: 'success',
                    title: wmtQuantity + ' WMT class "A" shares bought in $' + wmtData + ' for a total of $' + wmtValue,
                    text: 'Your balance is $ ' + (saldoInversionActualizado - wmtValue),
                });
                let isWmtInSessionStorage = sessionStorage.getItem('wmtBought')
                if (isWmtInSessionStorage === null || isWmtInSessionStorage === undefined) {
                    sessionStorage.setItem('wmtBought', wmtQuantity)
                } else {
                    let existingQuantity = parseFloat(isWmtInSessionStorage);
                    let newQuantity = existingQuantity + wmtQuantity;
                    sessionStorage.setItem('wmtBought', newQuantity);
                }
                sessionStorage.setItem('updatedAmount', saldoInversionActualizado - wmtValue);
                saldoInversionActualizado = parseInt(sessionStorage.getItem('updatedAmount'));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Insufficient funds in your savings account',
                    text: '',
                })
            }
        } else {
            return;
        }
    });
}
wmt_buy_button.addEventListener('click', wmtBuy)

function nvdaBuy() {
    const nvdaData = sessionStorage.getItem('nvda-data');
    Swal.fire({
        title: "You are about to buy NVDA in $" + nvdaData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'nvda-quantity'
        },
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            let nvdaQuantity = document.getElementById('nvda-quantity').value;
            if (isNaN(nvdaQuantity) || nvdaQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            nvdaQuantity = parseInt(nvdaQuantity);
            if (nvdaQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let nvdaValue = nvdaQuantity * nvdaData;
            if (saldoInversionActualizado >= nvdaValue ?? saldoInicial >= nvdaValue) {
                Swal.fire({
                    icon: 'success',
                    title: nvdaQuantity + ' NVDA class "A" shares bought in $' + nvdaData + ' for a total of $' + nvdaValue,
                    text: 'Your balance is $ ' + (saldoInversionActualizado - nvdaValue),
                });
                let isNvdaInSessionStorage = sessionStorage.getItem('nvdaBought')
                if (isNvdaInSessionStorage === null || isNvdaInSessionStorage === undefined) {
                    sessionStorage.setItem('nvdaBought', nvdaQuantity)
                } else {
                    let existingQuantity = parseFloat(isNvdaInSessionStorage);
                    let newQuantity = existingQuantity + nvdaQuantity;
                    sessionStorage.setItem('nvdaBought', newQuantity);
                }
                sessionStorage.setItem('updatedAmount', saldoInversionActualizado - nvdaValue);
                saldoInversionActualizado = parseInt(sessionStorage.getItem('updatedAmount'));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Insufficient funds in your savings account',
                    text: '',
                })
            }
        } else {
            return;
        }
    });
}
nvda_buy_button.addEventListener('click', nvdaBuy)

function ibmSell() {
    const ibmData = sessionStorage.getItem('ibm-data');
    Swal.fire({
        title: "You are about to sell IBM in $" + ibmData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'ibm-quantity'
        },
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            let ibmQuantity = document.getElementById('ibm-quantity').value;
            if (isNaN(ibmQuantity) || ibmQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            if (ibmQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let ibmValue = ibmQuantity * ibmData;
            if (saldoInversionActualizado >= ibmValue ?? saldoInicial >= ibmValue) {
                Swal.fire({
                    icon: 'success',
                    title: ibmQuantity + ' IBM class "A" shares sold in $' + parseFloat(ibmData).toFixed(2) + ' for a total of $' + parseFloat(ibmValue).toFixed(2),
                    text: 'Your balance is $ ' + (saldoInversionActualizado + ibmValue),
                });
                sessionStorage.setItem('updatedAmount', saldoInversionActualizado + ibmValue);
                saldoInversionActualizado = parseInt(sessionStorage.getItem('updatedAmount'));
                let isIbmInSessionStorage = sessionStorage.getItem('ibmBought')
                if (isIbmInSessionStorage === null || isIbmInSessionStorage === undefined) {
                    sessionStorage.setItem('ibmBought', ibmQuantity)
                } else {
                    if (isIbmInSessionStorage >= ibmQuantity) {
                        let existingQuantity = parseFloat(isIbmInSessionStorage);
                        let newQuantity = existingQuantity - ibmQuantity;
                        sessionStorage.setItem('ibmBought', newQuantity);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Your available stock is insufficient to meet the quantity of stock intended for sale',
                            text: '',
                        });
                    }
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Insufficient funds in your savings account',
                    text: '',
                });
            }
        } else {
            return;
        }
    });
}
ibm_sell_button.addEventListener('click', ibmSell)

function msftSell() {
    const msftData = sessionStorage.getItem('msft-data');
    Swal.fire({
        title: "You are about to sell MSFT in $" + msftData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'msft-quantity'
        },
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            let msftQuantity = document.getElementById('msft-quantity').value;
            if (isNaN(msftQuantity) || msftQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            msftQuantity = parseInt(msftQuantity);
            if (msftQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to buy at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let msftValue = msftQuantity * msftData;
            if (saldoInversionActualizado >= msftValue ?? saldoInicial >= msftValue) {
                Swal.fire({
                    icon: 'success',
                    title: msftQuantity + ' MSFT class "A" shares sold in $' + parseFloat(msftData).toFixed(2) + ' for a total of $' + parseFloat(msftValue).toFixed(2),
                    text: 'Your balance is $ ' + (saldoInversionActualizado + msftValue),
                });
                sessionStorage.setItem('updatedAmount', saldoInversionActualizado + msftValue);
                saldoInversionActualizado = sessionStorage.getItem('updatedAmount');

                let isMsftInSessionStorage = sessionStorage.getItem('msftBought')
                if (isMsftInSessionStorage === null || isMsftInSessionStorage === undefined) {
                    sessionStorage.setItem('msftBought', msftQuantity)
                } else {
                    if (isMsftInSessionStorage >= msftQuantity) {
                        let existingQuantity = isMsftInSessionStorage;
                        let newQuantity = existingQuantity - msftQuantity;
                        sessionStorage.setItem('msftBought', newQuantity);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Your available stock is insufficient to meet the quantity of stock intended for sale',
                            text: '',
                        });
                    }
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Insufficient funds in your savings account',
                    text: '',
                })
            }
        } else {
            return;
        }
    });
}
msft_sell_button.addEventListener('click', msftSell)

function googlSell() {
    const googlData = sessionStorage.getItem('googl-data');
    Swal.fire({
        title: "You are about to sell GOOGL in $" + googlData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'googl-quantity'
        },
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            let googlQuantity = document.getElementById('googl-quantity').value;
            if (isNaN(googlQuantity) || googlQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            googlQuantity = parseInt(googlQuantity);
            if (googlQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to sell at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let googlValue = googlQuantity * googlData;
            if (saldoInversionActualizado >= googlValue ?? saldoInicial >= googlValue) {
                Swal.fire({
                    icon: 'success',
                    title: googlQuantity + ' GOOGL class "A" shares sold in $' + googlData + ' for a total of $' + googlValue,
                    text: 'Your balance is $ ' + (saldoInversionActualizado + googlValue),
                });
                sessionStorage.setItem('updatedAmount', saldoInversionActualizado + googlValue);
                saldoInversionActualizado = parseInt(sessionStorage.getItem('updatedAmount'));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Insufficient funds in your savings account',
                    text: '',
                })
            }
        } else {
            return;
        }
    });
}
googl_sell_button.addEventListener('click', googlSell)

function wmtSell() {
    const wmtData = sessionStorage.getItem('wmt-data');
    Swal.fire({
        title: "You are about to sell WMT in $" + wmtData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'wmt-quantity'
        },
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            let wmtQuantity = document.getElementById('wmt-quantity').value;
            if (isNaN(wmtQuantity) || wmtQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            wmtQuantity = parseInt(wmtQuantity);
            if (wmtQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to sell at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let wmtValue = wmtQuantity * wmtData;
            if (saldoInversionActualizado >= wmtValue ?? saldoInicial >= wmtValue) {
                Swal.fire({
                    icon: 'success',
                    title: wmtQuantity + ' WMT class "A" shares sold in $' + wmtData + ' for a total of $' + wmtValue,
                    text: 'Your balance is $ ' + (saldoInversionActualizado + wmtValue),
                });
                sessionStorage.setItem('updatedAmount', saldoInversionActualizado + wmtValue);
                saldoInversionActualizado = parseInt(sessionStorage.getItem('updatedAmount'));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Insufficient funds in your savings account',
                    text: '',
                })
            }
        } else {
            return;
        }
    });
}
wmt_sell_button.addEventListener('click', wmtSell)

function nvdaSell() {
    const nvdaData = sessionStorage.getItem('nvda-data');
    Swal.fire({
        title: "You are about to sell NVDA in $" + nvdaData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'nvda-quantity'
        },
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            let nvdaQuantity = document.getElementById('nvda-quantity').value;
            if (isNaN(nvdaQuantity) || nvdaQuantity === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Please insert a valid number',
                    text: '',
                })
                return;
            }
            nvdaQuantity = parseInt(nvdaQuantity);
            if (nvdaQuantity < 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'You need to sell at least 1 unit of stock',
                    text: '',
                })
                return;
            }
            let nvdaValue = nvdaQuantity * nvdaData;
            if (saldoInversionActualizado >= nvdaValue ?? saldoInicial >= nvdaValue) {
                Swal.fire({
                    icon: 'success',
                    title: nvdaQuantity + ' NVDA class "A" shares sold in $' + nvdaData + ' for a total of $' + nvdaValue,
                    text: 'Your balance is $ ' + (saldoInversionActualizado + nvdaValue),
                });
                sessionStorage.setItem('updatedAmount', saldoInversionActualizado + nvdaValue);
                saldoInversionActualizado = parseInt(sessionStorage.getItem('updatedAmount'));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Insufficient funds in your savings account',
                    text: '',
                })
            }
        } else {
            return;
        }
    });
}
nvda_sell_button.addEventListener('click', nvdaSell)

async function showLoading() {
    Swal.fire({
        title: "Retrieving data from our servers",
        text: "Please wait",
        imageUrl: "../images/loading-buffering.gif",
        showConfirmButton: false,
        allowOutsideClick: false,
        imageWidth: 200,
        imageHeight: 170
    });
    setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: "Data retrieved succesfully! ",
            showConfirmButton: false,
            timer: 3000
        });
    }, 3000);
}
showLoading()
