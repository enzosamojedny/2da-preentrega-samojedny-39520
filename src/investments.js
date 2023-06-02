const urlIBM = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=0Y9J544VII9BYP7K';
const urlMSFT = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=0Y9J544VII9BYP7K';
const urlGOOGL = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=GOOGL&apikey=0Y9J544VII9BYP7K';
const urlNVDA = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=NVDA&apikey=0Y9J544VII9BYP7K';
const urlWMT = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=WMT&apikey=0Y9J544VII9BYP7K';

fetch(urlIBM)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch IBM data')
        }
        return response.json()
    })
    .then((data) => {
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        //i need to get openprice, close price and volume
        const lastOpen = timeSeries[lastDate]['1. open'];
        const lastVolume = timeSeries[lastDate]['6. volume'];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        sessionStorage.setItem('ibm-data', lastPrice)
        //IBM
        const IBMID = document.getElementById('IBM-OPEN')
        let IBMp = document.createElement('p')
        IBMp.className = 'IBMp-JS'
        IBMp.textContent = lastPrice
        IBMID.appendChild(IBMp)
    }).catch((error) => {
        console.log(error)
        const IBMID = document.getElementById('IBM-OPEN')
        let IBMp = document.createElement('p')
        IBMp.className = 'IBMp-JS'
        IBMp.textContent = sessionStorage.getItem('ibm-data')
        IBMID.appendChild(IBMp)
    })
fetch(urlMSFT)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch IBM data')
        }
        return response.json()
    })
    .then((data) => {
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastOpen = timeSeries[lastDate]['1. open'];
        const lastVolume = timeSeries[lastDate]['6. volume'];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        sessionStorage.setItem('msft-data', lastPrice)
        //MSFT
        const MSFTID = document.getElementById('MSFT-OPEN')
        let MSFTp = document.createElement('p')
        MSFTp.className = 'MSFTp-JS'
        MSFTp.textContent = lastPrice
        MSFTID.appendChild(MSFTp)
    }).catch((error) => {
        console.log(error)
        const MSFTID = document.getElementById('MSFT-OPEN')
        let MSFTp = document.createElement('p')
        MSFTp.className = 'MSFTp-JS'
        MSFTp.textContent = sessionStorage.getItem('msft-data')
        MSFTID.appendChild(MSFTp)
    })
fetch(urlGOOGL)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch IBM data')
        }
        return response.json()
    })
    .then((data) => {
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastOpen = timeSeries[lastDate]['1. open'];
        const lastVolume = timeSeries[lastDate]['6. volume'];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        sessionStorage.setItem('googl-data', lastPrice)
        //GOOGL
        const GOOGLID = document.getElementById('GOOGL-OPEN')
        let GOOGLp = document.createElement('p')
        GOOGLp.className = 'GOOGLp-JS'
        GOOGLp.textContent = lastPrice
        GOOGLID.appendChild(GOOGLp)
    }).catch((error) => {
        console.log(error)
        const GOOGLID = document.getElementById('GOOGL-OPEN')
        let GOOGLp = document.createElement('p')
        GOOGLp.className = 'GOOGLp-JS'
        GOOGLp.textContent = sessionStorage.getItem('googl-data')
        GOOGLID.appendChild(GOOGLp)
    })
fetch(urlNVDA)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch IBM data')
        }
        return response.json()
    })
    .then((data) => {
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastOpen = timeSeries[lastDate]['1. open'];
        const lastVolume = timeSeries[lastDate]['6. volume'];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        sessionStorage.setItem('nvda-data', lastPrice)
        //NVDA
        const NVDAID = document.getElementById('NVDA-OPEN')
        let NVDAp = document.createElement('p')
        NVDAp.className = 'NVDAp-JS'
        NVDAp.textContent = lastPrice
        NVDAID.appendChild(NVDAp)
    }).catch((error) => {
        console.log(error)
        const NVDAID = document.getElementById('NVDA-OPEN')
        let NVDAp = document.createElement('p')
        NVDAp.className = 'NVDAp-JS'
        NVDAp.textContent = sessionStorage.getItem('nvda-data')
        NVDAID.appendChild(NVDAp)
    })
fetch(urlWMT)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch IBM data')
        }
        return response.json()
    })
    .then((data) => {
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastOpen = timeSeries[lastDate]['1. open'];
        const lastVolume = timeSeries[lastDate]['6. volume'];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        sessionStorage.setItem('wmt-data', lastPrice)
        //WMT
        const WMTCLOSE = document.getElementById('WMT-OPEN')
        let WMTp = document.createElement('p')
        WMTCLOSE.className = 'WMTp-JS'
        WMTCLOSE.textContent = lastPrice
        WMTCLOSE.appendChild(WMTp)
    }).catch((error) => {
        console.log(error)
        const WMTCLOSE = document.getElementById('WMT-OPEN')
        let WMTp = document.createElement('p')
        WMTCLOSE.className = 'WMTp-JS'
        WMTCLOSE.textContent = sessionStorage.getItem('wmt-data')
        WMTCLOSE.appendChild(WMTp)
    })

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
const ibmData = sessionStorage.getItem('ibm-data')
const msftData = sessionStorage.getItem('msft-data')
const nvdaData = sessionStorage.getItem('nvda-data')
const wmtData = sessionStorage.getItem('wmt-data')
const googlData = sessionStorage.getItem('googl-data')

ibm_buy_button.addEventListener('click', function () {
    Swal.fire({
        title: "You are about to buy IBM in $" + ibmData,//the first time it's entered, it returns null
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'ibm-quantity'
        },
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            let ibmQuantity = document.getElementById('ibm-quantity').value
            let ibmValue = parseInt(ibmQuantity) * parseInt(ibmData)
            Swal.fire({
                icon: 'success',
                title: ibmQuantity + ' IBM class "A" shares bought in $' + ibmData + 'for a total of $' + ibmValue,
                text: '',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Insufficient funds in your savings account',
                text: '',
            })
        }
    });
})
msft_buy_button.addEventListener('click', function () {
    Swal.fire({
        title: "You are about to buy MSFT in $" + msftData,//the first time it's entered, it returns null
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'msft-quantity'
        },
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            let msftQuantity = document.getElementById('msft-quantity').value
            let msftValue = parseInt(msftQuantity) * parseInt(msftData)
            Swal.fire({
                icon: 'success',
                title: msftQuantity + ' IBM class "A" share(s) bought in $' + msftData + ' for a total of $' + msftValue,
                text: '',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Insufficient funds in your savings account',
                text: '',
            })
        }
    });
})
googl_buy_button.addEventListener('click', function () {
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
            let googlQuantity = document.getElementById('googl-quantity').value
            let googlValue = parseInt(googlQuantity) * parseInt(googlData)
            Swal.fire({
                icon: 'success',
                title: googlQuantity + ' GOOGL class "A" share(s) bought in $' + googlData + ' for a total of $' + googlValue,
                text: '',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Insufficient funds in your savings account',
                text: '',
            })
        }
    });
})
wmt_buy_button.addEventListener('click', function () {
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
            let wmtQuantity = document.getElementById('wmt-quantity').value
            let wmtValue = parseInt(wmtQuantity) * parseInt(wmtData)
            Swal.fire({
                icon: 'success',
                title: 'You have bought WMT stock in $' + wmtData,
                title: wmtQuantity + ' WMT class "A" share(s) bought in $' + wmtData + ' for a total of $' + wmtValue,
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Insufficient funds in your savings account',
                text: '',
            })
        }
    });
})
nvda_buy_button.addEventListener('click', function () {
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
            let nvdaQuantity = document.getElementById('nvda-quantity').value
            let nvdaValue = parseInt(nvdaQuantity) * parseInt(nvdaData)
            Swal.fire({
                icon: 'success',
                title: nvdaQuantity + ' NVDA class "A" share(s) bought in $' + nvdaData + ' for a total of $' + nvdaValue,
                text: '',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Insufficient funds in your savings account',
                text: '',
            })
        }
    });
})
ibm_sell_button.addEventListener('click', function () {

    Swal.fire({
        title: "You are about to sell IBM stock in $" + ibmData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'ibm-quantity-sell'
        },
        showCancelButton: true
    }).then((result) => {
        let ibmQuantity = document.getElementById('ibm-quantity-sell').value
        let ibmValue = parseInt(ibmQuantity) * parseInt(ibmData)
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: ibmQuantity + ' IBM class "A" share(s) sold in $' + ibmData + ' for a total of $' + ibmValue,
                text: '',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Insufficient funds in your savings account',
                text: '',
            })
        }
    });
})
msft_sell_button.addEventListener('click', function () {
    Swal.fire({
        title: "You are about to sell MSFT stock in $" + msftData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'msft-quantity-sell'
        },
        showCancelButton: true
    }).then((result) => {
        let msftQuantity = document.getElementById('msft-quantity-sell').value
        let msftValue = parseInt(msftQuantity) * parseInt(msftData)
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: msftQuantity + ' MSFT class "A" share(s) sold in $' + msftData + ' for a total of $' + msftValue,
                text: '',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Insufficient funds in your savings account',
                text: '',
            })
        }
    });
})
googl_sell_button.addEventListener('click', function () {
    Swal.fire({
        title: "You are about to sell GOOGL stock in $" + googlData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'googl-quantity-sell'
        },
        showCancelButton: true
    }).then((result) => {
        let googlQuantity = document.getElementById('googl-quantity-sell').value
        let googlValue = parseInt(googlQuantity) * parseInt(googlData)
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: googlQuantity + ' GOOGL class "A" share(s) sold in $' + googlData + ' for a total of $' + googlValue,
                text: '',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Insufficient funds in your savings account',
                text: '',
            })
        }
    });
})
wmt_sell_button.addEventListener('click', function () {
    Swal.fire({
        title: "You are about to sell WMT stock in $" + wmtData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'wmt-quantity-sell'
        },
        showCancelButton: true
    }).then((result) => {
        let wmtQuantity = document.getElementById('wmt-quantity-sell').value
        let wmtValue = parseInt(wmtQuantity) * parseInt(wmtData)
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: wmtQuantity + ' WMT class "A" share(s) sold in $' + wmtData + ' for a total of $' + wmtValue,
                text: '',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Insufficient funds in your savings account',
                text: '',
            })
        }
    });
})
nvda_sell_button.addEventListener('click', function () {
    Swal.fire({
        title: "You are about to sell NVDA stock in $" + nvdaData,
        text: "Insert quantity of stock below",
        input: 'text',
        inputAttributes: {
            id: 'nvda-quantity-sell'
        },
        showCancelButton: true
    }).then((result) => {
        let nvdaQuantity = document.getElementById('nvda-quantity-sell').value
        let nvdaValue = parseInt(nvdaQuantity) * parseInt(nvdaData)
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: nvdaQuantity + ' NVDA class "A" share(s) sold in $' + nvdaData + ' for a total of $' + nvdaValue,
                text: '',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Insufficient funds in your savings account',
                text: '',
            })
        }
    });
})

async function showLoading() {
    Swal.fire({
        title: "Retrieving data from our servers",
        text: "Please wait",
        imageUrl: "../images/loading-buffering.gif",
        showConfirmButton: false,
        allowOutsideClick: false,
        imageWidth: 200,  // Set the desired width of the image
        imageHeight: 170  // Set the desired height of the image
    });
    //using setTimeout to simulate ajax request
    setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: "Data retrieved succesfully! ",
            showConfirmButton: false,
            timer: 3000
        });
    }, 8000);
}
showLoading()