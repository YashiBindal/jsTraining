//exporting list of functions directly

module.exports = {
  getStringLength: function (str) {
    return str.length;
  },
  reverseString: function (str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
  },
  changeToUpper: function (str) {
    return str.toUpperCase();
  },
};
