class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map();
        let difference: number;
        let result: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            difference = target - nums[i];

            if (nums.includes(difference) && nums[i] !== difference) {
                map.set(difference, nums.indexOf(difference))
            }

            if (map.has(difference)) {
                result.push(map.get(difference));
            } else {
                map.set(difference, nums.indexOf(difference));
            };
        };

        return result;
        
    }
}
