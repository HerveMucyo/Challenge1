Below is a comprehensive README documentation for the two JavaScript functions (`hasSumSubarray` and `modifyString`). The README will include a project overview, usage instructions, and code explanations.

---

# JavaScript Coding Challenge Solutions

## Overview

This repository contains solutions for two JavaScript coding challenges:

1. **Subarray Sum Check**: A function that checks if there is a subarray within an array that sums up to a specified target sum.
2. **String Modification**: A function that modifies a string based on its length using specific transformation rules.

Both functions are designed to be efficient and straightforward, ensuring clarity and simplicity in their implementation.

## Files

- `hasSumSubarray.js`: Contains the solution for the Subarray Sum Check challenge.
- `modifyString.js`: Contains the solution for the String Modification challenge.

## Usage

### Subarray Sum Check

The `hasSumSubarray` function checks if there exists a contiguous subarray within an array that sums up to a given target. 

#### Function Signature

```javascript
function hasSumSubarray(numbers, targetSum)
```

#### Parameters

- `numbers` (Array): An array of integers.
- `targetSum` (Number): The target sum to check for.

#### Returns

- `Boolean`: Returns `true` if a subarray with the sum equal to `targetSum` exists, otherwise returns `false`.

#### Example Usage

```javascript
const numbers = [4, 2, 7, 1, 9, 5];
const targetSum = 17;
console.log(hasSumSubarray(numbers, targetSum)); // Output: true
```

### Code Explanation

```javascript
function hasSumSubarray(numbers, targetSum) {
    let currentSum = 0;
    let seenSums = new Set();
    seenSums.add(0);

    for (let num of numbers) {
        currentSum += num;
        if (seenSums.has(currentSum - targetSum)) {
            return true;
        }
        seenSums.add(currentSum);
    }
    return false;
}
```

- **Step 1**: Initialize `currentSum` to 0 and create a `Set` called `seenSums` to keep track of the sums encountered.
- **Step 2**: Add 0 to `seenSums` as the initial sum.
- **Step 3**: Iterate through each number in the `numbers` array, updating `currentSum`.
- **Step 4**: Check if `currentSum - targetSum` is in `seenSums`. If yes, a subarray that sums to `targetSum` exists.
- **Step 5**: If not, add `currentSum` to `seenSums` and continue.
- **Step 6**: Return `false` if no subarray is found.

---

### String Modification

The `modifyString` function modifies a string based on its length using specific transformation rules.

#### Function Signature

```javascript
function modifyString(text)
```

#### Parameters

- `text` (String): The input string to be modified.

#### Returns

- `String`: Returns the modified string based on the rules.

#### Example Usage

```javascript
console.log(modifyString("Hamburger")); // Output: "regrubmaH"
console.log(modifyString("Pizza")); // Output: "80 105 122 122 97"
console.log(modifyString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
```

### Code Explanation

```javascript
function modifyString(text) {
    const textLength = text.length;
    
    if (textLength % 15 === 0) {
        return Array.from(text).map(character => character.charCodeAt(0)).join(' ');
    } else if (textLength % 3 === 0) {
        return text.split('').reverse().join('');
    } else if (textLength % 5 === 0) {
        return Array.from(text).map(character => character.charCodeAt(0)).join(' ');
    } else {
        return text;
    }
}
```

- **Step 1**: Calculate the length of the input string `text`.
- **Step 2**: Check if the length is divisible by 15. If true, convert each character to its ASCII code and return the result.
- **Step 3**: If not, check if the length is divisible by 3. If true, reverse the string and return it.
- **Step 4**: If not, check if the length is divisible by 5. If true, convert each character to its ASCII code and return the result.
- **Step 5**: If none of the above conditions are met, return the original string.

## Conclusion

This repository contains efficient and straightforward solutions for the two coding challenges. The code is well-documented and easy to understand, making it accessible for anyone to review or modify.

---

### Installation and Running

To run the code, simply include the JavaScript files in your project or execute them in a JavaScript runtime environment like Node.js or a web browser console.

```bash
node hasSumSubarray.js
node modifyString.js
```

Ensure you have Node.js installed to run the files from the command line.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Feel free to modify the functions or add additional test cases to further explore their functionality.

For any questions or contributions, please open an issue or submit a pull request on the GitHub repository.

---

