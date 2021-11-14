function calculator(num1, num2, operation) {
    const operations = ['+', '-', '/', '*'];
    if(!operations.includes(operation)){
        throw Error('Wrong operation!');
    }
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        throw Error('Argument must be a number')
    }

    if( num2 === 0 && operation === '/'){
        throw Error('Zero division operation is not possible')
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
export{
    calculator
};