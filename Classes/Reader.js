const fs = require("fs");
const util = require("util");



class Reader {

    constructor(){
        this.reader = util.promisify(fs.readFile); //make the readfile a promise function
    }

    async Read(filepath){
        try {
            return await this.reader(filepath, "utf8");
        } catch (err) {
            return undefined
        }
    };

}

module.exports = Reader;