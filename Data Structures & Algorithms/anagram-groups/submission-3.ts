class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // i want to start with defining the algorithm

        const Allset = new Set ([strs]);
        // 1. grouping based on total of characters
        for (const str of strs ) {
            const oneSet = new Set([str]);
            console.log("oneSet", oneSet);
        };
        // 2. grouping basd on similarity of the characters of each group

        return
    }
}
