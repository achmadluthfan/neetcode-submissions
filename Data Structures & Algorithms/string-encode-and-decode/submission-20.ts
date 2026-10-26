class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (!strs) {
            return
        }

        let result: string = "";
        strs.map(str => {
            result += btoa(str);
            result += "#"
        });

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const splitted = str.replace(/#$/,"").split("#")
        const decoded = splitted.map(spl => atob(spl));
        return decoded;
    }
}
