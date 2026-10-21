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
            result += "#"
        });
        console.log("result form encode", result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const splitted = str.split("#");
        console.log("splitted result => ",splitted)
        const decoded = atob(str);
        console.log("decoded", decoded);
        // const decoder = new TextDecoder();
        // const decoding_string = decoder.decode(str);
        // console.log('decoding_string', decoding_string);
        return 
    }
}
