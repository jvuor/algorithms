const { checkSortedArray, createArray } = require('../../testbench/helper')
const insertionSort = require('../insertionSort')
const builtInSort = require('../builtinSort')
const mergeSort = require('../mergeSort')

describe('Check test logic', () => {
  // checking that the basic assumptions in our tests are correct:
  // -checkSortedArray does what it's supposed to do,
  // -sorting algorithms actually return sorted results
  let testUnsorted
  let testSorted

  beforeEach(() => {
    testUnsorted = [4, 2, 3, 1]
    testSorted = [1, 2, 3, 4]
  })

  test('checkSortedArray works', () => {
    expect(checkSortedArray(testSorted)).toBe(true)
    expect(checkSortedArray(testUnsorted)).toBe(false)
  })

  test('insertionSort works', () => {
    expect(insertionSort(testUnsorted)).toEqual(testSorted)
  })

  test('JS sort function wrapper works', () => {
    expect(builtInSort(testUnsorted)).toEqual(testSorted)
  })

  test('mergeSort works', () => {
    expect(mergeSort(testUnsorted)).toEqual(testSorted)
  })
})

describe('sort tests', () => {
  // tests with a realistic array
  let testArray

  beforeEach(() => {
    testArray = createArray(100)
  })

  test('test array is not sorted by default', () => {
    const result = checkSortedArray(testArray)
    expect(result).toBe(false)
  })
  test('insertionSort works', () => {
    const sortedArray = insertionSort(testArray)
    const result = checkSortedArray(sortedArray)

    expect(result).toBe(true)
  })
  test('JS sort function wrapper works', () => {
    const sortedArray = builtInSort(testArray)
    const result = checkSortedArray(sortedArray)

    expect(result).toBe(true)
  })

  test('merge sort works', () => {
    const sortedArray = mergeSort(testArray)
    const result = checkSortedArray(sortedArray)

    expect(result).toBe(true)
  })
})
