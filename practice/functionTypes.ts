// Example 1: Function Returning a Number

// Example 2: Function returning nothing
function bahHumBug(): void{
    console.log('Go away!');
}

// Example 3: Function returning a number with number parameters
function addMyNumbers(firstNumber:number, secondNumber:number):number{
    return firstNumber + secondNumber;
}

let sum = (firstNumber:number, secondNumber:number):number => {
    return firstNumber + secondNumber;
}

/*The JavaScript looks like  this:
let sum2=(firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}
*/