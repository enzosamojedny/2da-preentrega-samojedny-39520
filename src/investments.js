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
const scrollableTable = new scrollableTable('scrollableTable', 'wrapper')
scrollableTable.setTableHeader(["Name", "Id", "Value"])
scrollableTable.setTableHeight(() => { return $(window).height() - 118 })

var testData = [
    {
        "id": 1,
        "name": "name1",
        "value": "value 1",
    },
    {
        "id": 2,
        "name": "name2",
        "value": "value 2",
    },
    {
        "id": 3,
        "name": "name3",
        "value": "value 3",
    },
    // more data here
]
scrollableTable.setTreeTableContent(testData, "testDataEventType", ["name", "id", "value"])