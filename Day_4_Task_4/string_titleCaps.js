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
