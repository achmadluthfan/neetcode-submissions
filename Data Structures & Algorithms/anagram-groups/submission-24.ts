class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // bingung cara nge grouping word berdasarkan count yang sama
        const map = new Map();
        for (const word of strs) {
            const count = new Array(26).fill(0);
            for (const char of word) {
                const index = char.charCodeAt(0) - 97;
                count[index]++;
            };

            const key = count.join(',');
            if(map.has(key)) {
                map.get(key).push(word);
                console.log("map has count lur")
            } else {
                map.set(key, [word]);
            };
            console.log("map", map);

        };

        return;
    }
}
