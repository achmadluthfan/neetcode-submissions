class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        // 1. spread of each words into different Object Set
        let spreadStrings:string[];
        for (const str of strs) {
            spreadStrings.push(...str);
        }

        console.log("spreadStrings", spreadStrings);

        return

    }
}
