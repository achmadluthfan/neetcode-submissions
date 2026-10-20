class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded_string:string = "";
    
        strs.map(str => {
            encoded_string += btoa(str)
        });
        console.log("encoded_string lur", encoded_string);
        return encoded_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decoded_string = atob(str);
        console.log("decoded_string", decoded_string);
        return 
    }
}
