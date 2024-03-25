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