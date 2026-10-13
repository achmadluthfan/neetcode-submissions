class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // initiate map object
        const map = new Map<number, number[]>();

        // loop nums then put into map object
        for (const num of nums) {
            if(map.has(num)) {
                map.get(num).push(num);
                console.log(map.get(num));
            }
            map.set(num, [num]);
        }

        console.log("map", map);

        // use k as a filter of total number that wan to return 
        // then return it
        return
    }
}
