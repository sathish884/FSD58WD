/*---- Remove duplicates from an array ----*/

//function call
console.log("--------------------------");
console.log("Function call - Remove duplicates arrays");

var array1 = [1, 2, 3, 4, 4, 5, 6, 1];
var array2 = ["sathish", "kishore", "divagar", "sathish"];

function duplicateArrayRemove(getArray1, getArray2) {
    // Set() method is collections of unquie values, to remove duplicates from array
    let removedArray = [...new Set(getArray1)];
    const result1 = console.log("Removed duplicate array => ", removedArray);

    // indexOf() method returns index of array elements
    console.log(`print index for array is ${getArray2[1]} => ${getArray2.indexOf("kishore")}`);
    let removedArray2 = getArray2.filter((element, index) => {
        const result2 = getArray2.indexOf(element) === index;
        return result2;
    });

    return result1, console.log("Removed duplicate array =>", removedArray2);
};
duplicateArrayRemove(array1, array2);

//anonymous function call
console.log("--------------------------");
console.log("Anonymous Function call - Remove duplicates arrays");

var duplicateArrayRemove11 = function (getArray1) {

    console.log("includes method => ", getArray1.includes(8));

    let uniqueNumber = [];
    getArray1.forEach((element) => {
        // includes() method return true if elements in array or if its not then return false
        if (!uniqueNumber.includes(element)) {
            uniqueNumber.push(element);
        }
    });

    console.log(uniqueNumber);
};
duplicateArrayRemove11(array1);

//IIFE function call
console.log("--------------------------");
console.log("IIFE Function call - Remove duplicates arrays");

(function (getArray2) {
    const duplicateArray = [...new Set(getArray2)]
    console.log("Removed duplicate array => ", duplicateArray);
})(array2);

//Arrow function call
console.log("--------------------------");
console.log("Arrow Function call - Remove duplicates arrays");

let array4 = ["sathishshi"];
let array5 = ["sasi", "kiddow"];

var duplicateArrayRemove22 = (getArray1, getArray2) => {

    let emptyArray = [];
    const splitArray = getArray1[0].split("");
    //  console.log(splitArray);
    const duplicateArray = [...new Set(splitArray)];
    //   console.log(duplicateArray);
    const joinArray = duplicateArray.join("");
    emptyArray.push(joinArray);
    console.log("Duplicate Array", getArray1, "Removed duplicate array of string => ", emptyArray);

    // -------------------------------------

    let emptyArray2 = [];
    getArray2.forEach(element => {
        let splitArray = element.split("");
        // console.log(splitArray);
        let duplicateArray = [...new Set(splitArray)];
        // console.log(duplicateArray);
        let joinArray = duplicateArray.join("");
        //  console.log(joinArray);
        emptyArray2.push(joinArray)

    });
    console.log("Duplicate Array", getArray2, "Removed duplicate array of string => ", emptyArray2);
};
duplicateArrayRemove22(array4, array5)