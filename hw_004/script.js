function sumNumbers(a, b) {
    if ((typeof a || typeof b) !== 'number') {
        throw new Error('arg must be a number');
    }
    return a + b;
}

function testString(string) {
    return `Test_${string}`
}

function personData(firstName, lastName, age) {
    return `Hello, my name is ${firstName} ${lastName}, i am ${age} years old`
}

function isBigger(int) {
    return int > 100;
}

function largerNumber(a, b) {
    if ((typeof a || typeof b) !== 'number') {
        throw new Error('arg must be a number');
    }
    return a > b;
}

function compareNumbers(a, b) {
    if ((typeof a || typeof b) !== 'number') {
        throw new Error('arg must be a number');
    }
    return a === 50 || b === 50 || a + b === 50;
}

function checkMultiple(int) {
    if (typeof int !== 'number') {
        throw new Error('arg must be a number');
    }
    return int % 3 === 0 || int % 7 === 0;
}


