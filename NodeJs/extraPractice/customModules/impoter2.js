//the module will be loaded and cached
let logic = require("./utility2");
//the arrayLogic is the exported function itself
let arrayLogic = require("./functionModule");
let fullname = "Mahesh Sabnis";
console.log(`Length of ${fullname} = ${logic.getStringLength(fullname)}`);
console.log(`Reverse of ${fullname} = ${logic.reverseString(fullname)}`);
console.log(`Reverse of ${fullname} = ${logic.changeToUpper(fullname)}`);
let arr = [1, 2, 3, 4, 5];

console.log(`Reverse of ${arr} = ${arrayLogic.reverseArray(arr)}`);
console.log(`length of ${arr} = ${arrayLogic.arraylength(arr)}`);
