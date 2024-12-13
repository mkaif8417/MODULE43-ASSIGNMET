// Function to count word occurrences in a string
function countWords(inputString) {
    // Convert the string to lowercase and split it into words
    const words = inputString.toLowerCase().split(/\s+/); // Split on spaces

    // Create a Map to store word counts
    const wordCountMap = new Map();

    // Count occurrences of each word
    for (const word of words) {
        if (wordCountMap.has(word)) {
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
            wordCountMap.set(word, 1);
        }
    }

    return wordCountMap;
}

// Example usage
const text = "PW is nice coaching center";
const wordCounts = countWords(text);

// Display the results
for (const [word, count] of wordCounts) {
    console.log(`${word}: ${count}`);
}
