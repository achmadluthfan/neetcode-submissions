class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {

        const encoded_string:any = strs.map(str => btoa(str));
        console.log("encoded_string", encoded_string);
        return
        // return encoded_sring
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        return
    }
}
