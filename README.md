# Array Manipulation and User Profiles

This project demonstrates the manipulation of arrays and creation of user profiles using JavaScript.

## Files

1. `arrayManipulation.js`
   - Contains two functions:
     - `processArray`: Takes an array of numbers and returns a new array where each even number is squared and each odd number is tripled.
     - `formatArrayStrings`: Takes an array of strings and an array of numbers processed by `processArray`. It modifies each string based on its corresponding number: capitalizing the entire string if the number is even, and converting the string to lowercase if the number is odd.

2. `userInfo.js`
   - Contains the `createUserProfiles` function, which takes an array of names and an array of modified names. It returns an array of objects, each containing `originalName`, `modifiedName`, and an auto-incremented `id` starting from 1.

## Usage

1. Import the necessary functions from the respective files:

```javascript
const { processArray, formatArrayStrings } = require('./arrayManipulation');
const { createUserProfiles } = require('./userInfo');
