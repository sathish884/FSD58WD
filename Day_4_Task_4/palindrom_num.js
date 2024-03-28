/*----- Return all the palindromes in an array -----*/

// function call
console.log("--------------------------");
console.log("Function call - Palindrom Numbers of array");

var palindromString = ["SATAS"];

function palindromStringOfArray(getPalindrom) {

    // the split("") method splites a string into an array of indual charecters
    // ex.. let name = "sathish" => name.split(" ") => ['s', 'a', 't', 'h', 'i', 's', 'h']
    let spiltedArray = getPalindrom[0].split("")
    // console.log(spiltedArray);
    // reverse() method used to reverse the elements of an array
    // ex.. let name = ["Sathish", "Kishore"] => name.reverse() => ["kishore", "Sathish"]
    let reverseSpliteArray = spiltedArray.reverse();
    // console.log(reverseSpliteArray);
    // join("") method used to joins the elements of array into string 
    // ex.. ['c', 'a', 't'] => join("") => cat
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
