class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // 1. check the 2 param is contains same amount of words and types also
        const first = [...s].sort().join("");
        const second = [...t].sort().join("");

        // 2. verify can be anagrams or not (im not sure i should do this)

        // instead i can directly return the comparison results
        return first === second;
    }
}
