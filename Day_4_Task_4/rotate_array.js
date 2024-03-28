/*----- Rotate an array by k times -----*/

//function call
console.log("--------------------------");
console.log("Function call - Rotate arrays by K times");

// rotate left
let array1 = [1, 2, 3, 4, 5];
let k = 2;

function rotateArrayLeft(getArray, k1) {
    console.log("shift() method => ", getArray.shift());

    for (let i = 0; i < k1; i++) {
        // shift() method removes first element of array and returns that element
        // exx.. array1 = [1, 2, 3, 4, 5] => 1 is romoved [2,3,4,5] => return 1
        let temp = getArray.shift();
        // push() method add the elements from array at last and returns new length of array
        getArray.push(temp);
    }
    return console.log("Left shift rotate array => ", getArray);
};
rotateArrayLeft(array1, k);

//Anonymous function call
console.log("--------------------------");
console.log("Anonymous function call - Rotate arrays by K times");

// rotate right
let array2 = [1, 2, 3, 4, 5];
let k2 = 2;

let rotateArrayRight = function (getArray, k) {

    console.log("unshift() method => ", getArray.unshift(6), "=>", getArray);

    for (let i = 0; i < k; i++) {
        // pop() method removes last element from the array and returned that removed element
        // ex.. array1 = [1, 2, 3, 4, 5] => 5 is removed [1, 2, 3, 4] => return 5
        let temp = getArray.pop();
        // unshift() method add the elements from array at begining and returns new length of array
        getArray.unshift(temp);
    }
    return console.log("Right shift rotate array => ", getArray);
};
rotateArrayRight(array2, k2);

//IIFE function call
console.log("--------------------------");
console.log("IIFE function call - Rotate arrays by K times");

// rotate left
let arrayString = ["cat", "rat", "lion", "zeebra", "buffolo"];
(function (getArrayString, k) {
    for (let i = 0; i < k; i++) {
        let temp = getArrayString.shift();
        getArrayString.push(temp)
    };
    return console.log("Left shift rotate array => ", getArrayString);
})(arrayString, k);

//Arrow function call
console.log("--------------------------");
console.log("Arrow function call - Rotate arrays by K times");

// rotate left
let arrayString2 = ["cat", "rat", "lion", "zeebra", "buffolo"];
let rotateArrayRight22 = (getArrayString, k) => {

    for (let i = 0; i < k; i++) {
        let temp = getArrayString.pop();
        getArrayString.unshift(temp);
    }
    return console.log("Right side rotate array => ", getArrayString);
};
rotateArrayRight22(arrayString2, k);