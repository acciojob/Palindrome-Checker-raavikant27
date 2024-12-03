function isPalindrome(s) {
    // Convert the string to lowercase and remove all non-alphanumeric characters
    let cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare the cleaned string with its reverse
    let reversedString = cleanedString.split('').reverse().join('');

    // Return true if the cleaned string is equal to the reversed string, otherwise return false
    return cleanedString === reversedString;
}

// Example usage
console.log(isPalindrome("race a car"));  // Output: false
console.log(isPalindrome("A man, a plan, a canal: Panama"));  // Output: true
