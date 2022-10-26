/*

arr = ["one", "two", "three", "four", "five"];

for (let i = 0; i < arr.length; i++) {
    console.log(i);
};

for (let i = 1; i <= 12; i++) {
    console.log("i = " + i + ": " + i * i);
};

grades = [
    ["Seamus", "Aran", 74],
    ["Craig", "Baevid", 12],
    ["David", "Deckem", 52],
    ["Daniel", "Dier", 41],
    ["Erica", "Dier", 57],
    ["Ash", "Ketchup", 46],
    ["Christian", "Ronaldo", 68],
    ["Ash", "Will", 70]
];


let user = prompt("Enter your name: ");
user = user.split(" ");

for (let i = 0; i < grades.length; i++) {
    if ( (user[0] == grades[i][0]) && (user[1] == grades[i][1]) ) {
        console.log("Your grade is: " + grades[i][2]);
        break;
    };
};

*/


function calcCircFromRad(rad) {
    return Math.PI * (rad * 2);
};

function calcAreaFromRad(rad) {
    return Math.PI * (rad * rad);
};

function calcRadFromCirc(circ) {
    return (circ / Math.PI) / 2;
};

function calcRadFromArea(area) {
    return Math.sqrt(area / Math.PI);
};


let radius = 5;
let circumference = 31.42;
let area = 78.54;

console.log(calcCircFromRad(radius));
console.log(calcAreaFromRad(radius));
console.log(calcRadFromCirc(circumference));
console.log(calcRadFromArea(area));
