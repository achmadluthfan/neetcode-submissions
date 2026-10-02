class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // i want to start with defining the algorithm

        // 1. grouping based on similarity of the characters from each words
        for (const str of strs ) {
            const firstWord = new Set ([str])
            console.log("firstWord => ", firstWord);
        }
        // 2. grouping it into same array

        return
    }
}
