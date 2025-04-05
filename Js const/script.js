/*
Constant Objects and Arrays--------------------------->
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object
*/

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
console.log(cars);

// But you can NOT reassign the array:
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR


// Constant Objects----------------------------->
// You can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
console.log(car);

// But you can NOT reassign the object:
// car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

// Hoisting---------------------->
// Variables defined with var are hoisted to the top and can be initialized at any time.
// Meaning: You can use the variable before it is declared:
carNam = "Volvo";
var carNam;

// Variables defined with const are also hoisted to the top, but not initialized.
// Meaning: Using a const variable before it is declared will result in a ReferenceError:

// alert (carName);
const carName = "Volvo"; // ReferenceError