// Simulate an asynchronous operation that returns a promise
function fetchData() {
    console.log('came into fetchData');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Fetched data');
        }, 5000);
    });
}

// Simulate another asynchronous operation that returns a promise
function processData(data) {
    console.log('came into processData');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Processed data', data);
        }, 5000);
    });
}

// Using nested promises
fetchData()
    .then((data) => {
        console.log('In .then of fetchData data is:', data);
        return processData(data);
    })
    .then((result) => {
        console.log('In .then of processData result is:', result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
