/* Assignment 1: Function and Array
Complete the function below to find the ​max number​ of passing numbers. You may refer to this ​MDN document​ about rest parameters of the function. 
*/

function max(...numbers) {
    let resultArray = [numbers[0]];
    for (let i = 0; i < numbers.length; i++) {
        if (i < numbers.length) {
            let resultLastItem = resultArray[resultArray.length - 1];
            if (numbers[i + 1] >= resultLastItem) {
                resultArray.push(numbers[i + 1])
            }
        }
    }
    console.log(resultArray[resultArray.length - 1]);
}

max(1, 2, 4, 5);    // 5
max(5, 2, 7, 1, 6); // 7

/* Assignment 2: Object
Winter 2019 / Web Class
Remote Learning Assignment - Week 2
 In JavaScript, there are many different sets of syntax for creating objects. In the code below, 
 function parameters are encapsulated into an object, 
 try using at least ​two ways​ to create a proper object as a parameter of the calculate function.
 */

function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}


// First way 
class Parameter {
    constructor(op, n1, n2) {
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}

let plusArgs = new Parameter("+", 3, 5);
let minusArgs = new Parameter("-", 3, 5);
let unsupportedArgs = new Parameter("*", 3, 5);

let plusResult = calculate(plusArgs)
console.log(plusResult);

let minusResult = calculate(minusArgs)
console.log(minusResult)

let unsuppoertedResult = calculate(unsupportedArgs)
console.log(unsuppoertedResult)

// Second way
let secondArgs = {

}
secondArgs.n1 = 5
secondArgs.n2 = 6
secondArgs.op = "+"

let secondPlusResult = calculate(secondArgs)
console.log(secondPlusResult)

/* Assignment 3: Function, Array, and Object
Complete the function below to calculate the average price of all the products. 
*/

function avg(data) {
    let totalPrice = 0;
    const products = data.products;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const price = product.price;
        totalPrice += price;
    }
    if (data.hasOwnProperty('size') && !isNaN(data.size) && data.size !== "") {
        return totalPrice / (data.size)
    } else {
        return totalPrice / products.length;
    }
}

console.log(`The average price is ${
    avg({
    size: 3, 
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
})
}`)