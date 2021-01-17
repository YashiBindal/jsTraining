import { Utility, ClsMath } from "./utility.mjs";

let util = new Utility();
let fullname = "Mahesh Sabnis";
console.log(`Length of ${fullname} = ${util.getStringLength(fullname)}`);
console.log(`Reverse of ${fullname} = ${util.reverseString(fullname)}`);
console.log(`Reverse of ${fullname} = ${util.changeToUpper(fullname)}`);
console.log(`Reverse of ${fullname} = ${util.changeToLower(fullname)}`);

let m = new ClsMath();
console.log(`Add = ${m.add(10, 20)}`);
