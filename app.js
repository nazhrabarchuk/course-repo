function calculator(num1, num2, operation) {
    const operations = ['+', '-', '/', '*'];
    if(!operations.includes(operation)){
        throw Error('Wrong operation!');
    }
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        throw Error('Argument must be a number')
    }
    switch(operation){
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '/':
            return num1 / num2;
            break;
        case '*':
            return num1 * num2;
    }
    
}
console.log(calculator(5, 10, '-'));

export{
    calculator
};