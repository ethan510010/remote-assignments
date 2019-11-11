/* Assignment 1: Function and Array
Complete the function below to find the ​max number​ of passing numbers. You may refer to this ​MDN document​ about rest parameters of the function. */

function max(...numbers) {
    let resultArray = [numbers[0]];
    for (let i = 0; i < numbers.length; i++) {
        if (i < numbers.length) {
            let resultLastItem = resultArray[resultArray.length-1];
            if (numbers[i+1] >= resultLastItem) {
                resultArray.push(numbers[i+1])
            }
        }
    }
    console.log(resultArray[resultArray.length-1]);
}

max(1, 2, 4, 5);
max(5, 2, 7, 1, 6);