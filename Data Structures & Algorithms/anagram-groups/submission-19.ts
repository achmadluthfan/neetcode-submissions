class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // sampe bingung tentang bagian "then, we can use this array as the key in the hash map to group the strings"
        const map = new Map();
        for (const word of strs) {
            const count = new Array(26).fill(0);
            for (const char of word) {
                const index = char.charCodeAt(0) - 97;
                count[index]++;
            };
            map.set(word, count);
        }

        return;

    }
}
