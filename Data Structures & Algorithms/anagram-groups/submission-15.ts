class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        for (const char of strs) {
            const count = new Array(26).fill(0);
            const index = char.charCodeAt(0) - 97;

            count[index]++;
            console.log("count", count);
        }

        return;

    }
}
