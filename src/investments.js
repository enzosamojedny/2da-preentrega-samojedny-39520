const request = require('request');

// https://www.alphavantage.co/support/#api-key
const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=0Y9J544VII9BYP7K';

request.get({
    url: url,
    json: true,
    headers: { 'User-Agent': 'request' }
}, (err, res, data) => {
    if (err) {
        console.log('Error:', err);
    } else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode);
    } else {
        // data is successfully parsed as a JSON object:
        console.log(data);
    }
});
alpha.data.weekly(IBM, outputsize, datatype, interval);
