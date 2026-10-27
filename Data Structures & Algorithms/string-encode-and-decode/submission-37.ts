class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // encode = change data format into different format
        // btoa = function for encode into Base64 format
        // main goal of this function is : change array format into string
        // problem = sistem can't understand word and dont know how to separate it, so it need to add some character to separate each word to encoded
        let result:string = "";

        if(strs?.length === 1) {
            return result;
        };

        for (const str of strs) {
            result += `#${str}`
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        console.log("str at decode -> ", str);
        // big question : how to split the string 
        let result:string[] = [];

        // get index of delimiter
        const index = str.indexOf("#");
        console.log("index", index);
        // get the length str

        // get the character based ont hte total length for str, count it after delimiter position

        // push into array []

        // the return it

        return result
    }
}
