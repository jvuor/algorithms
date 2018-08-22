const insertionSort = require('../algorithms/insertionSort')
const builtInSort = require('../algorithms/builtinSort')
const mergeSort = require('../algorithms/mergeSort')

const algorithms = {
  // these are the functions that we are testing and the names used in output for them
  // keep the arrays in the same order
  functions: [ insertionSort, mergeSort, builtInSort ],
  names: [ 'Insertion sort', 'Merge sort', 'JS Array.prototype.sort()' ]
}

module.exports = algorithms
