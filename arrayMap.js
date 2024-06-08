// Function to check if there is a subarray that sums to the given number
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

// Example usage:
const exampleArray = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSumSubarray(exampleArray, target)); // true