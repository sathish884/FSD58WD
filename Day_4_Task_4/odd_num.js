/*----- 1. Print odd numbers in an array -----*/

// function call
console.log("--------------------------");
console.log("Function call - Array of odd numbers");

var arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function oddNumbers(getArrayNumbers) {

    getArrayNumbers.forEach(element => {
        if (element % 2 === 1) {
            console.log(element);
        }
    });
    return;
};
oddNumbers(arrayNumbers);

// anonymous function call
console.log("--------------------------");
console.log("Anonymous function call - Array of odd numbers");

var oddNumbers11 = function (getArrayNumbers) {
    for (let i = 0; i < getArrayNumbers.length; i++) {
        if (getArrayNumbers[i] % 2 === 1) {
            console.log(getArrayNumbers[i]);
        }
    }
    return;
}
oddNumbers(arrayNumbers);

// IIFE function call
console.log("--------------------------");
console.log("IIFE function call - Array of odd numbers");

(function (getArrayNumbers) {
    getArrayNumbers.map((element) => {
        if (element % 2 === 1) {
            console.log(element);
        }
    })
})(arrayNumbers);

// arrow function call
console.log("--------------------------");
console.log("Arrow function call - Array of odd numbers");

var oddNumbers22 = (getArrayNumbers) => {
    for (let data of getArrayNumbers) {
        if (data % 2 === 1) {
            console.log(data)
        }
    }
    return;
};

oddNumbers22(arrayNumbers);
