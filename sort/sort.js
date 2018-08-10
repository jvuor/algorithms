const prettyTime = require('pretty-hrtime')
const insertionSort = require('./insertionSort')
const builtInSort = require('./builtinSort')
const mergeSort = require('./mergeSort')

let time = process.hrtime()

const countTime = () => {
  // counts time from the last time the function was called
  // returns the result as a tuple of [seconds, decimals]
  const result = process.hrtime(time)
  time = process.hrtime()
  return result
}

const createArray = (len) => {
  // creates an array of desired length, filled with random numbers
  let newArray = []
  for (let i = 0; i < len; i++) {
    newArray[i] = Math.random() * 10000
  }

  return newArray
}

const minArrayIndex = (array) => {
  // finds the index of the shortest time in an array of hrtime tuples
  // returns the index as a number
  let minIndex = null
  let minResult = [+Infinity, +Infinity]

  for (let i = 0; i < array.length; i++) {
    if (array[i][0] < minResult[0] || (array[i][0] === minResult[0] && array[i][1] < minResult[1])) {
      minResult = array[i]
      minIndex = i
    }
  }

  if( minIndex === null ) {
    // no error handling - this is hardly a critical error in itself,
    // but obviously something has gone wrong somewhere else
    throw 'Error in minArrayIndex'
  } else {
    return minIndex
  }
}

const runTest = (len) => {
  // tests the different sorting algorithms and prints out the result
  countTime()
  let insertionResult = []
  // check if insertion sort timed out or finished normally
  const result = insertionSort(createArray(len))
  result ?
    insertionResult = countTime() :
    insertionResult = [+Infinity, +Infinity]
  countTime()

  mergeSort(createArray(len))
  const mergeResult = countTime()
  builtInSort(createArray(len))
  const builtInResult = countTime()

  prettyPrint({ len, insertionResult, mergeResult, builtInResult })
}

const prettyWrap = (string, style) => {
  // wraps a string with the console style codes
  // supported styles:
  // 'header' - cyan, underlined
  // 'highlight' - green

  // short guide to styling console text:
  //
  // \x1b - escapes the following style code
  //
  // style codes used here:
  // [0m - reset styles
  // [4m - underlined
  // [36m - text color: cyan
  // [32m - text color: green
  //
  // http://voidcanvas.com/make-console-log-output-colorful-and-stylish-in-browser-node/

  let wrappedStr = '\x1b'

  switch (style) {
    case 'header':
      wrappedStr = wrappedStr + '[4m\x1b[36m'
      break
    case 'highlight':
      wrappedStr = wrappedStr + '[32m'
      break
    default:
      console.error('error in PrettyWrap: unknown style ', style)
      return string   // exiting with no styling attached
  }

  wrappedStr = wrappedStr + string + '\x1b[0m'

  return wrappedStr
}

const printTime = (time) => {
  //wrapper for prettyTime with handler for invalid results
  if (time[0] === +Infinity) {
    return 'N/A'
  } else {
    return prettyTime(time)
  }
}

const prettyPrint = (results) => {
  //outputs the results into console

  //to add support for more algorithms, just update these two arrays
  const resultArray = [results.insertionResult, results.mergeResult, results.builtInResult]
  const algoNames = ['Insertion sort', 'Merge sort', 'JS Array.prototype.sort()']

  //finding the fastest time so it can be highlighted in the results
  const minIndex = minArrayIndex(resultArray)

  process.stdout.write(prettyWrap('Results for an array with ' + results.len +' elements\n\n', 'header'))
  
  // loop writes the result line for each algorithm
  for (let i = 0; i < resultArray.length; i++) {
    process.stdout.write(algoNames[i])

    // this part makes the columns stay vertically aligned despite different algo name lengths.
    const TAB_LENGTH_IN_CONSOLE = 8
    const columnWidth = 4   // width in tab lengths, TODO: make this dynamic
    for (let j = 0; j < columnWidth- (algoNames[i].length / TAB_LENGTH_IN_CONSOLE); j++) { process.stdout.write('\t') }

    minIndex === i?   // if this is the fastest result, highlight it
    process.stdout.write(prettyWrap(printTime(resultArray[i]), 'highlight')) :
    process.stdout.write(printTime(resultArray[i]))
    process.stdout.write('\n')
  }

  process.stdout.write('\n')

}

// exporting all the helper functions for tests
module.exports = { countTime, createArray, runTest, minArrayIndex, prettyWrap, prettyPrint }