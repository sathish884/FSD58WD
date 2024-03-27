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

// function call
console.log("--------------------------");
console.log("Function call - Prime Numbers of array");

var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function primeNumberArray(getNumArray) {
    let primeNum = [];
    let nonPrimeNum = [];

    for (let num of getNumArray) {

        let isPrime = true;

        // 1 and numbers less than 1 are not prime
        if (num === 1) {
            isPrime = false;
        } else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeNum.push(num);
        } else {
            nonPrimeNum.push(num);
        }
    }

    console.log("Prime Numbers => ", primeNum);
    console.log("Non-prime Numbers => ", nonPrimeNum);
}

primeNumberArray(numArray);

// anonymous function call
console.log("--------------------------");
console.log("Anonymous function call - Prime Numbers of array");

const primeNumberArray11 = function (getNumArray) {
    let primeNum = [];
    let nonPrimeNum = [];

    for (let num of getNumArray) {
        let isPrime = true;

        // 1 is not prime
        if (num === 1) {
            isPrime = false;
        } else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeNum.push(num);
        } else {
            nonPrimeNum.push(num);
        }
    }

    console.log("Prime Numbers => ", primeNum);
    console.log("Non-prime Numbers => ", nonPrimeNum);
}

primeNumberArray11(numArray);

// IIFE function call
console.log("--------------------------");
console.log("IIFE function call - Prime Numbers of array");

(function (getNumArray) {
    let primeNum = [];
    let nonPrimeNum = [];

    getNumArray.forEach((element) => {
        // console.log(element)
        let isPrime = true;

        if (element === 1) {
            isPrime = false;
        } else {
            for (let i = 2; i < element; i++) {
                if (element % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primeNum.push(element);
        } else {
            nonPrimeNum.push(element)
        }
    });

    console.log("Prime Numbers => ", primeNum);
    console.log("Non-prime Numbers => ", nonPrimeNum);

})(numArray);

// Arrow function call
console.log("--------------------------");
console.log("Arrow function call - Prime Numbers of array");

var primeNumberArray22 = (getNumArray) => {
    let primeNum = [];
    let nonPrimeNum = [];

    for (let i = 0; i < getNumArray.length; i++) {
        let isPrime = true;

        if (getNumArray[i] === 1) {
            isPrime = false;
        } else {
            for (let j = 2; j < getNumArray[i]; j++) {
                if (getNumArray[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeNum.push(getNumArray[i]);
        } else {
            nonPrimeNum.push(getNumArray[i]);
        }
    }

    console.log("Prime Numbers => ", primeNum);
    console.log("Non-prime Numbers => ", nonPrimeNum);

};

primeNumberArray22(numArray);

/*----- Return all the palindromes in an array -----*/

// function call
console.log("--------------------------");
console.log("Function call - Palindrom Numbers of array");

var palindromString = ["SATAS"];

function palindromStringOfArray(getPalindrom) {
    let spiltedArray = getPalindrom[0].split("")
    // console.log(spiltedArray);
    let reverseSpliteArray = spiltedArray.reverse();
    // console.log(reverseSpliteArray);
    let joinReverseArray = reverseSpliteArray.join("")
    // console.log(joinReverseArray);

    if (getPalindrom[0] === joinReverseArray) {
        console.log(`${getPalindrom[0]} is palindrom`);
    } else {
        console.log(`${getPalindrom[0]} not a palindrom`);
    }
}
palindromStringOfArray(palindromString);

// anonymous function call
console.log("--------------------------");
console.log("Anonymous function call - Palindrom Numbers of array");

var palindromStringOfArray11 = function (getPalindrom) {

    let palindromStr = getPalindrom[0];
    let j = palindromStr.length - 1
    for (let i = 0; i < palindromStr.length / 2; i++) {
        if (palindromStr[i] !== palindromStr[j]) {
            return console.log("its not a palindrom");
        }
        j--;
    }
    return console.log("its a palindrom")
};

palindromStringOfArray11(palindromString);

// IIFE function call
console.log("--------------------------");
console.log("IIFE function call - Palindrom string of array");

var palidromStringsArray = ["satas", "RAJ", "KEK"];

(function (getPalidromString) {
    let palindromArray = [];

    for (let i = 0; i < getPalidromString.length; i++) {
        let reverseSplitedArray = getPalidromString[i].split("").reverse();
        let joinReverseArray = reverseSplitedArray.join("");

        if (getPalidromString[i] === joinReverseArray) {
            palindromArray.push(getPalidromString[i])
        }
    }
    console.log("Its a palindrom Number => ", palindromArray);

})(palidromStringsArray);

// Arrow function call
console.log("--------------------------");
console.log("Arrow function call - Palindrom Numbers of array");

var palidromNumberArray = [121, 334, 7657, 2002]

var palindromStringOfArray22 = (getPalidromNumber) => {
    let palindromArray = []; // store palindrom numbers

    for (let i = 0; i < getPalidromNumber.length; i++) {
        let numToString = getPalidromNumber[i].toString(); // convert number to string
        let reverseSplitedString = numToString.split("").reverse(); // splite the strings of array and reverse the array values
        let joinReverseString = reverseSplitedString.join(""); // group the array values into string

        if (numToString === joinReverseString) {
            palindromArray.push(numToString);
        }
    }
    console.log("Prime Number => ", palindromArray);
};
palindromStringOfArray22(palidromNumberArray);

/*----- Return median of two sorted arrays of the same size. -----*/

// function call
console.log("--------------------------");
console.log("function call - Median of two sorted arrays");

let array1 = [1, 2, 3];
let array2 = [4, 6, 5];

function medianArray(getArray1, getArray2) {
    let mergedArray = [...getArray1, ...getArray2].sort()
    console.log(mergedArray);

    let n = mergedArray.length;
    // checked merged array length
    if (n % 2 === 0) {
        // if its even number 
        return console.log("merged array length is even => ", (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2);
    } else {
        return console.log("merged array length is odd =>", mergedArray[Math.floor(n / 2)]);
    }

};
medianArray(array1, array2)