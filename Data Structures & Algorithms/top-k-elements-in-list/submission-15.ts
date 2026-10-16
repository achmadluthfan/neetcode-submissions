class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number, number>();

        // 1. Hitung frekuensi tiap angka: O(n)
        for (const num of nums) {
            countMap.set(num, (countMap.get(num)?? 0) + 1);
        };

        // 2. Buat bucket: indeks = frekuensi, value = array angka
        // Ukuran array = nums.length + 1
        const buckets: number[][] = Array.from({ length: nums.length + 1 }, () =>  []);

        for (const [num, count] of countMap.entries()) {
            buckets[count].push(num);
        };

        // 3. Tarik angka dari frekuensi tertinggi (kanan ke kiri): O(n)
        const result: number[] = [];
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
            }
        }

        return result.slice(0, k);

        return
    }
}
