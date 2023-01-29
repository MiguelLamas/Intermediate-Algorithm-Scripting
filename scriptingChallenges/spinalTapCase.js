/*
CHALLENGE - Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

// 1. Replace any blank spaces or spaces with underscores with hyphens (-) to spinal case. Try using replace method and Regex.
// 2. Also look at using another replace method with Regex so that everytime a lowercase follows an Uppercase a hyphen (-) is added inbetween
// 3. Finally, make everything lowercase to complete the challenge.

function spinalCase(str) {
    return str.replace(/\s|_/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

spinalCase('This Is Spinal Tap');