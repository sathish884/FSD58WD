/*----- Return median of two sorted arrays of the same size. -----*/

// function call
console.log("--------------------------");
console.log("function call - Median of two sorted arrays");

// array declarations
var array1 = [1, 2, 3];
let array2 = [4, 6, 5];

function medianArray(getArray1, getArray2) {
    // using spread operator merged two inoput arrays and sort() method assending the order of mergedArray array
    let mergedArray = [...getArray1, ...getArray2].sort();
    // get the mergedArray length and store n variable
    let n = mergedArray.length;
    // checked merged array length odd or even
    if (n % 2 === 0) {
        // if its even then calculated by avaraging of the two middle of sorted array
        return console.log("merged array length is even => ", (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2);
    } else {
        // if its odd then median is the middle value of array
        // Math.floor() method given to round figure the number
        // ex.. 7 / 2 => 3.5 ==> Math.floor( 7 / 2 ) => 3
        return console.log("merged array length is odd =>", mergedArray[Math.floor(n / 2)]);
    }

};
// finction call and passing arguments of array
medianArray(array1, array2);

//anonymous function call
console.log("--------------------------");
console.log("Anonymous function call - Median of two sorted arrays");

let array3 = [22, 44, 45, 8]

var medianNumberArray11 = function (getArray1, getArray3) {
    // sort((a, b) => a-b) custom comparator function 
    // used to determine the order of two elements a and b when sorting an array of elements
    let mergedArray = [...array1, ...array3].sort((a, b) => a - b);
    console.log(mergedArray);
    let len = mergedArray.length;
    let midIndex = len / 2;

    if (len % 2 === 0) {
        return console.log("Merged array is even => ", (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2);
    } else {
        return console.log("Merged array is odd => ", mergedArray[Math.floor(midIndex)]);
    }
};
medianNumberArray11(array1, array3);

//IIFE function call
console.log("--------------------------");
console.log("IIFE function call - Median of two sorted arrays");

(function (getArray1, getArray3) {

    let mergedArray = [...getArray1, ...getArray3].sort((a, b) => a - b);
    console.log(mergedArray);

    let len = mergedArray.length;
    let index = len / 2;
    if (len % 2 === 0) {
        return console.log("Merged array is even => ", (mergedArray[index - 1] + mergedArray[index]) / 2);
    } else {
        return console.log("Merged array is odd => ", mergedArray[Math.floor(index)]);
    }
})(array1, array3);

//Arrow function call
console.log("--------------------------");
console.log("Arrow function call - Median of two sorted arrays");

let arrayNum1 = [8, 17, 5, 22];
let arrayNum2 = [10, 43, 31, 32, 2];

var medianNumberArray22 = (getArrayNum1, getArrayNum2) => {
    let mergedArray = [...getArrayNum1, ...getArrayNum2].sort((a, b) => a - b);
    console.log(mergedArray);
    let len = mergedArray.length;
    let index = len / 2;
    if (len % 2 === 0) {
        return console.log("Merged array is even => ", (mergedArray[index - 1] + mergedArray[index] / 2));
    } else {
        return console.log("Merged array is odd => ", mergedArray[Math.floor(index)]);
    }
}

medianNumberArray22(arrayNum1, arrayNum2);