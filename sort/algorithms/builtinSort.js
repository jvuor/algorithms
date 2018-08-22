// Wrapper for the JavaScript .sort() function, so we can compare results from other
// sorting algos with it

const builtInSort = (array) => {
  const result = array.sort((a, b) => a - b)
  return result
}

module.exports = builtInSort
