//merge sort algorithm from ItA pages 31-34

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
    var mid = Math.floor((start + end) / 2)
    mergeSortfn(array, start, mid)
    mergeSortfn(array, mid + 1, end)
    merge(array, start, mid, end)
  }
}

function mergeSort(array) {
  //wrapper for the mergesort functions
  mergeSortfn(array, 0, array.length - 1)
  return array
}

module.exports = mergeSort