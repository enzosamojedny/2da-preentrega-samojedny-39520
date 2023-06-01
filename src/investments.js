const urlIBM = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=0Y9J544VII9BYP7K';
const urlMSFT = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=0Y9J544VII9BYP7K';
const urlGOOGL = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=GOOGL&apikey=0Y9J544VII9BYP7K';
const urlNVDA = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=NVDA&apikey=0Y9J544VII9BYP7K';
const urlWMT = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=WMT&apikey=0Y9J544VII9BYP7K';
console.log(urlIBM);
console.log(urlMSFT);
console.log(urlGOOGL);
console.log(urlNVDA);
console.log(urlWMT);

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
        //IBM
        const IBMID = document.getElementById('IBM-OPEN')
        let IBMp = document.createElement('p')
        IBMp.className = 'IBMp-JS'
        IBMp.textContent = lastPrice
        IBMID.appendChild(IBMp)
    }).catch((error) => {
        console.log(error)
        showLoading()
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
        //MSFT
        const MSFTID = document.getElementById('MSFT-OPEN')
        let MSFTp = document.createElement('p')
        MSFTp.className = 'MSFTp-JS'
        MSFTp.textContent = lastPrice
        MSFTID.appendChild(MSFTp)
    }).catch((error) => {
        console.log(error)
        showLoading()
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
        //GOOGL
        const GOOGLID = document.getElementById('GOOGL-OPEN')
        let GOOGLp = document.createElement('p')
        GOOGLp.className = 'GOOGLp-JS'
        GOOGLp.textContent = lastPrice
        GOOGLID.appendChild(GOOGLp)
    }).catch((error) => {
        console.log(error)
        showLoading()
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
        //NVDA
        const NVDAID = document.getElementById('NVDA-OPEN')
        let NVDAp = document.createElement('p')
        NVDAp.className = 'NVDAp-JS'
        NVDAp.textContent = lastPrice
        NVDAID.appendChild(NVDAp)
    }).catch((error) => {
        console.log(error)
        showLoading()
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
        //WMT
        const WMTCLOSE = document.getElementById('WMT-OPEN')
        let WMTp = document.createElement('p')
        WMTCLOSE.className = 'WMTp-JS'
        WMTCLOSE.textContent = lastPrice
        WMTCLOSE.appendChild(WMTp)
    }).catch((error) => {
        console.log(error)
        showLoading()
    })

function showLoading() {
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
            timer: 8000
        });
    }, 8000);
}
