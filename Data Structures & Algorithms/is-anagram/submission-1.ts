class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // after read recommendation from gemini //

        // 1. return false directly if length was not same
        if (s.length !== t.length) return false;

        // 2. check the 2 param is contains the same type of words
        const first = s.split("").sort().join("");
        const second = t.split("").sort().join("");

        // 3. i can directly return the comparison results
        return first === second;
    }
}
