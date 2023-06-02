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
            let ibmValue = parseInt(ibmQuantity) * ibmData
            Swal.fire({
                icon: 'success',
                title: 'You have bought ' + ibmQuantity + 'IBM stock in $' + ibmData + 'for a total of $' + ibmValue,
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
        title: "You are about to buy MSFT in $" + msftData,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have bought MSFT stock in $' + msftData,
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
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have bought GOOGL stock in $' + googlData,
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
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have bought WMT stock in $' + wmtData,
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
nvda_buy_button.addEventListener('click', function () {
    Swal.fire({
        title: "You are about to buy NVDA in $" + nvdaData,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have bought NVDA stock in $' + nvdaData,
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
        title: "You are about to sell IBM in $" + ibmData,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have sold IBM stock in $' + ibmData,
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
        title: "You are about to sell MSFT in $" + msftData,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have sold MSFT stock in $' + msftData,
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
        title: "You are about to sell GOOGL in $" + googlData,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have sold GOOGL stock in $' + googlData,
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
        title: "You are about to sell WMT in $" + wmtData,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have sold WMT stock in $' + wmtData,
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
        title: "You are about to sell NVDA in $" + nvdaData,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have sold NVDA stock in $' + nvdaData,
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