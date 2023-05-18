
const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=0Y9J544VII9BYP7K';
const symbolIBM = 'IBM'
const symbolMSFT = 'MSFT'
const symbolGOOGL = 'GOOGL'
const symbolNVDA = 'NVDA'
const symbolWMT = 'WMT'
const symbolBABA = 'BABA'
// https://www.alphavantage.co/support/#api-key

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        //1
        const IBM = document.getElementById('1')
        let stockIBM = document.createElement('h6')
        stockIBM.textContent = symbolIBM;
        IBM.appendChild(stockIBM)
        //2
        const MSFT = document.getElementById('2')
        let stockMSFT = document.createElement('h6')
        stockMSFT.textContent = symbolMSFT;
        MSFT.appendChild(stockMSFT)
        //3
        const GOOGL = document.getElementById('3')
        let stockGOOGL = document.createElement('h6')
        stockGOOGL.textContent = symbolGOOGL;
        GOOGL.appendChild(stockGOOGL)
        //4
        const NVDA = document.getElementById('4')
        let stockNVDA = document.createElement('h6')
        stockNVDA.textContent = symbolNVDA;
        NVDA.appendChild(stockNVDA)
        //5
        const WMT = document.getElementById('5')
        let stockWMT = document.createElement('h6')
        stockWMT.textContent = symbolWMT;
        WMT.appendChild(stockWMT)
        //6
        const BABA = document.getElementById('6')
        let stockBABA = document.createElement('h6')
        stockBABA.textContent = symbolBABA;
        BABA.appendChild(stockBABA)
    });

