function sortNumbers(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
  function sortStrings(arr) {
    return arr.slice().sort();
  }
  
  module.exports = {
    sortNumbers,
    sortStrings
  };