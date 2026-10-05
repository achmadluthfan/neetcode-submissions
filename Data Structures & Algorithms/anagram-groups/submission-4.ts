class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // i want to start with defining the algorithm

        const allSet = new Set ([strs]);
        // 1. grouping based on total of characters
        for (const str of strs ) {
            const oneSet = new Set([str]);
            console.log(allSet.intersection(oneSet));
        };
        // 2. grouping based on similarity of the characters of each group

        return
    }
}
