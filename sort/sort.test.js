const sort = require('./sort')
const insertionSort = require('./insertionSort')
const builtinSort = require('./builtinSort')
jest.mock('./insertionSort')
jest.mock('./builtinSort')

describe('testing the algorithm test platform', () => {
  test('countTime returns correct time since last call', done => {
    const initialTime = sort.countTime()
    setTimeout(() => {
      const nextTime = sort.countTime()
      expect(nextTime).toMatch(/^1.?0?[0-9]? s/)  // matches '1 s', '1.0? s', '1.1 s'
      done()
    }, 1000)
  })

  test('createArray creates an array of desired length', () => {
    const array1 = sort.createArray(5)
    expect(array1.length).toBe(5)
    const array2 = sort.createArray(7786)
    expect(array2.length).toBe(7786)
  })

  test('createArray elements are numbers', () => {
    const array = sort.createArray(100)
    array.forEach((element) => {
      expect(typeof element).toBe('number')
      expect(element >= 0).toBe(true)
      expect(element < 10000).toBe(true)
    })
  })

  test('runTest calls the correct algorithms with expected arrays', () => {
    sort.runTest(5)
    expect(insertionSort).toBeCalled()
    const calledArray = insertionSort.mock.calls[0][0]
    expect(calledArray.length).toBe(5)
    expect(typeof calledArray[0]).toBe('number')

    expect(builtinSort).toBeCalled()
    const calledArray2 = builtinSort.mock.calls[0][0]
    expect(calledArray2.length).toBe(5)
    expect(typeof calledArray2[0]).toBe('number')
  })
})