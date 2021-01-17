//Mjs extension is used because
// It is good for clarity, i.e. it makes it clear which files are modules,
//  and which are regular JavaScript.
// It ensures that your module files are parsed as a module by runtimes such as Node.js,
// and build tools such as Babel.

export class Utility {
  getStringLength(str) {
    return str.length;
  }
  reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
  }
  changeToUpper(str) {
    return str.toUpperCase();
  }
  changeToLower(str) {
    return str.toLowerCase();
  }
}

export class ClsMath {
  add(x, y) {
    return x + y;
  }
}
