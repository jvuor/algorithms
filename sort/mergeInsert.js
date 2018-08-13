//merge sort combined with insertion sort for small arrays. ItA, problem 2-1

const insertionSort = require('./insertionSort')

//if we have less than this amount of elements, use insertion sort
const INSERTION_LIMIT = 10



function merge(array, start, mid, end) {
  const subArray1Len = mid - start + 1
  const subArray2Len = end - mid
  let subArray1 = []
  let subArray2 = []

  for (let i = 0; i < subArray1Len; i++) {
    subArray1[i] = array[start + i]
  }
  for (let j = 0; j < subArray2Len; j++) {
    subArray2[j] = array[mid + j + 1]
  }

  subArray1[subArray1.length] = +Infinity
  subArray2[subArray2.length] = +Infinity

  let i = 0
  let j = 0

  for (let k = start; k <= end; k++) {
    if (subArray1[i] < subArray2[j]) {
      array[k] = subArray1[i]
      i++
    } else {
      array[k] = subArray2[j]
      j++
    }
  }
}

function mergeSortfn(array, start, end) {
  if (start < end) {
    if (end - start < INSERTION_LIMIT) {
      const sortable = array.splice(start, end + 1)
      const isresult = insertionSort(sortable)

      let j = 0
      for( let i = start; i <= end; i++ ) {
        array[i] = isresult[j++]
      } 
      return
    }

    let mid = Math.floor((start + end) / 2)
    mergeSortfn(array, start, mid)
    mergeSortfn(array, mid + 1, end)
    merge(array, start, mid, end)
  }
}

function mergeInsertionSort(array) {
  //wrapper for the mergesort functions
  mergeSortfn(array, 0, array.length - 1)
  return array
}

module.exports = mergeInsertionSort