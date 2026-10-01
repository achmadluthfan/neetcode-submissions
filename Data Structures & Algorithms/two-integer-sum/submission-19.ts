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
        let result: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            // -8 - (-3)
            // diff = -5
            diff = target - nums[i];

            if (map.has(diff)) {
                result.push(map.get(diff));
                break;
            } else {
                map.set(diff, nums.indexOf(diff));
            };

            // if (nums.includes(diff)) {
            //     const index = nums.indexOf(diff);

            //     if (result.length >= 1) {
            //        if (index < result.length - 1) {
            //             result.push(index);
            //        } else {
            //             result.unshift(index);
            //        }
            //     } else {
            //         result.push(index);
            //     }
            // }
        };

        console.log("map", map);

        return result;
        
    }
}
