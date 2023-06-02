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
const ibm_Data = sessionStorage.getItem('ibm-data')
const msft_Data = sessionStorage.getItem('msft-data')
const nvda_Data = sessionStorage.getItem('nvda-data')
const wmt_Data = sessionStorage.getItem('wmt-data')
const googl_Data = sessionStorage.getItem('googl-data')

ibm_buy_button.addEventListener('click', function () {
    Swal.fire({
        title: "You are about to buy IBM in $" + ibm_Data,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have bought x IBM stock in $' + ibm_Data,
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
        title: "You are about to buy MSFT in $" + msft_Data,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have bought x MSFT stock in $' + msft_Data,
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
        title: "You are about to buy GOOGL in $" + googl_Data,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have bought x GOOGL stock in $' + googl_Data,
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
        title: "You are about to buy WMT in $" + wmt_Data,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have bought x WMT stock in $' + wmt_Data,
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
        title: "You are about to buy NVDA in $" + nvda_Data,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have bought x NVDA stock in $' + nvda_Data,
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
        title: "You are about to sell IBM in $" + ibm_Data,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have sold x IBM stock in $' + ibm_Data,
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
        title: "You are about to sell MSFT in $" + msft_Data,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have sold x MSFT stock in $' + msft_Data,
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
        title: "You are about to sell GOOGL in $" + googl_Data,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have sold x GOOGL stock in $' + googl_Data,
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
        title: "You are about to sell WMT in $" + wmt_Data,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have sold x WMT stock in $' + wmt_Data,
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
        title: "You are about to sell NVDA in $" + nvda_Data,
        text: "Insert quantity of stock below",
        input: 'text',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                icon: 'success',
                title: 'You have sold x NVDA stock in $' + nvda_Data,
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