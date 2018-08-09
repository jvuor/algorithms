var prettyTime = require('pretty-hrtime')
const insertionSort = require('./insertionSort')
const builtInSort = require('./builtinSort')
const mergeSort = require('./mergeSort')

var time = process.hrtime()

const countTime = () => {
  // counts time from the last time the function was called
  // returns the result as a tuple of [seconds, decimals]
  result = process.hrtime(time)
  time = process.hrtime()
  return result
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
  mergeSort(createArray(len))
  const mergeResult = countTime()
  builtInSort(createArray(len))
  const builtInResult = countTime()

  prettyPrint({ len, insertionResult, mergeResult, builtInResult })
}

const prettyPrint = (results) => {
  //outputs the results into console
  //
  //the print is pretty, the code isn't

  let minIndex = null
  let minResult = [+Infinity, +Infinity]
  const resultArray = [results.insertionResult, results.mergeResult, results.builtInResult]

  for (let i = 0; i < resultArray.length; i++) {
    if (resultArray[i][0] < minResult[0] || (resultArray[i][0] === minResult[0] && resultArray[i][1] < minResult[1])) {
      minResult = resultArray[i]
      minIndex = i
    }
  }

  if( minIndex === null ) { throw 'Error with printing results' }

  process.stdout.write('\x1b[4m\x1b[36mResults for an array with ' + results.len +' elements\x1b[0m\n\n')
  
  process.stdout.write('Insertion sort\t\t')
  minIndex === 0?
  process.stdout.write('\x1b[32m' + prettyTime(results.insertionResult) + '\x1b[0m') :
  process.stdout.write(prettyTime(results.insertionResult))
  process.stdout.write('\n')

  process.stdout.write('Merge sort\t\t')
  minIndex === 1?
  process.stdout.write('\x1b[32m' + prettyTime(results.mergeResult) + '\x1b[0m') :
  process.stdout.write(prettyTime(results.mergeResult))
  process.stdout.write('\n')

  process.stdout.write('JS Array.sort()\t\t')
  minIndex === 2?
  process.stdout.write('\x1b[32m' + prettyTime(results.builtInResult) + '\x1b[0m') :
  process.stdout.write(prettyTime(results.builtInResult))
  process.stdout.write('\n')

  console.log('\n')
}

module.exports = { countTime, createArray, runTest }