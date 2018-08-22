const config = require('./config')
const prettyPrint = require('./output')
const { createArray, checkSortedArray } = require('./helper')

let time = process.hrtime()

const countTime = () => {
  // counts time from the last time the function was called
  // returns the result as a tuple of [seconds, decimals]
  const result = process.hrtime(time)
  time = process.hrtime()
  return result
}

const runTest = (len, output = true) => {
  // tests the different sorting algorithms and prints out the result
  // len - integer: length of the test array
  // output - boolean: does the function send the output to the printing function

  let results = []
  const algorithms = config.functions
  const infinite = [+Infinity, +Infinity]

  algorithms.forEach(algorithm => {
    countTime()
    const sortedArray = algorithm(createArray(len))
    if (checkSortedArray(sortedArray)) {
      results.push(countTime())
    } else {
      results.push(infinite)
    }
  })
  if (output) {
    prettyPrint({ len, results })
  }
}

module.exports = { countTime, runTest }
