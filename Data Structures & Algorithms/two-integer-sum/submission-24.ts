class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map();
        let difference: number;

        for (let i = 0; i < nums.length; i++) {
            // 4
            difference = target - nums[i];

            if (map.has(difference)) {
                // key : kalo udah ada yang sama berarti nilai_yang_sama + i = target
                return [map.get(difference)!, i]
            }

            map.set(nums[i], i);
        };

        return

    }
}
