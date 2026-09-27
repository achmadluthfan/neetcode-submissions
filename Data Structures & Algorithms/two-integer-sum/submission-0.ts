class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let result = []
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; i++) {
                if(nums[i] + nums[j] == target) {
                    result = [i,j]
                    break
                }
            }
        }
        
        return result
    }
}
