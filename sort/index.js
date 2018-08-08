const sort = require('./sort')
const mergeSort = require('./mergeSort')

// running a number of sorting tests with different size arrays
sort.runTest(10)
sort.runTest(1000)
sort.runTest(100000)