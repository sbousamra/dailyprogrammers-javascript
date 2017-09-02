const lodash = require('lodash');

const numbers = lodash.range(1, 120)

function getLuckyNumbers(input, checker, inc) {
  const newLuckyNumbers = []
  if (checker < input.length) {
    lodash.forEach(input, (number, index) => {
      if ((index + 1) % checker !== 0) {
        newLuckyNumbers.push(number)
      }
    })
    const newChecker = newLuckyNumbers[inc]
    getLuckyNumbers(newLuckyNumbers, newChecker, inc + 1)
    console.log(newLuckyNumbers)
  } else {
    return getLuckyNumbers
  }
}
getLuckyNumbers(numbers, numbers[1], 1)