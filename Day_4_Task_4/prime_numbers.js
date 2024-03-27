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