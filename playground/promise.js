var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('both arguments must be numbers');
            }
        }, 1500);
    });
};

// asyncAdd(5, 4).then((resolve) => {
//     console.log('the result is: ', resolve);
// }, (reject) => {
//     console.log('Error ', reject);
// });

asyncAdd(5, 7).then((res) => {
    console.log('result: ', res);
    return asyncAdd(res, '33');
}).then((res) => {
    console.log('Should be 45', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hey, It worked');
//         // reject('Unable to fulfill promise')
//     }, 2500);
//  });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// }); 