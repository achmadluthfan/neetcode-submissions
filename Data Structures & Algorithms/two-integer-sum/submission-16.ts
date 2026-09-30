class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // if a + b = target --> b = target - a
        // set map first with nums
        const map = new Map();
        let diff: number;

        // 5, 5
        for (let i = 0; i < nums.length; i++) {
            if (map.size === 0) {
                map.set(nums[i], i);
            };

            diff = target - nums[i];

            if (map.has(diff) && map.get(diff) !== i) {
                return [i, map.get(diff)];
            } else {
                map.set(diff, i + 1);
            };
        };

        return [];
    }
}
