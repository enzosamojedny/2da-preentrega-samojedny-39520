

const urlMonthly = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=IBM&apikey=0Y9J544VII9BYP7K'
const marketSentiment = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=0Y9J544VII9BYP7'
const urlIBM = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=0Y9J544VII9BYP7K';
const urlMSFT = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=0Y9J544VII9BYP7K';
const urlGOOGL = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=GOOGL&apikey=0Y9J544VII9BYP7K';
const urlNVDA = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=NVDA&apikey=0Y9J544VII9BYP7K';
const urlWMT = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=WMT&apikey=0Y9J544VII9BYP7K';
const urlBABA = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=BABA&apikey=0Y9J544VII9BYP7K';

fetch(urlIBM)
    .then((response) => response.json())
    .then((data) => {
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        //i need to get openprice, close price and volume
        const lastOpen = timeSeries[lastDate]['1. open'];
        const lastVolume = timeSeries[lastDate]['6. volume'];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        //IBM
        const IBMID = document.getElementById('IBM-ID')
        let IBMp = document.createElement('p')
        IBMp.className = 'IBMp-JS'
        IBMp.textContent = lastOpen
        IBMID.appendChild(IBMp)
    });

fetch(urlMSFT)
    .then((response) => response.json())
    .then((data) => {
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastOpen = timeSeries[lastDate]['1. open'];
        const lastVolume = timeSeries[lastDate]['6. volume'];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        //MSFT
        const MSFTID = document.getElementById('MSFT-ID')
        let MSFTp = document.createElement('p')
        MSFTp.className = 'MSFTp-JS'
        MSFTp.textContent = lastOpen
        MSFTID.appendChild(MSFTp)
    });
fetch(urlGOOGL)
    .then((response) => response.json())
    .then((data) => {
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastOpen = timeSeries[lastDate]['1. open'];
        const lastVolume = timeSeries[lastDate]['6. volume'];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        //GOOGL
        const GOOGLID = document.getElementById('GOOGL-ID')
        let GOOGLp = document.createElement('p')
        GOOGLp.className = 'GOOGLp-JS'
        GOOGLp.textContent = lastOpen
        GOOGLID.appendChild(GOOGLp)
    });
fetch(urlNVDA)
    .then((response) => response.json())
    .then((data) => {
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastOpen = timeSeries[lastDate]['1. open'];
        const lastVolume = timeSeries[lastDate]['6. volume'];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        //NVDA
        const NVDAID = document.getElementById('NVDA-ID')
        let NVDAp = document.createElement('p')
        NVDAp.className = 'NVDAp-JS'
        NVDAp.textContent = lastOpen
        NVDAID.appendChild(NVDAp)
    });
fetch(urlWMT)
    .then((response) => response.json())
    .then((data) => {
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastOpen = timeSeries[lastDate]['1. open'];
        const lastVolume = timeSeries[lastDate]['6. volume'];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        //WMT
        const WMTID = document.getElementById('WMT-ID')
        let WMTp = document.createElement('p')
        WMTp.className = 'WMTp-JS'
        WMTp.textContent = lastOpen
        WMTID.appendChild(WMTp)
    });
fetch(urlBABA)
    .then((response) => response.json())
    .then((data) => {
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastOpen = timeSeries[lastDate]['1. open'];
        const lastVolume = timeSeries[lastDate]['6. volume'];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        //BABA
        const BABAID = document.getElementById('BABA-ID')
        let BABAp = document.createElement('p')
        BABAp.className = 'BABAp-JS'
        BABAp.textContent = lastOpen
        BABAID.appendChild(BABAp)
    });