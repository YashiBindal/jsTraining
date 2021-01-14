//array.
var arr = [
  ["Status", "Name", "Marks", "Position"],
  ["active", "Akash", 10.0, "Web Developer"],
  ["active", "Vikash", 10.0, "Front-end-dev"],
  ["deactive", "Manish", 10.0, "designer"],
  ["active", "Kapil", 10.0, "JavaScript developer"],
  ["active", "Manoj", 10.0, "Angular developer"],
];

//javascript create JSON object from two dimensional Array
function arrayToJSONObject(arr) {
  //header
  var keys = arr[0];

  //vacate keys from main array
  var newArr = arr.slice(1, arr.length);

  var formatted = [],
    data = newArr,
    cols = keys,
    l = cols.length;
  for (var i = 0; i < data.length; i++) {
    var d = data[i],
      o = {};
    for (var j = 0; j < l; j++) o[cols[j]] = d[j];
    formatted.push(o);
  }
  return formatted;
}

let formatedArr = arrayToJSONObject(arr);
console.log(formatedArr);
