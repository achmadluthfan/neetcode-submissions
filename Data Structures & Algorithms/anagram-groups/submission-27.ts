class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map();
        const result: string[][] = []
        for (const word of strs) {
            const count = new Array(26).fill(0);
            for (const char of word) {
                const index = char.charCodeAt(0) - 97;
                count[index]++;
            };

            const key = count.join(',');
            if(map.has(key)) {
                map.get(key).push(word);
            } else {
                map.set(key, [word]);
            };
        };

        for (const group of map.values()) {
            result.push(group)
        }

        return result;
    }
}
