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

    // a. Get all the countries from Asia continent /region using Filter function
    console.log("a. Get all the countries from Asia continent /region using Filter function");

    // filter
    //       * used to create a new array containg all the elements of the original array that stasfy a 
    //         provided testing function.
    //       * its doesn't modify orginal array but instead of returns a new arry.
    countries.filter((elements) => {
        console.log(`Regions : ${elements.region}, Contients : ${elements.continents.join(" ")}`)
        //  console.log("Contients : ", elements.continents.join(" "));
    });

    // b. Get all the countries with a population of less than 2 lakhs using Filter function
    console.log("------------------------------------------------------------------------");
    console.log("b. Get all the countries with a population of less than 2 lakhs using Filter function");

    countries.filter((elements) => {
        if (elements.population < 200000) {
            console.log(elements)
        }
    });


    // c. Print the following details name, capital, flag, using forEach function
    console.log("------------------------------------------------------------------------");
    console.log("c. Print the following details name, capital, flag, using forEach function");

    // forEach 
    //     * forEach method is used a excuted a provided function once for each elemnt in an array
    //     * so its higher order function that takes a callback function as its argument and 
    //       applies that function each item in the array.
    countries.forEach((element, i) => {
        console.log("Country Name - ", element.name.common);

        // Check if capital is defined and is an array
        if (Array.isArray(element.capital)) {
            console.log("Capital - ", element.capital.join(' ')); // Join the array elements into a string
        } else {
            console.log("Capital - Not Available");
        }
        console.log("Flag - ", element.flag);
    });

    // d. Print the total population of countries using reduce function
    console.log("------------------------------------------------------------------------");
    console.log("d. Print the total population of countries using reduce function");

    // reduce
    //     * used to execute a reducer function on each elemnt of the array, resulting in asingle output value
    //     * its iterate over an array and reduces its elements to a single value by applying a function that we provide
    countries.reduce((accumulator, currentValue) => {
        console.log(`Country Name - ${currentValue.name.common}, Population - ${currentValue.population}`);
    })

    // e. Print the country that uses US dollars as currency
    console.log("------------------------------------------------------------------------");
    console.log("e. Print the country that uses US dollars as currency.");

    countries.forEach(element => {
        if (element?.currencies?.USD?.name === "United States dollar" || element?.currencies?.USD?.symbol === "$") {
            console.log(element);
        }
    });

};
// send HTTP rerquest to the server to fetch the data from the specified url
xharValue.send();