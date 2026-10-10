class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // sampe bingung tentang bagian "then, we can use this array as the key in the hash map to group the strings"
        const set = new Set();
        for (const word of strs) {
            console.log("word", word);
            for (const char of word) {
                const count = new Array(26).fill(0);
                const index = char.charCodeAt(0) - 97;
                count[index]++;
                console.log("count", count);
            }
        }

        return;

    }
}
