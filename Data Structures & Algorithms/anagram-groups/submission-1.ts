class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // i want to start with defining the algorithm

        const Allset = new Set ([strs]);
        // 1. grouping based on similarity of the characters from each words
        for (const str of strs ) {
            const oneSet = new Set([str]);
            console.log("oneSet", oneSet);
            // if (Allset.intersection(oneSet)) {
                // console.log("result => ", Allset.intersection(oneSet));
            // };
        };
        // 2. grouping it into same array

        return
    }
}
