class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        // sampe bingung memahami tentang charCodeAt
        for (const char of strs) {
            console.log("char", char);
            const index = char.charCodeAt(0);
            console.log("index, ", index);
        }

        return;

    }
}
