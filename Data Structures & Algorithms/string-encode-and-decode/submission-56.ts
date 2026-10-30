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
        let argString: string = "";
        let result:string[] = [];

        // wrapped this algorithm into looping
        // while(true) {
            console.log("strString !== str", argString !== str);
            // get index of delimiter
            const index = str.indexOf("5#");
            console.log("index", index);
            // catch the length str (how to do this shit?);
            const lengthWord = Number(str[index - 1]);
            // length all (length word + index + char)
            const lengthAll = lengthWord + 2;
            // get the character based on the length of str then catch start from delimiter index
            const split = str.slice(index + 1, (index + 1) + lengthWord);
            // push into array []
            result.push(split);
            // remove word that was pushed to result variable
            argString = str.slice(lengthAll);

            // if(!argString) {
            //     break
            // }
        // }

        // console.log("argString outside loopign", argString);

        // then return it
        console.log("result", result);

        return result;

    }
}
