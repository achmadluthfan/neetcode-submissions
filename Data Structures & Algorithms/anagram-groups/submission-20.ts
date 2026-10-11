class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map();
        let result: string[][] = [];
        for (const word of strs) {
            const count = new Array(26).fill(0);
            for (const char of word) {
                const index = char.charCodeAt(0) - 97;
                count[index]++;
            };
            map.set(word, count);
            result.push([map.get(word)]);
        };

        console.log("result", result);

        return;

    }
}
