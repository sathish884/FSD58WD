// Print 1 to n values
console.log("--------------------");
console.log("Print numbers 1 to n");

var n1 = 5;

for (let i = 0; i < n1; i++) {
    console.log(i);
}

// add 1 to n values
console.log("--------------------");
console.log("Add numbers 1 to n");

var n2 = 10;

for (let i = 0; i < n2; i++) {

    i = i + 1
    console.log(i);

}

// print odd numbers 1 to n
console.log("--------------------");
console.log("Print odd numbers 1 to n");

let n3 = 10;

for (let i = 0; i < n3; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

// add odd numbers 1 to n
console.log("--------------------");
console.log("Add odd numbers 1 to n");

let n4 = 10;
var sum1 = 0;
for (let i = 0; i < n4; i++) {
    if (i % 2 === 1) {
        sum1 = sum1 + i;     // odd numbers in 10 => 1, 3, 5, 7, 9 => Add => o/p 25
        //  console.log(sum1);
    }
}
console.log(sum1);

// Print even numbers from 1 to n
console.log("--------------------");
console.log("Print evenn numbers 1 to n");

let n5 = 10;
for (let i = 0; i < n5; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// add even numbers from 1 to n
console.log("--------------------");
console.log("Add evenn numbers 1 to n");

let n6 = 10;
var sum2 = 0;
for (let i = 0; i < n6; i++) {
    if (i % 2 === 0) {
        sum2 = sum2 + i;  // even numbers in 10 => 0, 2, 4, 6, 8 => Add o/p 20 
        //console.log(sum2);
    }
}
console.log(sum2);

// print array of numbers
console.log("--------------------");
console.log("Print Array of numbers");

const array1 = [1, 2, 3, 4, 5];
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

// add array of numbers 
console.log("--------------------");
console.log("Add Array of numbers");

const array2 = [1, 2, 3, 4, 5];
let sum3 = 0;
for (let i = 0; i < array2.length; i++) {
    sum3 += array2[i];
}
console.log(sum3);

// print array of odd numbers 
console.log("--------------------");
console.log("Print Array of odd numbers");

const array3 = [1, 2, 3, 4, 5];
for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 2 === 1) {
        console.log(array3[i])
    }
}

// add array of odd numbers
console.log("--------------------");
console.log("Add Array of odd numbers");

const array4 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array4.length; i++) {
    if (array4[i] % 2 === 1) {
        sum += array4[i];
    }
}
console.log(sum);

// print array of even numbers
console.log("--------------------");
console.log("Print Array of even numbers");

const array5 = [1, 2, 3, 4, 5, 6];
array5.forEach((element, index) => {
    if (element % 2 === 0) {
        console.log(element);
    }
});

// add array of even numbers and pass the array value in function arguments
console.log("--------------------");
console.log("Add Array of even numbers");

const array6 = [1, 2, 3, 4, 5, 6];
let sum4 = 0;
function addArrayofEvenNumbers(arrayVal, sumVal) {
    arrayVal.forEach((element) => {
        if (element % 2 === 0) {
            sumVal += element;
        }
    });
    return console.log(sumVal);
}

addArrayofEvenNumbers(array6, sum4);

// reduce method
console.log("--------------------");
console.log("Sum of Array numbers using reduce method");
// create an array
const myNums = [1, 2, 3, 4, 5];

// use reduce() method to find the sum
var sums = myNums.reduce((accumulator, currentValue) => {
    // console.log(accumulator, currentValue);
    return accumulator + currentValue
}, 0);

console.log(sums) // 15


