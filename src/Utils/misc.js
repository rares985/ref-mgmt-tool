module.exports = {
  toRomanNumeral: (num) => {
    let numCopy = num;
    let result = '';
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (let i = 0; i <= decimal.length; i += 1) {
      // looping over every element of our arrays
      while (numCopy % decimal[i] < numCopy) {
        // keep trying the same number until it won't fit anymore
        result += roman[i];
        // add the matching roman number to our result string
        numCopy -= decimal[i];
        // remove the decimal value of the roman number from our number
      }
    }
    return result;
  },
};
