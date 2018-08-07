var prettyTime = require('pretty-hrtime')
const insertionSort = require('./insertionSort')
const builtInSort = require('./builtinSort')

var time = process.hrtime()

const countTime = () => {
  result = process.hrtime(time)
  time = process.hrtime()
  return prettyTime(result)
}

const createArray = (len) => {
  let newArray = []
  for (let i = 0; i < len; i++) {
    newArray[i] = Math.random() * 10000
  }

  return newArray
}

const runTest = (len) => {
  countTime()
  insertionSort(createArray(len))
  const insertionResult = countTime()
  builtInSort(createArray(len))
  const builtInResult = countTime()

  console.log('\n\nResults, '+ len +' elements\n-----------------\nInsertion sort:\t\t'+insertionResult+'\nJS .sort function:\t'+builtInResult)
}

module.exports = { countTime, createArray, runTest }