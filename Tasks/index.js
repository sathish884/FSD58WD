// checking the two objects are equal or not

let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" }

function chechObjects(object1, object2) {
    keys1 = Object.keys(obj1);  // => Object.keys method is return array of keys only => o/p => [0:name, 1:age]
    keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) { // 2 !== 2
        return false;
    }

    keys1.forEach(element => {   // => element = keys => name, age
        if (obj1[element] !== obj2[element]) // => obj1[name] !== obj2[name]
            return console.log("2 objects are not matched");
    });

    return console.log("2 objects are matched");
}

chechObjects(obj1, obj2);

// checking the two arrays are equal or not

let array1 = ["sathish", 25];
let array2 = [25, "sathish"];

function chechArray() {

    if (array1.length !== array2.length) {
        return false;
    }

    const sortedArray1 = array1.slice().sort();
    //  console.log("sortedarray 1 ", sortedArray1)
    const sortedArray2 = array2.slice().sort();
    //console.log("sortedarray 2", sortedArray2)

    for (let i = 0; i < array1.length; i++) {
        if (sortedArray1[i] !== sortedArray2[i]) {
            return console.log("2 arrays are not equal");
        }
    }

    return console.log("2 arrays are equal");

}

chechArray(array1, array2);

// Print the country name, flag, region, suregion and population using Api

// create a new object and that object assign to variable and this object used to make HTTP request to the server
const xharValue = new XMLHttpRequest();
// initilize the request, 
// (GET) => type of request, ("url") => URL to which request is send, (true) => request should be asynchronous 
xharValue.open("GET", "https://restcountries.com/v3.1/all", true);
// sets the event handler function to be excuted when the request completes succcessfully. 
// Inside the function the response data will be processed.
xharValue.onload = function () {
    // parse the response data, which is in JSON format
    var countries = JSON.parse(xharValue.responseText);
    countries.forEach((elements) => {
        console.log("Countries Flag: ", elements.flag);
        console.log("Countries Name: ", elements.name.common);
        console.log("Region : ", elements.region);
        console.log("Sub Region : ", elements.subregion);
        console.log("Populations : ", elements.population);
    })
};
// send HTTP rerquest to the server to fetch the data from the specified url
xharValue.send();
