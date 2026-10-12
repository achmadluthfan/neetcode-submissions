class Solution {
    groupAnagrams(strs: string[]): string[][] {
        // Beri tipe eksplisit: key = string, value = array of string
        const map = new Map<string, string[]>();

        for (const word of strs) {
            const count = new Array(26).fill(0);
            
            for (let i = 0; i < word.length; i++) {
                count[word.charCodeAt(i) - 97]++;
            }

            // .toString() setara dengan .join(','), tapi sedikit lebih ringkas
            const key = count.toString();

            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key)!.push(word);
        }

        // Langsung konversi iterator values menjadi array 2D
        return Array.from(map.values());
    }
}