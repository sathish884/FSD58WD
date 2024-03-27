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
medianArray(array1, array2);