// #1
function checkString(string, symbol) {
    return string.includes(symbol);
}

// #2
function blankString(string) {
    return /\s+/.test(string);
}

// #3
function abbrev(string) {
    return string.split(' ').map(val => val[0] ? val[0].toUpperCase() + '.' : '').join('');
}

// #4
function isLarger(a, b) {
    return a > b ? a : b;
}

// #5
function sortNumbers(a, b, c) {
    switch (true) {
        case a <= b && b <= c:
            console.log(a, b, c);
            break;
        case c <= b && b <= a:
            console.log(c, b, a)
            break;
        case a <= b && b >= c && c >= a:
            console.log(a, c, b);
            break;
        case a <= b && b >= c && c <= a:
            console.log(c, a, b)
            break;
        case  a >= b && b <= c && c >= a:
            console.log(b, a, c);
            break;
        default:
            console.log(b, c, a);
    }
}