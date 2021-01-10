function getInput() {
  var input = document.getElementById("UserInput").value;
  console.log(input);
  //debugger;
  one(input);
  two(input);
  three(input);
  four(input);
  five(input);
}
function one(input) {
  var sentences = input.split(".");
  console.log(sentences);
  var newArr = [];
  for (let sentence of sentences) {
    newArr.push(sentence.trim().charAt(0).toUpperCase() + sentence.slice(1));
  }
  document.getElementById("one").innerHTML = newArr.join(". ");
}
function two(input) {
  var words = input.split(" ");
  console.log(words);
  var newArr = [];
  for (let word of words) {
    newArr.push(word.trim().charAt(0).toUpperCase() + word.slice(1));
  }
  document.getElementById("two").innerHTML = newArr.join(" ");
}
function three(input) {
  var words = input.split(" ");
  console.log(words);
  var newArr = [];
  for (let word of words) {
    if (word.match(/[ia]/g)) newArr.push(word);
  }
  document.getElementById("three").innerHTML = newArr.join(" ");
}
function four(input) {
  var words = input.split(" ");
  console.log(words);
  var newArr = [];
  for (let word of words) {
    newArr.push(reverseString(word));
  }
  document.getElementById("four").innerHTML = newArr.join(" ");
}
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
function five(input) {
  document.getElementById("five").innerHTML = input.split(" ").join("-");
}
