function calculator(num1, num2, operation) {
    const operations = ['+', '-', '/', '*'];
   
    if(!operations.includes(operation)){
        throw new Error('Wrong operation!');
    }
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        throw new Error('Argument must be a number')
    }

    switch(operation){
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '/':
            if( num2 === 0){
                throw Error('Zero division operation is not possible');
            }
            return num1 / num2;
            break;
        case '*':
            return num1 * num2;
    }
   
   }
export{
    calculator
};