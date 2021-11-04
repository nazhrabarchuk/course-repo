//there are 2 solutions for  promise function: 

// promise solution #1
function promiseA(data) {
    return new Promise((resolve, reject) => {
        if (typeof data != "number") {
            reject('error');
            return;
        }
        if (data % 2 != 0) {
            setTimeout(() => {
                console.log('odd');
                resolve(data);
            }, 1000);
        }
        if (data % 2 === 0) {
            setTimeout(() => {
                console.log('even');
                reject(data);
            }, 2000);
        }
    }).then(promisefuncResult).catch((e) => {
        if (e != 'error') {
            promisefuncResult(data);
        } else {
            console.log(e);
        }
    })
}

// promise solution #2
function promiseB(data) {
    return new Promise((resolve, reject) => {
        if (typeof data != "number") {
            reject('error');
        }
        resolve(data);
    }).then((data) => {
        return new Promise((resolve, reject) => {
            if (data % 2 != 0) {
                setTimeout(() => {
                    resolve(data);
                }, 1000);
            }
            if (data % 2 === 0) {
                setTimeout(() => {
                    reject(data);
                }, 2000);
            }
        }).then((data) => {
            console.log('odd');
            return data;
        }).catch((data) => {
            console.log('even');
            return data;
        }).then(promisefuncResult);
    }).catch((e) => {
        console.log(e);
    })
}
const promisefuncResult = result => console.log(`Your number is ${result}`);
promiseA(1);
promiseB(4);

// =============== //

// ========= async solution ========= //
async function asyncData(data) {
    try {
        const result = await new Promise((resolve, reject) => {

            if (typeof data != "number") {
                reject('error');
                return;
            }

            if (data % 2 != 0) {
                setTimeout(() => {
                    console.log('odd');
                    resolve(data);
                }, 1000);
            }
            if (data % 2 === 0) {
                setTimeout(() => {
                    console.log('even');
                    reject(data);
                }, 2000);
            }
        });
        return asyncfuncResult(result);
    } catch (e) {
        if (e != 'error') {
            asyncfuncResult(data);
        } else {
            console.log(e);
        }
    }
}
asyncData(5);
const asyncfuncResult = result => console.log(`Your number is ${result}`);
