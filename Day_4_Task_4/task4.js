// Convert all the strings to title caps in a string array in anonymous function & IIFE

var arrayofString = ["hello sathish"];

// function call using for loop
console.log("--------------------------");
console.log("Function call");
function arrayStringConversion(getArrayofString) {

    // splite the array of strings
    let splitArrayofString = getArrayofString[0].split(" ");

    // loop the splited array of strings
    for (let i = 0; i < splitArrayofString.length; i++) {
        // charAt method returns specified character from a string and toUppercase 
        splitArrayofString[i] = splitArrayofString[i].charAt(0).toUpperCase() + splitArrayofString[i].slice(1);
    }

    // join method joins all elements in to string and push that value into array
    let finalResult = [];
    finalResult.push(splitArrayofString.join(" "));

    // return the output
    return console.log(finalResult);

}

arrayStringConversion(arrayofString)

// anonymous function call using map
console.log("--------------------------");
console.log("Anonymous Function");
var arrayStringConversion11 = function (getArrayofString) {


    let splitArrayofString = getArrayofString[0].split(" ");

    const upperCaseConversion = splitArrayofString.map((element) => {
        const conversionValue = element.charAt(0).toUpperCase() + element.slice(1);
        return conversionValue;
    });

    let finalResult = [];
    finalResult.push(upperCaseConversion.join(" "));

    return console.log(finalResult);

};

arrayStringConversion11(arrayofString);

// IIFE => immediatly invoked function expression
console.log("--------------------------");
console.log("IIFE Function");

(function (getArrayofString) {

    let splitArrayofString = getArrayofString[0].split(" ");
    const upperCaseConversion = splitArrayofString.map((element) => {
        const conversionValue = element.charAt(0).toUpperCase() + element.slice(1);
        return conversionValue;
    });

    let finalResult = [];
    finalResult.push(upperCaseConversion.join(" "));
    console.log(finalResult);

})(arrayofString);

// arrow functions
console.log("--------------------------");
console.log("Arrow Function");

const arrayStringConversion22 = (getArrayofString) => {

    let splitArrayofString = getArrayofString[0].split(" ");
    const upperCaseConversion = splitArrayofString.map((element) => {
        const conversionValue = element.charAt(0).toUpperCase() + element.slice(1);
        return conversionValue;
    });
    let finalResult = [];
    finalResult.push(upperCaseConversion.join(" "));
    console.log(finalResult);
}

arrayStringConversion22(arrayofString);

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

sumOfArrayNumbers22(arrayNumbers)

/*----- Return all the prime numbers in an array -----*/

// // [1, 2, 3, 4, 5]
// function arrayOfPrimeNumbers(getArrayNumbers) {
//     for (let i = 0; i < getArrayNumbers.length; i++){
//         for (let j = 2; j <= i; j++){
//             if (getArrayNumbers[i] % j === 0) {
// console.log()
//             }
//         }

//     }
// }

console.log("--------------------------");

var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numberArray = numArray.filter((number) => {
    // console.log(number)
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
});

console.log(numberArray);