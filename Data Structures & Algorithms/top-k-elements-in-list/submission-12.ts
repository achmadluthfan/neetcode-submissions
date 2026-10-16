class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // initiate map object & array for return
        const map = new Map<number, number[]>();
        // loop nums then put into map object (grouping based on same number)
        for (const num of nums) {
            if(map.has(num)) {
                map.get(num).push(num);
            } else {
                map.set(num, [num]);
            }
        };

        const mapValues = map.values();

        // order based on length values
        const sorted = new Map([...map.entries()].sort((a,b) => {
            return b[1].length - a[1].length
        }));

        const splitted:number[] = [...sorted.keys()].slice(0,k);

        // use k as a filter of total number that want to return

        // sampe bingung gimana caranya split array nya berdasarkan value dari k kemudian return it

        // then return it
        return splitted
    }
}
