class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const encoder = new TextEncoder();
        const encoding_string = encoder.encode(strs[0]);
        console.log("encoding_string", encoding_string);
        return;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decoder = new TextDecoder();
        // const decoding_string = decoder.decode(str);
        // console.log('decoding_string', decoding_string);
        return 
    }
}
