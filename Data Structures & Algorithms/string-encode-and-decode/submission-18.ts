class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // const encoder = new TextEncoder();
        // const encoding_string = encoder.encode(strs[0]);
        let result: string = "";
        const encoding_string = strs.map(str => {
            result += btoa(str);
            str
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
