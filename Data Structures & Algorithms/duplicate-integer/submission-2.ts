class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const checked = new Set(nums);
        const isDuplicated = checked.size !== nums.length ? true : false
        return isDuplicated;
    }
}
