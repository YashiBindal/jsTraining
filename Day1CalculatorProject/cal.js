let inputString = "";
// set innerHTML
function setResult(value){
    document.getElementById("result").innerHTML = value;
}

function getValue(value) 
{
//  clear textarea
    if (value == "C") {
    inputString = "";
    setResult(inputString);
    return;
  }
//   evaluate result
  if (value == "=") {
    inputString=eval(inputString);
    setResult(inputString);
    return;
  }
// concat input
  inputString += value;
  setResult(inputString);
}
