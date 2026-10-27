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
            result += `${str.length}#${str}`
        }

        console.log("result from encode -> ", result);

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        console.log("str at decode -> ", str)
        // big question : how to split string 
        let result:string[] = [];
        // let i = 0;

        return result
    }
}
