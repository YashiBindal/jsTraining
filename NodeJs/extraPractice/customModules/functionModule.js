//another way of exporting
function reverseArray(arr) {
  return arr.reverse();
}
function arraylength(arr) {
  return arr.length;
}
// directly the function is exported as Node.js custom module
module.exports = { reverseArray, arraylength };
