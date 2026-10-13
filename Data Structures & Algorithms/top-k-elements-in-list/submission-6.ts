class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // initiate map object & array for return
        const map = new Map<number, number[]>();
        const result: number[] = [];
        // loop nums then put into map object (grouping based on same number)
        for (const num of nums) {
            if(map.has(num)) {
                map.get(num).push(num);
            } else {
                map.set(num, [num]);
            }
        }
        console.log('map', map);

        // order based on length on values
        for (const num of map.values()) {
            console.log(num.length)
        }

        // use k as a filter of total number that want to return 


        // then return it

        // sampai bingung pada bagian mengurutkan value ke dalam array result berdasarkan .length yang paling tinggi ke rendah

        return
    }
}
