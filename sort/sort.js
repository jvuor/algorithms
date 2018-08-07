var prettyTime = require('pretty-hrtime')
const insertionSort = require('./insertionSort')
const builtInSort = require('./builtinSort')

var time = process.hrtime()

const countTime = () => {
  // counts time from the last time the function was called
  // returns the result as a prettified string
  result = process.hrtime(time)
  time = process.hrtime()
  return prettyTime(result)
}

const createArray = (len) => {
  // cretes an array of desired lenght, filled with random numbers
  let newArray = []
  for (let i = 0; i < len; i++) {
    newArray[i] = Math.random() * 10000
  }

  return newArray
}

const runTest = (len) => {
  // tests the different sorting algorithms and prints out the result
  countTime()
  insertionSort(createArray(len))
  const insertionResult = countTime()
  builtInSort(createArray(len))
  const builtInResult = countTime()

  console.log('\n\nResults, '+ len +' elements\n-----------------\nInsertion sort:\t\t'+insertionResult+'\nJS .sort function:\t'+builtInResult)
}

module.exports = { countTime, createArray, runTest }