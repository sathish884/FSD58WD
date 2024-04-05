console.log("----------------------- Class Person ----------------------");
// Write a “person” class to hold all the details.

class Person {

    constructor(
        // default values with constructor
        firstName = "Kishore",
        lastName = "Nandakumar",
        age = "26",
        designation = "Software Testing",
        department = "Testing",
        companyname = "Cognize",

    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.designation = designation;
        this.department = department;
        this.companyName = companyname;
        this.skills = [];
    }
    // class methods
    getPerson1() {
        return console.log(`My name ${this.firstName} and am ${this.age} years old`);
    }

    getPerson2() {
        return this.firstName + " " + this.lastName;
    }

}

// create object for Person
let person1 = new Person();
console.log("Person1", person1);
person1.getPerson1();

// passing parameters
let person2 = new Person('Sathish', 'Madhaiyan', 27, 'Software Developer', 'Development', 'Tata Consul');
console.log("Person2", person2)

// class methods call
console.log(person2.getPerson2());

// write a class to calculate the uber price.
console.log("----------------------- Class Uber Price Calculations ----------------------");

class UberPriceCalculator {

    static BASE_FARE = 2.0;

    static PER_MILE_RATE = 1.5;

    static PER_MINUTE_RATE = 0.5;

    constructor(distance, duration) {

        this.distance = distance; // 5.5

        this.duration = duration; // 15

    }

    calculateFare() {

        const distanceFare = this.distance * UberPriceCalculator.PER_MILE_RATE; // 5.5 * 1.5 => 8.25

        const timeFare = this.duration * UberPriceCalculator.PER_MINUTE_RATE; // 15 * 0.5 => 7.5

        const totalFare = UberPriceCalculator.BASE_FARE + distanceFare + timeFare; // 2 + 8.25 + 7.5

        return totalFare; // 17.75

    }

    toString() {

        return `UberPriceCalculator \n\n[distance=${this.distance.toFixed(2)} miles, duration=${this.duration} minutes]`;

    }

}

const calculator = new UberPriceCalculator(5.5, 15);

console.log(calculator.toString());

const fare = calculator.calculateFare();

console.log(`Total Fare: $${fare.toFixed(2)}`);

console.log("----------------------- Class Movie ----------------------");
// class movie

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log(casinoRoyale);

// Creating an array of Movie instances
let movies = [
    new Movie("Casino Royale", "Eon Productions", "PG-13"),
    new Movie("Some PG Movie", "Studio A", "PG"),
    new Movie("Another PG Movie", "Studio B", "PG"),
    new Movie("Non-PG Movie", "Studio C", "R")
];

// Call the static getPG method on the Movie class
let pgMovies = Movie.getPG(movies);

// Log the movies with a rating of "PG"
console.log("Movies with a rating of 'PG':");
console.log(pgMovies);

console.log("----------------------- Class Circle ----------------------");
// Convert the UML diagram to Typescript class. - use number for double

class Circle {

    static pi = Math.PI;

    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    circle1(getR) {
        console.log(` Radius => ${getR}`);
    }
    circle2(getR, getC) {
        console.log(` Radius => ${getR} \n Color => ${getC}`);
    }

    // get method => allows to access the value from the objects,
    //               instead of accessing properties directly from the object
    //               using keyword ( get )
    get getRadius() {
        return this.radius;
    }
    get getColor() {
        return this.color;
    }

    // set method => allows to modify the value of certain prpoerties
    //               using keyword ( set )
    set setRadius(radiusVal) {
        return console.log(`Changed radius using (set) method => ${radiusVal}`);
    }
    set setColor(colorVal) {
        return console.log(`Changed color using (set) method => ${colorVal}`);
    }

    toStrings() {
        console.log("Beefore type in Radius -> ", typeof this.getRadius);
        if (typeof toString(this.getRadius) === typeof this.getColor) {
            console.log(`The Radius [${this.getRadius}] and Colore [${this.getColor}] types are strings`);
            console.log("After converting type in Radius -> ", typeof toString(this.getRadius));
        }
    }

    getArea() {
        // Area = π × r2
        const area = Circle.pi * Math.pow(this.getRadius, 2);
        return console.log(`Area of the circle is => [${area}]`);
    }

    getCircumferances() {
        // Circle = 2πr
        const cicumference = 2 * Circle.pi * this.radius;
        console.log(`Circumference of the circle => [${cicumference}]`);
    }
}

// create objects for circle
const circle = new Circle(1.0, 'red');

console.log(circle);

// method call
circle.circle1(10)
circle.circle2(5, 'Green');

// get methods call and we don't need to put parantheisis ()
console.log("radius using (get) method => ", circle.getRadius);
console.log("color using (get) method => ", circle.getColor);

// set methods
circle.setRadius = 2;
circle.setColor = 'blue';

// methode call
circle.toStrings();

// area of circle
circle.getArea();

// circumference of circle
circle.getCircumferances();

