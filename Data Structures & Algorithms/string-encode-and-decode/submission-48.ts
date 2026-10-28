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
        let argString = str;
        let result:string[] = [];

        // HOW TO CREATE LOOPING FOR THIS BROKKKK :(
            // get index of delimiter
            const index = argString.indexOf("#");
            // catch the length str (how to do this shit?);
            const lengthWord = Number(argString[index - 1]);
            // length all (length word + index + char)
            const lengthAll = lengthWord + 2;
            // get the character based on the length of str, count & catch it after delimiter position
            const split = argString.slice(index + 1, (index + 1) + lengthWord);
            // push into array []
            result.push(split);
        // the return it

        return result;

    }
}
