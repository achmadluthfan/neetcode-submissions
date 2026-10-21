class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // const encoder = new TextEncoder();
        // const encoding_string = encoder.encode(strs[0]);
        let result: string = "";
        const encoding_string = strs.map(str => result += btoa(str));
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decoded = atob(str[0]);
        console.log("decoded", decoded);
        // const decoder = new TextDecoder();
        // const decoding_string = decoder.decode(str);
        // console.log('decoding_string', decoding_string);
        return 
    }
}
