class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        // 1. spread of each words into different Object Set
        // let spreadStrings;
        for (const str of strs) {
            const result = [...str];
            // spreadStrings.push(result);
            console.log("result", result);
        }

        // sampai gimana caranya menyimpan word yang udah di spread 
        // setelah disimpan maka dibandingkan, apakah ada yang cocok atau enggak (isSubsetOf) -> if true -> group kedua array ke dalam parent array yang sama

        return

    }
}
