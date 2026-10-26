class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // encode = change data format into different format
        // btoa = function for encode into Base64 format
        // main goal of this function is : change array format into string
        // problem = sistem can't understand word and dont know how to separate it, so it need to add some character to separate each word that encoded
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
