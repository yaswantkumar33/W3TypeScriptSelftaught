console.log("Welcome to the typescript learning!");
// Type Script simple type values ley
let username : string ="UserName"
let userage : number =26
let isActive : boolean =true
// Special types in type script 
// Any Type 
let uservalue:any = 54;
uservalue = "Stark";
uservalue = true;
console.log(uservalue,"this is the example of the any type!/n")
// Type: unknown
// unknown is a similar, but safer alternative to any.
// TypeScript will prevent unknown types from being used, as shown in the below example:
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
// ---------------------------------
// Type: undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
let y: undefined = undefined;
let z: null = null;
// Arrays in typescript 
const names :string[] =[];//here we are assigning the array of string similiar to :number[] and boolean[]
names.push('Name1');
console.log(names);
// readonly type 
const names2 :readonly string[]=['name1',"name2"];
// names2.push("name3") Error 
// here in the above array it has read only which meas we can't push or edit any vales in that array 

// Type Intefrence
// if we have the array of string and we push the a different type in it means it shows error 
const testarray1=["string1","string2",'string3'];
// testarray1.push(2) Error

// Tuples 
// a tuple is a typed array with the fixed length and it's types for each index 
// To define a tuple we must first give the tupes and length of the tuple 
let tuplearr1 : [string,number,boolean,string];
// initialize correctly 
tuplearr1 =["string",25,true,"string"];
// tuplearr1 =[23,"string",true,"string"] Error cause the order is mismatching 
console.log(tuplearr1);

// to avoid the mismatching of the assigned values
// we can use read only tuples 
let tuplearr2 :readonly [string,number,boolean] = ["string",34567,true] 
// ---------------------------------------
// Named Tuples 
// named tuples allowed us to give the content to our values 
const usersData :[name:string,age:number]=["username",27]
console.log(usersData);
// Destructuring Tuples
const graph: [number, number] = [55.2, 41.3];
const [val1, val2] = graph;
console.log(val1,val2);
// /---------------------------------
// type script object types 
// Basic Typescript objects 
const objval1 : {name:string,age:number,isactive:boolean} ={
  name:"username",
  age:34,
  isactive:false,
}
console.log("example Basic Object Typing",objval1)
// same like others you can't assing a different type varibale to the objects like objval1.name =234
// Optional Properties 
// Optional properties are properties that don't have to be defined in the object definition.
const car: { type: string, mileage?: number } = {  //? defines that value is optional
  type: "Toyota"
};
car.mileage = 2000;
console.log(car);
// Index Signatures
const carNames : {[index: string]: string}={};
carNames.Bmw = "5 star car" 
const nameAgeMap: { [index: string]: number } = {};
// nameAgeMap.Jack = "twentyfive"; Error  
//------------------------------------------------------------------
// Type Script Enums 
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.

enum Directions {
  North="North",
  South="South",
  West="West",
}

let current_direction = (directions:string)=>{
  if (Directions.North==directions){
    console.log( "the direction is ",Directions.North);
  }
  else if  (Directions.West==directions){
    console.log( "the direction is ",Directions.West);
  }else if (Directions.South==directions){
    console.log( "the direction is ",Directions.South);
  }else {
    console.log("the direction is somthing else")
  }
}

current_direction(Directions.North);