
const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=0Y9J544VII9BYP7K';
const urlMonthly = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=IBM&apikey=0Y9J544VII9BYP7K'
const marketSentiment = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=0Y9J544VII9BYP7'
const symbol = 'IBM'
// https://www.alphavantage.co/support/#api-key

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const timeSeries = data['Weekly Adjusted Time Series'];
        const lastDate = Object.keys(timeSeries)[0];
        const lastPrice = timeSeries[lastDate]['5. adjusted close'];
        alert(`The last adjusted close price for ${symbol} is: $${lastPrice}`);
    });

