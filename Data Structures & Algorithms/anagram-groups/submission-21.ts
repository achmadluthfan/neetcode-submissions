class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // bingung cara nge grouping word berdasarkan count yang sama
        const map = new Map();
        let result: string[][] = [];
        for (const word of strs) {
            const count = new Array(26).fill(0);
            for (const char of word) {
                const index = char.charCodeAt(0) - 97;
                count[index]++;
            };
            if(map.has(count)) {
                result.push([word]);
            } else {
                map.set(count, word);
                result.push([word])
            }
       };
        console.log("map", map);
        console.log("result", result);

        return;

    }
}
