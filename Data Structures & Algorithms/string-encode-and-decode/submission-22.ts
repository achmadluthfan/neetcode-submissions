class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (!strs) return
        let result:string = "";
        for (const str of strs) {
            result += `${str.length}#${str}`
        }
        console.log("result", result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (!str) return [];
        const splitted = str.replace(/#$/,"").split("#")
        const decoded = splitted.map(spl => atob(spl));
        return decoded;
    }
}
