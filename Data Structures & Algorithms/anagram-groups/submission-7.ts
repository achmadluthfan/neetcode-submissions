class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const allSet = new Set();
        let result: string[][];

        // 1. split each value than add into Set object
        for (const str of strs ) {
            const splitted = str.split("");
            allSet.add(splitted)
        };

        console.log("allSet", allSet)

        // 2. check intersection between each of splitted value
        

        return result;
    }
}
