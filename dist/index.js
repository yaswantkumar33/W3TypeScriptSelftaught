"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Welcome to the typescript learning!");
// Type Script simple type values ley
let username = "UserName";
let userage = 26;
let isActive = true;
// Special types in type script 
// Any Type 
let uservalue = 54;
uservalue = "Stark";
uservalue = true;
console.log(uservalue, "this is the example of the any type!/n");
// Type: unknown
// unknown is a similar, but safer alternative to any.
// TypeScript will prevent unknown types from being used, as shown in the below example:
let w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
// ---------------------------------
// Type: undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
let y = undefined;
let z = null;
// Arrays in typescript 
const names = []; //here we are assigning the array of string similiar to :number[] and boolean[]
names.push('Name1');
console.log(names);
// readonly type 
const names2 = ['name1', "name2"];
// names2.push("name3") Error 
// here in the above array it has read only which meas we can't push or edit any vales in that array 
// Type Intefrence
// if we have the array of string and we push the a different type in it means it shows error 
const testarray1 = ["string1", "string2", 'string3'];
// testarray1.push(2) Error
// Tuples 
// a tuple is a typed array with the fixed length and it's types for each index 
// To define a tuple we must first give the tupes and length of the tuple 
let tuplearr1;
// initialize correctly 
tuplearr1 = ["string", 25, true, "string"];
// tuplearr1 =[23,"string",true,"string"] Error cause the order is mismatching 
console.log(tuplearr1);
// to avoid the mismatching of the assigned values
// we can use read only tuples 
let tuplearr2 = ["string", 34567, true];
// ---------------------------------------
// Named Tuples 
// named tuples allowed us to give the content to our values 
const usersData = ["username", 27];
console.log(usersData);
// Destructuring Tuples
const graph = [55.2, 41.3];
const [val1, val2] = graph;
console.log(val1, val2);
// /---------------------------------
// type script object types 
// Basic Typescript objects 
const objval1 = {
    name: "username",
    age: 34,
    isactive: false,
};
console.log("example Basic Object Typing", objval1);
// same like others you can't assing a different type varibale to the objects like objval1.name =234
// Optional Properties 
// Optional properties are properties that don't have to be defined in the object definition.
const car = {
    type: "Toyota"
};
car.mileage = 2000;
console.log(car);
// Index Signatures
const carNames = {};
carNames.Bmw = "5 star car";
const nameAgeMap = {};
// nameAgeMap.Jack = "twentyfive"; Error  
//------------------------------------------------------------------
// Type Script Enums 
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
var Directions;
(function (Directions) {
    Directions["North"] = "North";
    Directions["South"] = "South";
    Directions["West"] = "West";
})(Directions || (Directions = {}));
let current_direction = (directions) => {
    if (Directions.North == directions) {
        console.log("the direction is ", Directions.North);
    }
    else if (Directions.West == directions) {
        console.log("the direction is ", Directions.West);
    }
    else if (Directions.South == directions) {
        console.log("the direction is ", Directions.South);
    }
    else {
        console.log("the direction is somthing else");
    }
};
current_direction(Directions.North);
const Car = {
    carName: "I20 Nline ",
    carYear: 2026,
    carModel: "N6"
};
console.log("the Car object value is" + Car.carName + Car.carModel, Car.carYear);
const carDetails = {
    name: "Nline N6",
    year: 2026,
    username: "AshaYAsh",
    insurance: true,
    number: 1234567
};
console.log(carDetails);
//# sourceMappingURL=index.js.map