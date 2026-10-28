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

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        // big question : how to split the string 
        console.log("str at decode -> ", str);
        let result:string[] = [];

        // i think we need to use looping
            // get index of delimiter
            const index = str.indexOf("#");
            console.log("index", index);
            // catch the length str (how to do this shit?)
            const split = str.slice(index, index + 5);
            console.log("split", split);
            // get the character based on the length of str, count & catch it after delimiter position

            // push into array []

        // the return it

        return result;
    }
}
