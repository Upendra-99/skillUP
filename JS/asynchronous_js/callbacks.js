// Simulate an asynchronous operation
function fetchData(callback) {
    console.log('came into fetchData');
    setTimeout(() => {
        callback('Fetched data');
    }, 5000);
}

// Simulate another asynchronous operation
function processData(data, callback) {
    console.log('came into processData');
    setTimeout(() => {
        console.log('Data => ', data);
        callback(`Processed data is : ${data}`);
    }, 1000);
}

// Using nested callbacks
fetchData((data) => {
    console.log('Data 2 => ', data);
    processData(data, (result) => {
        console.log(result);  // 'Processed data'
    });
});
