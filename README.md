## Installation
```bash
npm install sort-the-array --save-dev
```

## Import
```bash
Example: test.cjs file extension
```
```javascript
const { sortNumbers, sortStrings } = require('sort-the-array');
```

## Usage
```javascript
const numbers = [4, 2, 7, 1, 5];
const strings = ['banana', 'apple', 'orange', 'grape'];

console.log('Sorted numbers:', sortNumbers(numbers)); // Sorted numbers: [ 1, 2, 4, 5, 7 ]
console.log('Sorted strings:', sortStrings(strings)); // Sorted strings: [ 'apple', 'banana', 'grape', 'orange' ]
```
