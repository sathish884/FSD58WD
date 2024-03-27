/*----- 3. Sum of all numbers in array -----*/

// function call
console.log("--------------------------");
console.log("Function call - Sum of array numbers");

var sum = 0;
function sumOfArrayNumbers(getArrayNumbers) {
    for (let i = 0; i < getArrayNumbers.length; i++) {
        sum += getArrayNumbers[i]
    }
    return console.log(sum);
}

sumOfArrayNumbers(arrayNumbers);

// anonymous function call
console.log("--------------------------");
console.log("Anonymous Function call - Sum of array numbers");

var sum1 = 0;
var sumOfArrayNumbers11 = function (getArrayNumbers) {
    getArrayNumbers.forEach((element) => {
        sum1 = sum1 + element;
    });
    return console.log(sum);
};

sumOfArrayNumbers11(arrayNumbers);

// IIFE function call
console.log("--------------------------");
console.log("IIFE Function call - Sum of array numbers");

var sum2 = 0;
(function (getArrayNumbers) {
    for (let data of getArrayNumbers) {
        sum2 += data;
    }
    console.log(sum2);
})(arrayNumbers);

// Arrow function call
console.log("--------------------------");
console.log("Arrow Function call - Sum of array numbers");

var sum3 = 0;
var sumOfArrayNumbers22 = (getArrayNumbers) => {
    getArrayNumbers.forEach(element => {
        sum3 = sum3 + element;
    });
    return console.log(sum3);
};

sumOfArrayNumbers22(arrayNumbers);