class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // if a + b = target --> b = target - a
        const map = new Map();
        let diff: number;
        for (let i = 0; i < nums.length; i++) {
            diff = target - nums[i]
            if (map.has(diff)) {
                console.log(map.get(diff))
            } else {
                map.set(diff, i + 1)
            }
        }

        return 

    }
}
