// Function to change a string based on its length
function modifyString(text) {
    const textLength = text.length;

    if (textLength % 15 === 0) {
        // If length is divisible by 15, convert characters to ASCII codes
        return Array.from(text).map(character => character.charCodeAt(0)).join(' ');
    } else if (textLength % 3 === 0) {
        // If length is divisible by 3, reverse the string
        return text.split('').reverse().join('');
    } else if (textLength % 5 === 0) {
        // If length is divisible by 5, convert characters to ASCII codes
        return Array.from(text).map(character => character.charCodeAt(0)).join(' ');
    } else {
        // Return the original text if no conditions are met
        return text;
    }
}

// Example usage:
console.log(modifyString("Hamburger")); // "regrubmaH"
console.log(modifyString("Pizza")); // "80 105 122 122 97"
console.log(modifyString("Chocolate Chip Cookie")); // "eikooCpihCetalocohC"