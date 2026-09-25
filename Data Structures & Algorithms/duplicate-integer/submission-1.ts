class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const isDuplicate = new Set(nums);
        console.log("isDuplicate: ", isDuplicate)
    }
}
